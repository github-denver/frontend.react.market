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

export const userFollows = ({ follower_id, following_id }) => {
  return axios.post(`/api/board/follows`, {
    follower_id,
    following_id
  });
};

export const userFollowing = ({ following_id }) => {
  return axios.get(`/api/board/following/${following_id}`);
};

export const userFollower = ({ follower_id }) => {
  return axios.get(`/api/board/follower/${follower_id}`);
};
