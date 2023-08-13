import axios from "@/library/gateway/axios";

export const userCheck = (token) => {
  return axios.get("/api/me", {
    params: {
      accessToken: token,
    },
  });
};

export const register = ({ id, name, password }) =>
  axios.post("/api/register", { id, name, password });

export const login = ({ id, password }) =>
  axios.post("/api/login", { id, password });

export const logout = () => axios.get("/api/logout");
