import axios from 'axios';
import {API_URL} from './constants';
const http = axios.create({
  baseURL: API_URL,
});

export default http;

export const setAuthToken = token => {
  if (token) http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete http.defaults.headers.common['Authorization'];
};
