import { createAction, createSlice } from '@reduxjs/toolkit';
import createRequestSaga from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/auth';
import Cookies from 'js-cookie';
import { call, takeLatest } from 'redux-saga/effects';

// Action Types
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_USER = 'SET_USER';

const USER_REGISTER = 'USER_REGISTER';
const USER_CHECK = 'USER_CHECK';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_PROFILE = 'USER_PROFILE';

// Action Creators
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken) => ({ accessToken }));
export const setUser = createAction(SET_USER, (accessToken) => ({ accessToken }));

export const userRegister = createAction(USER_REGISTER, (payload) => ({ payload })); // payload: { id, name, password, email }
export const userCheck = createAction(USER_CHECK, (accessToken) => ({ accessToken })); // payload: accessToken
export const userLogin = createAction(USER_LOGIN, (payload) => ({ payload })); // payload: { id, password }
export const userLogout = createAction(USER_LOGOUT);
export const userProfile = createAction(USER_PROFILE, (payload) => ({ payload })); // payload: { id, name, password, email } // picture

// initial State
const initialState = {
  user: {
    user2: null,
    user: null
  },
  auth: {
    accessToken: null,
    message: null
  },
  error: null
};

// Reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  // 내부 action 및 동기 action
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder
      .addCase(setAccessToken, (state, action) => {
        console.group('builder.addCase(setAccessToken, (state, action) => { .. })');
        console.groupEnd();
      })
      .addCase(setUser, (state, action) => {
        console.group('builder.addCase(setUser, (state, action) => { .. })');
        console.groupEnd();
      });
  }
});

export default userSlice.reducer;

// Saga
const userRegisterSaga = createRequestSaga(USER_REGISTER, gateway.userRegister);
const userCheckSaga = createRequestSaga(USER_CHECK, gateway.userCheck);
const userLoginSaga = createRequestSaga(USER_LOGIN, gateway.userLogin);

function* userLogoutSaga() {
  try {
    yield call(gateway.userLogout);

    localStorage.removeItem('user');

    Cookies.remove('accessToken');
  } catch (error) {
    console.error(error);
  }
}

const userProfileSaga = createRequestSaga(USER_PROFILE, gateway.userProfile);

export function* userSaga() {
  yield takeLatest(USER_REGISTER, userRegisterSaga);
  yield takeLatest(USER_CHECK, userCheckSaga);
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_LOGOUT, userLogoutSaga);
  yield takeLatest(USER_PROFILE, userProfileSaga);
}
