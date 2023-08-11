import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createPromiseSaga from "@/library/createRequestSaga";

const initialState = {
  auth: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("state: ", JSON.stringify(state));
      console.log("action: ", action);

      return {
        ...state,
      };
    },
    logout: (state, action) => {
      return {
        ...initialState,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

// Main Saga
export function* authSaga() {
  console.group("export function* authSaga() { .. }");
  console.groupEnd();

  yield takeLatest(login, createPromiseSaga("AUTH", gateway.login));
}

// function createPromiseSaga(type, promiseCreator) {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

//   return function* (action) {
//     console.log(action);
//     try {
//       // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정합니다.
//       const payload = yield call(promiseCreator, action.payload);

//       yield put({ type: SUCCESS, payload });
//     } catch (e) {
//       yield put({ type: ERROR, error: true, payload: e });
//     }
//   };
// }

export default authSlice.reducer;
