import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Your Laravel API base URL
  withCredentials: true, // To handle CSRF and cookies
});

export default axiosInstance;
