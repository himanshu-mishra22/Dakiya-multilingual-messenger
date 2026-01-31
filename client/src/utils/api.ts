import api from "../utils/axios";
import { API_URL } from "../constants/cons";

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export async function login(email: string, password: string) {
  const res = await api.post<LoginResponse>(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return res.data;
}

export async function signup(
  name: string,
  email: string,
  password: string
) {
  const res = await api.post<AuthResponse>(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return res.data;
}
