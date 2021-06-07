import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://scrimsapp.tech/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
