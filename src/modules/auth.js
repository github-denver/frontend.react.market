import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";

const USER_REGISTER = "auth/register";
const USER_LOGIN = "auth/login";

export const register = createAction(USER_REGISTER, (payload) => {
  console.log("payload: ", payload);

  return { payload };
});
export const login = createAction(USER_LOGIN, (payload) => ({ payload }));

const registerSaga = createRequestSaga(USER_REGISTER, gateway.register);
const loginSaga = createRequestSaga(USER_LOGIN, gateway.login);

// Main Saga
export function* authSaga() {
  yield takeLatest(USER_REGISTER, registerSaga);
  yield takeLatest(USER_LOGIN, loginSaga);
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
    init: (state, action) => {
      return {
        ...state,
        error: null,
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
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  },
});

export const { init, logout } = authSlice.actions;

export default authSlice.reducer;
