import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/v1",
});

export const fetchBands = (city) => API.get(`/bands`, { params: { city } });
