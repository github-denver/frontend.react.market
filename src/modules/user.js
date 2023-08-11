import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";

const TEMPORARY_USER = "user/temporaryUser"; // 새로 고침 이후 임시 로그인을 처리합니다.

// 회원정보를 확인합니다.
const USER_CHECK = "user/check";
const USER_CHECK_SUCCESS = "user/check/success";
const USER_CHECK_FAILURE = "user/check/failure";

export const temporaryUser1 = createAction(TEMPORARY_USER, (payload) => {
  console.group(
    "3. export const temporaryUser1 = createAction(TEMPORARY_USER, (payload) => { .. }"
  );
  console.log("payload: ", payload);
  console.groupEnd();

  return { payload };
});

export const userCheck = createAction(USER_CHECK, (payload) => {
  console.group(
    "12. export const userCheck = createAction(USER_CHECK, (payload) => { .. }"
  );
  console.log("payload: ", payload);
  console.groupEnd();

  return { payload };
});

const userCheckSaga = createRequestSaga(USER_CHECK, gateway.userCheck);

// Main Saga
export function* userSaga() {
  console.group("2. export function* userSaga() { .. }");
  console.log("USER_CHECK: ", USER_CHECK);
  console.groupEnd();

  yield takeLatest(USER_CHECK, userCheckSaga);
}

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    temporaryUser: (state, action) => {
      console.group("16. temporaryUser: (state, action) => { .. }");
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);
      console.groupEnd();

      return {
        ...state,
        user: action.payload,
      };
    },
    checkSuccess: (state, action) => {
      console.group("16. checkSuccess: (state, action) => { .. }");
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);
      console.groupEnd();

      return {
        ...state,
        user: action.payload,
        error: null,
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

export const { temporaryUser } = userSlice.actions;

export default userSlice.reducer;
