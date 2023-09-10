import axios from "./axios";

export const modify = ({ category, number, payload }) => {
  return axios.post(`/api/board/${category}/modify/${number}`, payload);
};
