import axios from "@/library/gateway/axios";

export const userCheck = (token) => {
  return axios.get("/api/me", {
    params: {
      accessToken: token,
    },
  });
};

export const register = ({ id, name, password, email }) =>
  axios.post("/api/register", { id, name, password, email });

export const login = ({ id, password }) =>
  axios.post("/api/login", { id, password });

export const logout = () => axios.get("/api/logout");

export const profile = ({ id, name, password, email, picture }) =>
  axios.post("/api/profile", { id, name, password, email, picture });
