import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sujeitoprogramador.com/'
});


export default api;