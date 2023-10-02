import axios from '@/library/gateway/axios';

export const list = ({ postId }) => axios.get(`/api/board/comments?postId=${postId}`);
export const write = ({ postId, parentCommentId, content }) => axios.post(`/api/board/comments`, { postId, parentCommentId, content });
export const commentRemove = ({ commentId }) => axios.get(`/api/board/comments/delete1/${commentId}`);
export const commentModify = ({ commentId, modifyContent }) => axios.post(`/api/board/comments/modify1/${commentId}`, { content: modifyContent });
