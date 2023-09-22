import axios from './axios';

export const read = ({ category, number }) => axios.get(`/api/board/${category}/read/${number}`);
