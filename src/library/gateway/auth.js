import axios from '@/library/gateway/axios';

export const userCheck = (token) =>
  axios.get('/api/me', {
    params: {
      accessToken: token
    }
  });

export const register = ({ id, name, password, email }) => axios.post('/api/register', { id, name, password, email });

export const idCheck = ({ id }) => axios.get(`/api/idCheck?id=${id}`);

export const nameCheck = ({ name }) => axios.get(`/api/nameCheck?name=${name}`);

export const emailCheck = ({ email }) => axios.get(`/api/emailCheck?email=${email}`);

export const userLogin = ({ id, password }) => axios.post('/api/login', { id, password });

export const userLogout = () => axios.get('/api/logout');

export const profile = ({ id, name, password, email, picture }) => axios.post('/api/profile', { id, name, password, email, picture });

export const sendEmail = ({ email }) => axios.post('/api/mail/authentication', { email });

export const userModifyPassword = ({ token, password, passwordConfirm }) => axios.post('/api/mail/verification', { token, password, passwordConfirm });
