import axios from 'axios';

export const appAxios = axios.create({
  baseURL: 'https://control.carket.kg/api/v1.0/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
