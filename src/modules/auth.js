import { createAction, createSlice } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";
import Cookies from "js-cookie";

const ACCESS_TOKEN_SAVE = "auth/accessTokenSave";

const USER_REGISTER = "auth/register";
const USER_LOGIN = "auth/login";
const USER_LOGOUT = "auth/singout";
const USER_PROFILE = "auth/profile";

export const saveAccessToken = createAction(ACCESS_TOKEN_SAVE, (payload) => ({
  payload,
}));

export const register = createAction(USER_REGISTER, (payload) => ({ payload }));
export const login = createAction(USER_LOGIN, (payload) => ({ payload }));
export const singout = createAction(USER_LOGOUT, (payload) => ({ payload }));
export const profile = createAction(USER_PROFILE, (payload) => ({ payload }));

const registerSaga = createRequestSaga(USER_REGISTER, gateway.register);
const loginSaga = createRequestSaga(USER_LOGIN, gateway.login);
const profileSaga = createRequestSaga(USER_PROFILE, gateway.profile);

function* singoutSaga() {
  try {
    yield call(gateway.logout);

    localStorage.removeItem("user");

    Cookies.remove("accessToken");
  } catch (error) {
    console.error(error);
  }
}

// Main Saga
export function* authSaga() {
  yield takeLatest(USER_REGISTER, registerSaga);
  yield takeLatest(USER_LOGIN, loginSaga);
  yield takeLatest(USER_LOGOUT, singoutSaga);
  yield takeLatest(USER_PROFILE, profileSaga);
}

const initialState = {
  auth: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    accessTokenSave: (state, action) => {
      state.auth = {
        accessToken: action.payload,
        message: null,
      };
    },
    registerSuccess: (state, action) => {
      return {
        ...state,
        auth: action.payload,
        error: null,
      };
    },
    registerFailure: (state, action) => {
      return {
        ...state,
        error: action.payload.response.data.message,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        auth: action.payload,
        error: null,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        error: action.payload.response.data.message,
      };
    },
    singout: (state, action) => {
      state.auth = null;
      state.token = null;
      state.error = null;
    },
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  },
});

export const { accessTokenSave } = authSlice.actions;

export default authSlice.reducer;
