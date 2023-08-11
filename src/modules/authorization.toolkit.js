import createRequestSaga from "@/library/createRequestSaga";
import { takeLatest, call } from "redux-saga/effects";
import Cookies from "js-cookie";

import { createAction, createReducer } from "@reduxjs/toolkit";

import * as gateway from "@/library/gateway/auth";

// Action Type
/*
  State에 변화가 필요할 때 Action을 발생시키고 이것은 하나의 객체입니다.
  즉, 어떤 동작에 대해 선언된 객체입니다.

  Action은 반드시 type을 가지고 있어야 하고 이외 값은 상황에 따라 넣을 수 있습니다.
  type은 어떤 동작을 할 것인지 표기한 명령어입니다.
*/
const FIELD = "authorization/FIELD";
const FORM_INITIAL = "authorization/FORM/INITIAL";

const LOGIN = "authorization/LOGIN";
const LOGIN_SUCCESS = "authorization/LOGIN/SUCCESS";
const LOGIN_FAILURE = "authorization/LOGIN/FAILURE";
const LOGOUT = "authorization/LOGOUT";

const REGISTER_INITIAL = "authorization/REGISTER/INITIAL";
const REGISTER = "authorization/REGISTER";
const REGISTER_SUCCESS = "authorization/REGISTER/SUCCESS";
const REGISTER_FAILURE = "authorization/REGISTER/FAILURE";

const INITIAL = "authorization/INITIAL";

// Action Creator
/*
  Action이 동작에 대해 선언된 객체라면 Action Creator는 Action을 생성해서 실제 객체로 만들어주는 함수입니다.
*/
export const changeField = createAction(FIELD, (payload2) => {
  // return {
  //   form: payload.form,
  //   key: payload.key,
  //   value: payload.value,
  // };

  return {};
});
export const initializeForm = createAction(FORM_INITIAL, (payload) => payload);
export const login = createAction(LOGIN, (payload) => payload);
export const logout = createAction(LOGOUT, (payload) => payload);
export const register = createAction(REGISTER, (payload) => payload);
export const registerInitial = createAction(REGISTER_INITIAL);

// Main Saga
/*
  put은 dispatch입니다.
*/
const loginSaga = createRequestSaga(LOGIN, gateway.login);
const registerSaga = createRequestSaga(REGISTER, gateway.register);

function* logoutSaga() {
  try {
    yield call(gateway.logout);

    localStorage.removeItem("user");

    Cookies.remove("accessToken");
  } catch (error) {
    console.error(error);
  }
}

export function* authorizationSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(REGISTER, registerSaga);
}

// State
const initialState = {
  login: {
    id: "",
    password: "",
  },
  register: {
    id: "",
    name: "",
    email: "",
    password: "",
    confirm: "",
  },
  authorization: null,
  token: null,
  error: null,
};

// Toolkit Reducer
/*
  State에 변화를 일으키는 함수입니다. Action을 직접 수행하는 함수입니다.
  Reducer는 현재의 State와 Action을 인자 값으로 받아서 Store에 접근해 Action Type에 맞춰 State를 변경합니다.
*/
export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, { payload: authorization }) => {
    return {
      ...state,
      authorization,
      error: null,
    };
  },
  [LOGIN_FAILURE]: (state, { payload: error }) => {
    return {
      ...state,
      error,
    };
  },
  [LOGOUT]: (state, { payload: form }) => {
    return {
      ...state,
      [form]: initialState[form],
      authorization: null,
      token: null,
      error: null,
    };
  },
  [REGISTER_SUCCESS]: (state, { payload: authorization }) => {
    return {
      ...state,
      authorization,
      error: null,
    };
  },
  [REGISTER_FAILURE]: (state, { payload: error }) => {
    return {
      ...state,
      error,
    };
  },
  [REGISTER_INITIAL]: (state, { payload: error }) => {
    return {
      ...initialState,
      authorization: null,
    };
  },
  [FIELD]: (state, payload) => {
    return {
      // [form.key]: value,
    };
  },
  [FORM_INITIAL]: (state, { form, key, value }) => {
    return {
      ...state,
      [form]: initialState[form],
      error: null,
    };
  },
  [INITIAL]: () => {
    return {
      ...initialState,
    };
  },
});

// Dispatch
/*
  Dispatch는 Store의 내장 함수 중 하나로 Reducer의 Action을 발생시키는 함수입니다.
  Dispatch는 dispatch(action) 이렇게 Action을 인자 값으로 전달합니다.

  이렇게 호출을 하면 Store가 Reducer를 실행해 Reducer가 전달한 Action을 처리하고 새로운 State를 만들어 줍니다.
*/

// Subscribe
/*
  Subscribe는 Store의 내장 함수 중 하나로 함수 형태의 값을 인자로 받는데, Action이 Dispatch될 때마다 전달해 준 함수를 호출합니다.

  subscribe는  Store를 주시하고 있다가 Dispatch 될 때 함수를 호출합니다.
*/

// Reducer 세 가지 규칙
/*
  1. 하나의 애플리케이션은 하나의 Store만 가질 수 있습니다. (여러 개의 Store을 가질 수 있지만 권장하지 않습니다.)

  2. 상태는 읽기 전용입니다. (기존 state는 수정하지 않고 새로운 state를 만들어 수정하는 방식으로 사용합니다. 이는 불변성을 위해서입니다.)

  3. Reducer는 순수 함수입니다. (Reducer는 이전 State와 Action 객체를 Parameter로 전달받아야 하고 이전의 State는 건드리지 않고 변화를 시킨 다음 새로운 State 객체를 만들어 반환해야 합니다. 동일한 Parameter로 호출된 Reducer는 언제나 같은 패턴의 결과 값을 반환해야 합니다.)
*/
