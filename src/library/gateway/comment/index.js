import axios from '@/library/gateway/axios';

export const list = ({ postId }) => axios.get(`/api/board/comments?postId=${postId}`);
