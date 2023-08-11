/*
import createRequestSaga from "@/library/createRequestSaga";
import { takeLatest, call } from "redux-saga/effects";
import Cookies from "js-cookie";

import * as gateway from "@/library/gateway/auth";

const TEMPORARY = "user/TEMPORARY"; // 새로 고침 이후 임시 로그인을 처리합니다.
const LOGOUT = "user/LOGOUT";

// 회원정보를 확인합니다.
const CHECK = "auth/CHECK";
const SUCCESS = "auth/CHECK/SUCCESS";
const FAILURE = "auth/CHECK/FAILURE";

export const temporaryUser = (payload) => ({ type: TEMPORARY, payload });
export const logout = () => ({ type: LOGOUT });
export const check = (token) => {
  return { type: CHECK, token };
};

const checkSaga = createRequestSaga(CHECK, gateway.check);

function checkFailureSaga() {
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

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  error: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case TEMPORARY:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    case SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default user;
*/
