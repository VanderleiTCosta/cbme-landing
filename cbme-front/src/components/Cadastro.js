import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [referralInfo, setReferralInfo] = useState(null);
  const [validatingCode, setValidatingCode] = useState(false);

  const handleChange = e => {
    if (e.target.name === 'referralCode') {
      const numericValue = e.target.value.replace(/\D/g, '');
      setForm({ ...form, [e.target.name]: numericValue });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Validar código de indicação quando mudar
  useEffect(() => {
    const validateCode = async () => {
      if (form.referralCode && form.referralCode.length === 6) {
        setValidatingCode(true);
        try {
          const response = await axios.get(
            `http://localhost:5000/api/users/validate/${form.referralCode}`
          );
          if (response.data.success) {
            setReferralInfo({
              name: response.data.data.referrer,
              usageCount: response.data.data.usageCount
            });
          } else {
            setReferralInfo(null);
          }
        } catch (err) {
          setReferralInfo(null);
          if (err.response?.status !== 404) {
            console.error('Erro ao validar código:', err);
          }
        } finally {
          setValidatingCode(false);
        }
      } else {
        setReferralInfo(null);
      }
    };

    const timer = setTimeout(() => {
      validateCode();
    }, 500);

    return () => clearTimeout(timer);
  }, [form.referralCode]);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const res = await axios.post('http://localhost:5000/api/users', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setResult(res.data);
      setForm({ fullName: '', email: '', phone: '', referralCode: '' });
      setReferralInfo(null);
    } catch (err) {
      setError(
        err.response?.data?.error || 
        err.response?.data?.message || 
        err.message || 
        'Erro ao cadastrar usuário'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Nome completo"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            id="phone"
            name="phone"
            placeholder="Telefone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">Código de Indicação (opcional)</label>
          <input
            id="referralCode"
            name="referralCode"
            placeholder="Código de indicação (6 dígitos)"
            value={form.referralCode}
            onChange={handleChange}
            maxLength="6"
            pattern="\d*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {validatingCode && (
            <p className="mt-1 text-sm text-gray-500">Validando código...</p>
          )}
          {referralInfo && (
            <div className="mt-2 bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                Código válido! Pertence a: <strong>{referralInfo.name}</strong>
              </p>
            </div>
          )}
          {form.referralCode.length === 6 && !referralInfo && !validatingCode && (
            <p className="mt-1 text-sm text-red-600">Código inválido</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || (form.referralCode && form.referralCode.length === 6 && !referralInfo)}
          className="w-full px-4 py-2 bg-redapi text-white font-semibold rounded-lg disabled:bg-gray-400 hover:bg-redapi/80 transition-colors"
        >
          {loading ? 'Enviando...' : 'Cadastrar'}
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg">
          <p>Cadastro realizado com sucesso! Seu código de indicação: <strong>{result.data.referralCode}</strong></p>
        </div>
      )}

      {error && (
        <div className="mt-6 bg-red-100 text-red-800 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Cadastro;