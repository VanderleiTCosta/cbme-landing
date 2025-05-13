import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar token de admin
api.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const validateReferralCode = async (code) => {
  try {
    const response = await api.get(`/users/validate/${code}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getReferralStats = async () => {
  try {
    const response = await api.get('/admin/referral-stats');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

const handleApiError = (error) => {
  if (error.response) {
    throw new Error(error.response.data.error || 'Erro no servidor');
  } else if (error.request) {
    throw new Error('Sem resposta do servidor');
  } else {
    throw new Error('Erro ao configurar requisição');
  }
};

export default api;