import axios from 'axios';
import { env } from '@/constants/env';

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalized = {
      message: error?.response?.data?.message || error.message || 'Something went wrong',
      code: error?.response?.status?.toString()
    };
    return Promise.reject(normalized);
  }
);
