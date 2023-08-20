import { createAction, createSlice } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";
import Cookies from "js-cookie";

// const SAVED_USER = "user/savedUser"; // 새로 고침 이후 임시 로그인을 처리합니다.

// 회원정보를 확인합니다.
const USER_CHECK = "user/check";
const USER_CHECK_FAILURE = "user/check/failure";
const USER_LOGOUT = "user/logout";

// export const savedUserCheck = createAction(SAVED_USER, (payload) => ({ payload }));
export const userCheck = createAction(USER_CHECK, (payload) => ({ payload }));
export const logout = createAction(USER_LOGOUT, (payload) => ({ payload }));

const userCheckSaga = createRequestSaga(USER_CHECK, gateway.userCheck);

function userCheckFailureSaga() {
  try {
    localStorage.removeItem("user");

    Cookies.remove("accessToken");
  } catch (error) {
    console.error(error);
  }
}

function* logoutSaga() {
  try {
    yield call(gateway.logout);

    localStorage.removeItem("user");

    Cookies.remove("accessToken");
  } catch (error) {
    console.error(error);
  }
}

// Main Saga
export function* userSaga() {
  yield takeLatest(USER_CHECK, userCheckSaga);
  yield takeLatest(USER_CHECK_FAILURE, userCheckFailureSaga);
  yield takeLatest(USER_LOGOUT, logoutSaga);
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
    savedUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    checkSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    checkFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
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

export const { savedUser } = userSlice.actions;

export default userSlice.reducer;
