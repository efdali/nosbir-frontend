import axios from 'axios';
import {API_URL} from './constants';
const http = axios.create({
  baseURL: API_URL,
});

export default http;

http.interceptors.request.use(config => {
  config.headers.common['Authorization'] = typeof window === 'undefined' ? '' : `Bearer ${localStorage.token}`;
  return config;
});
