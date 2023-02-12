import axios from 'axios';

const API_KEY = '31824438-78542d665d1f1906f4741f5da';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const searchPhoto = async (q, page = 1, per_page) => {
  const { data } = await instance({
    method: 'get',
    params: {
      key: API_KEY,
      q,
      page,
      per_page,
    },
  });
  return data;
};
