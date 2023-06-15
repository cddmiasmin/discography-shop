import axios from 'axios';
//import { REACT_APP_API_URL } from '../../env';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;
