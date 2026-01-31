import axios from "axios";
import { API_URL } from "../constants/cons";

const api = axios.create({
  baseURL: API_URL,
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// handle expired / invalid token
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // token is invalid or expired
      localStorage.removeItem("token");

      // force redirect
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

