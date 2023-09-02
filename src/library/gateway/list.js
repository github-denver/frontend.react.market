import axios from "./axios";

export const list = ({ category, number, select, keyword }) => {
  let url = `/api/board/${category}/list/${number}`;

  if (typeof select !== "undefined" && typeof keyword !== "undefined") {
    url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`;
  }

  return axios.get(url);
};
