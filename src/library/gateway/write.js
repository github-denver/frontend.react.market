import axios from "./axios";

export const write = ({ category, payload }) => {
  return axios.post(`/api/board/${category}/write`, payload);
};
