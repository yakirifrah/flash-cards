import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://localhost:4000/api',
});

export const getData = () => {
  const url = `/data`;
  return axios.get(url);
};
