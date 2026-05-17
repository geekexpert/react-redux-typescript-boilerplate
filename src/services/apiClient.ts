import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.yourdomain.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// The "Magic" of Services: Interceptors
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    // Automatically attach the Bearer token to EVERY request
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;