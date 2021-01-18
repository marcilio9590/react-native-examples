import axios from 'axios';

//https://free.currconv.com/api/v7/
//convert?q=USD_BRL&compact=ultra&apiKey=46803fa5ee61f1fe555d


const api = axios.create({
  baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;