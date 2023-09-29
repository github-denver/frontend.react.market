import axios from '@/library/gateway/axios';

export const list = ({ category, number, select, keyword }) => {
  let url = `/api/board/${category}/list/${number}`;

  if (typeof select !== 'undefined' && typeof keyword !== 'undefined') {
    url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`;
  }

  return axios.get(url);
};

export const write = ({ category, payload }) => {
  return axios.post(`/api/board/${category}/write`, payload);
};

export const read = ({ category, number }) => axios.get(`/api/board/${category}/read/${number}`);

export const modify = ({ category, number, payload }) => {
  return axios.post(`/api/board/${category}/modify/${number}`, payload);
};

export const boardRemove = ({ category, number }) => axios.get(`/api/board/${category}/delete/${number}`);

export const follow = ({ following_id }) => axios.post(`/api/board/follow`, { following_id });
export const unfollow = ({ following_id }) => axios.get(`/api/board/unfollow/${following_id}`);
export const following = () => axios.get(`/api/board/following`);
export const follower = () => axios.get(`/api/board/follower`);
