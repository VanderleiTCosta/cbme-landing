import React, { useState } from 'react';
import axios from 'axios';

const FormPopup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    if (!validateEmail(formData.email)) {
      setMessage({ text: 'Por favor, insira um e-mail válido', type: 'error' });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/submit', formData);
      setMessage({
        text: `Cadastro realizado! Seu código: ${response.data.referralCode}`,
        type: 'success'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        referralCode: ''
      });
    } catch (error) {
      setMessage({
        text: error.response?.data?.error || 'Erro ao enviar formulário',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cadastro</h2>
      
      {message.text && (
        <div className={`mb-4 p-3 rounded ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome Completo*
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-mail*
          </label>
          <input
            className={`w-full px-3 py-2 border ${
              formData.email && !validateEmail(formData.email)
                ? 'border-red-500'
                : 'border-gray-300'
            } rounded-md`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formData.email && !validateEmail(formData.email) && (
            <p className="text-red-500 text-xs mt-1">Formato de e-mail inválido</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Telefone*
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Código de Indicação (opcional)
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            placeholder="Digite o código de quem te indicou"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {loading ? 'Enviando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default FormPopup;