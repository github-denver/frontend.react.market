import axios from "@/library/gateway/axios";

export const userCheck = (token) => {
  return axios.get("/api/beluga/me", {
    params: {
      accessToken: token,
    },
  });
};

export const register = ({ id, name, password }) => {
  console.log({ id, name, password });
  return axios.post("/api/beluga/register", { id, name, password });
};

export const login = ({ id, password }) =>
  axios.post("/api/beluga/login", { id, password });

export const logout = () => axios.get("/api/logout");
