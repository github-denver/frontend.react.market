import axios from "./axios";

export const remove = ({ category, number }) => {
  return axios.get(`/api/board/${category}/delete/${number}`);
};
