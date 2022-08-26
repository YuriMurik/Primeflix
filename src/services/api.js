import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=c1b62582800c630e7b49ef874248aa61

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;