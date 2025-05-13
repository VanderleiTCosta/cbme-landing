import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [candidaturas, setCandidaturas] = useState([]);
  const [stats, setStats] = useState([]);
  const [loadingCandidaturas, setLoadingCandidaturas] = useState(false);
  const [loadingStats, setLoadingStats] = useState(false);
  const [errorCandidaturas, setErrorCandidaturas] = useState('');
  const [errorStats, setErrorStats] = useState('');
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [statusFilter, setStatusFilter] = useState('');

  // Phone number formatting function
  const formatPhoneNumber = (phone) => {
    if (!phone) return '-';
    
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if it's a Brazilian number (starts with 55)
    if (cleaned.startsWith('55')) {
      const ddd = cleaned.substring(2, 4);
      const number = cleaned.substring(4);
      
      if (number.length === 8) { // Landline
        return `+55 (${ddd}) ${number.substring(0, 4)}-${number.substring(4)}`;
      } else if (number.length === 9) { // Mobile
        return `+55 (${ddd}) ${number.substring(0, 5)}-${number.substring(5)}`;
      }
    }
    
    // Return original if not a Brazilian number or unexpected format
    return phone;
  };

  // Save token to localStorage when changed
  useEffect(() => {
    if (token) {
      localStorage.setItem('adminToken', token);
    } else {
      localStorage.removeItem('adminToken');
    }
  }, [token]);

  // Fetch applications
  const fetchCandidaturas = async () => {
    setLoadingCandidaturas(true);
    setErrorCandidaturas('');
    try {
      const params = statusFilter ? { status: statusFilter } : {};
      const response = await axios.get('http://localhost:5000/api/admin/candidaturas', {
        params,
        headers: { Authorization: `Bearer ${token}` }
      });
      setCandidaturas(response.data.data);
    } catch (err) {
      setErrorCandidaturas(err.response?.data?.error || err.message || 'Erro ao carregar candidaturas');
    } finally {
      setLoadingCandidaturas(false);
    }
  };

  // Fetch referral stats
  const fetchStats = async () => {
    setLoadingStats(true);
    setErrorStats('');
    try {
      const response = await axios.get('http://localhost:5000/api/admin/referral-stats', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data.data);
    } catch (err) {
      setErrorStats(err.response?.data?.error || err.message || 'Erro ao carregar estatísticas');
    } finally {
      setLoadingStats(false);
    }
  };

  // Update application status
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/candidaturas/${id}/status`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCandidaturas();
    } catch (err) {
      setErrorCandidaturas(err.response?.data?.error || err.message || 'Erro ao atualizar status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Painel Administrativo
        </h1>

        {/* Controls section */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-end sm:space-x-4">
            {/* Token field */}
            <div className="flex-1">
              <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
                Token de Admin
              </label>
              <input
                id="token"
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Insira o token de admin"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status filter */}
            <div className="flex-1">
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por Status
              </label>
              <select
                id="statusFilter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos status</option>
                <option value="pendente">Pendente</option>
                <option value="visualizada">Visualizada</option>
                <option value="contratado">Contratado</option>
                <option value="rejeitada">Rejeitada</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <button
                onClick={fetchCandidaturas}
                disabled={loadingCandidaturas || !token}
                className="w-full sm:w-auto bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loadingCandidaturas ? 'Carregando...' : 'Buscar Candidaturas'}
              </button>
              <button
                onClick={fetchStats}
                disabled={loadingStats || !token}
                className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loadingStats ? 'Carregando...' : 'Buscar Estatísticas'}
              </button>
            </div>
          </div>
        </div>

        {/* Error messages */}
        {(errorCandidaturas || errorStats) && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6">
            {errorCandidaturas && <p className="mb-2">{errorCandidaturas}</p>}
            {errorStats && <p>{errorStats}</p>}
          </div>
        )}

        {/* Applications section */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Candidaturas</h2>
          {candidaturas.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-3 text-left">Nome</th>
                    <th className="py-2 px-3 text-left hidden sm:table-cell">E-mail</th>
                    <th className="py-2 px-3 text-left hidden md:table-cell">Telefone</th>
                    <th className="py-2 px-3 text-left hidden lg:table-cell">Área</th>
                    <th className="py-2 px-3 text-left hidden lg:table-cell">Vaga</th>
                    <th className="py-2 px-3 text-left">Status</th>
                    <th className="py-2 px-3 text-left hidden md:table-cell">Data</th>
                    <th className="py-2 px-3 text-left">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {candidaturas.map((cand) => (
                    <tr key={cand.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-3">{cand.nome}</td>
                      <td className="py-2 px-3 hidden sm:table-cell">{cand.email}</td>
                      <td className="py-2 px-3 hidden md:table-cell whitespace-nowrap">
                        {formatPhoneNumber(cand.telefone)}
                      </td>
                      <td className="py-2 px-3 hidden lg:table-cell">{cand.areaInteresse}</td>
                      <td className="py-2 px-3 hidden lg:table-cell">{cand.vagaInteresse || '-'}</td>
                      <td className="py-2 px-3">
                        <select
                          value={cand.status}
                          onChange={(e) => handleStatusChange(cand.id, e.target.value)}
                          className={`p-1 rounded text-sm ${
                            cand.status === 'pendente' ? 'bg-yellow-100 text-yellow-800' :
                            cand.status === 'visualizada' ? 'bg-blue-100 text-blue-800' :
                            cand.status === 'contratado' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          <option value="pendente">Pendente</option>
                          <option value="visualizada">Visualizada</option>
                          <option value="contratado">Contratado</option>
                          <option value="rejeitada">Rejeitada</option>
                        </select>
                      </td>
                      <td className="py-2 px-3 hidden md:table-cell">
                        {new Date(cand.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-3">
                        <a
                          href={`http://localhost:5000/api/admin/candidaturas/${cand.id}/curriculo`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Ver Currículo
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !loadingCandidaturas && <p className="text-gray-600">Nenhuma candidatura encontrada</p>
          )}
        </div>

        {/* Referral stats section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Estatísticas de Indicações</h2>
          {stats.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-3 text-left">Código</th>
                    <th className="py-2 px-3 text-left">Vezes Usado</th>
                    <th className="py-2 px-3 text-left hidden sm:table-cell">Proprietário</th>
                    <th className="py-2 px-3 text-left hidden md:table-cell">E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-3 text-center">{item.referralCode}</td>
                      <td className="py-2 px-3 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            item.usageCount > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                          }`}
                        >
                          {item.usageCount}
                        </span>
                      </td>
                      <td className="py-2 px-3 hidden sm:table-cell">{item.owner.name}</td>
                      <td className="py-2 px-3 hidden md:table-cell">{item.owner.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !loadingStats && <p className="text-gray-600">Nenhum dado de indicações encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;