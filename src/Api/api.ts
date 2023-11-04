import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

const endpoints = {
  people: 'people/',
};

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.error('Dev: Error in request', error);
    return Promise.reject(error);
  }
);

export { endpoints, instance };
