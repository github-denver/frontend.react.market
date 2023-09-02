import axios from "./axios";

export const read = ({ category, number }) => {
  return axios.get(`/api/board/${category}/read/${number}`);
};
