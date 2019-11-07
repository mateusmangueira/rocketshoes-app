import axios from 'axios';

const api = axios.create({
  // Chamada a API local do servidor: JSON-SERVER
  baseURL: 'http://localhost:3333',
});

export default api;
