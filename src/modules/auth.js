import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";

const LOGIN = "auth/login";

export const login = createAction(LOGIN, (payload) => {
  console.group(
    "3. export const login = createAction(LOGIN, ({ id, password }) => { .. }"
  );
  console.log("payload.id: ", payload.id);
  console.log("payload.password: ", payload.password);
  console.groupEnd();

  return { payload };
});

const loginSaga = createRequestSaga(LOGIN, gateway.login);

// Main Saga
export function* authSaga() {
  console.group("2. export function* authSaga() { .. }");
  console.log("LOGIN: ", LOGIN);
  console.groupEnd();

  yield takeLatest(LOGIN, loginSaga);
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
    loginSuccess: (state, action) => {
      console.group("7. loginSuccess: (state, action) => { .. }");
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);
      console.groupEnd();

      return {
        ...state,
        auth: action.payload,
        error: null,
      };
    },
    loginFailure: (state, action) => {
      console.group("7. loginFailure: (state, action) => { .. }");
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);
      console.log(
        "action.payload.response.data.message: ",
        action.payload.response.data.message
      );
      console.groupEnd();

      return {
        ...state,
        error: action.payload.response.data.message,
      };
    },
    logout: (state, action) => {
      console.group("logout: (state, action) => { .. }");
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);
      console.groupEnd();

      return {};
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
