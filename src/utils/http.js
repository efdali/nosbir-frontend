import axios from "axios";
import {API_URL} from './constant';
const http = axios.create({
  baseURL: API_URL
});
export default http;

export const setAuthToken = token => {
  if (token) http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete http.defaults.headers.common["Authorization"];
};
// instance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization =  token ? `Bearer ${token}` : '';
//   return config;
// });