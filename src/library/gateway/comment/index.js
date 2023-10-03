import axios from '@/library/gateway/axios';

export const commentList = ({ category, postId }) => axios.get(`/api/board/comments/${category}?postId=${postId}`);
export const commentWrite = ({ postId, parentCommentId, category, content }) => axios.post(`/api/board/comments/${category}`, { postId, parentCommentId, category, content });
export const commentModify = ({ commentId, category, modifyContent }) => axios.post(`/api/board/comments/${category}/modify1/${commentId}`, { category, content: modifyContent });
export const commentRemove = ({ commentId, category }) => axios.get(`/api/board/comments/${category}/delete1/${commentId}`);
