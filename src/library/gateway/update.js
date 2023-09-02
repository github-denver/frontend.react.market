import axios from "./axios";

export const update = ({ category, number, payload }) => {
  return axios.post(`/api/board/${category}/modify/${number}`, payload);
};
