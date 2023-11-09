import axios from '@/library/gateway/axios';

export const posts = ({ category, number, select, keyword }) => {
  let url = `/api/board/${category}/list/${number}`;

  if (typeof select !== 'undefined' && typeof keyword !== 'undefined') {
    url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`;
  }

  return axios.get(url);
};
export const postWrite = ({ category, payload }) => axios.post(`/api/board/${category}/write`, payload);
export const post = ({ category, number }) => axios.get(`/api/board/${category}/read/${number}`);
export const postModify = ({ category, number, payload }) => axios.post(`/api/board/${category}/modify/${number}`, payload);
export const postDelete = ({ category, number }) => axios.get(`/api/board/${category}/delete/${number}`);

export const recipes = ({ postId, category }) => {
  return axios.get(`/api/board/recipes?postId=${postId}&category=${category}`);
};
export const recipesWrite = ({ category, payload }) => axios.post(`/api/recipes/${category}/write`, payload);
export const recipesView = ({ category, number }) => axios.get(`/api/recipes/${category}/read/${number}`);
export const recipesModify = ({ category, number, payload }) => axios.post(`/api/recipes/${category}/modify/${number}`, payload);
export const recipesDelete = ({ category, number }) => axios.get(`/api/recipes/${category}/delete/${number}`);

export const follow = ({ following_id }) => axios.post(`/api/board/follow`, { following_id });
export const unfollow = ({ following_id }) => axios.get(`/api/board/unfollow/${following_id}`);
export const following = () => axios.get(`/api/board/following`);
export const follower = () => axios.get(`/api/board/follower`);
