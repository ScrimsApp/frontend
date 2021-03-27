import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 3000,
});
