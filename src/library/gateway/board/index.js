import axios from '@/library/gateway/axios';

export const list = ({ category, number, select, keyword }) => {
  let url = `/api/board/${category}/list/${number}`;

  if (typeof select !== 'undefined' && typeof keyword !== 'undefined') {
    url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`;
  }

  return axios.get(url);
};

export const write = ({ category, payload }) => {
  console.group('export const write = ({ category, payload }) => { .. }');
  console.log(payload.get('subject'));
  console.log(payload.get('content'));
  console.groupEnd();

  return axios.post(`/api/board/${category}/write`, payload);
};

export const read = ({ category, number }) => axios.get(`/api/board/${category}/read/${number}`);

export const modify = ({ category, number, payload }) => {
  console.group('export const modify = ({ category, number, payload }) => { .. }');
  console.log(payload.get('subject'));
  console.log(payload.get('content'));
  console.groupEnd();

  return axios.post(`/api/board/${category}/modify/${number}`, payload);
};

export const boardRemove = ({ category, number }) => axios.get(`/api/board/${category}/delete/${number}`);
