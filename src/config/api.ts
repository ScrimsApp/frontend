import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://scrimsapp.tech/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
