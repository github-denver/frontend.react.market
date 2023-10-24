import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/auth';
import Cookies from 'js-cookie';

// Action Types
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_USER = 'SET_USER';
const ERROR_INITIAL = 'ERROR_INITIAL';
const [USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE] = createRequestActionTypes('USER_REGISTER');
const [USER_CHECK, USER_CHECK_SUCCESS, USER_CHECK_FAILURE] = createRequestActionTypes('USER_CHECK');
const [USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE] = createRequestActionTypes('USER_LOGIN');
const USER_LOGOUT = 'USER_LOGOUT';
const [USER_MODIFY_PROFILE, USER_MODIFY_PROFILE_SUCCESS, USER_MODIFY_PROFILE_FAILURE] = createRequestActionTypes('USER_MODIFY_PROFILE');

// Action Creators
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (payload) => ({ payload })); // payload: { id, name, password, email }
export const setUser = createAction(SET_USER, (payload) => ({ payload })); // payload: { id, name, password, email }
export const errorInitial = createAction(ERROR_INITIAL);
export const userRegister = createAction(USER_REGISTER, (payload) => ({ payload })); // payload: { id, name, password, email }
export const userCheck = createAction(USER_CHECK, (payload) => ({ payload })); // payload: accessToken
export const userLogin = createAction(USER_LOGIN, (payload) => ({ payload })); // payload: { id, password }
export const userLogout = createAction(USER_LOGOUT);
export const userModifyProfile = createAction(USER_MODIFY_PROFILE, (payload) => ({ payload })); // payload: { id, name, password, email } // picture

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
export default createReducer(initialState, (builder) => {
  builder
    .addCase(ERROR_INITIAL, (state, action) => {
      state.error = null;
    })
    .addCase(SET_ACCESS_TOKEN, (state, action) => {
      state.auth.accessToken = action.payload;
      state.auth.message = null;
    })
    .addCase(SET_USER, (state, action) => {
      state.user.user2 = JSON.parse(action.payload);
      state.error = null;
    })
    .addCase(USER_REGISTER_SUCCESS, (state, action) => {
      state.error = null;
    })
    .addCase(USER_REGISTER_FAILURE, (state, action) => {
      state.error = action.payload.response.data.message;
    })
    .addCase(USER_CHECK_SUCCESS, (state, action) => {
      state.user = action.payload;
      state.error = null;
    })
    .addCase(USER_CHECK_FAILURE, (state, action) => {
      state.error = action.payload;
    })
    .addCase(USER_LOGIN_SUCCESS, (state, action) => {
      state.auth = action.payload;
      state.error = null;
    })
    .addCase(USER_LOGIN_FAILURE, (state, action) => {
      state.error = action.payload.response.data.message;
    })
    .addCase(USER_LOGOUT, (state, action) => {
      state.user = initialState.user;
      state.auth = initialState.auth;
      state.error = null;
    })
    .addCase(USER_MODIFY_PROFILE_SUCCESS, (state, action) => {
      state.user.user2.name = action.payload.user.name;
      state.user.user2.email = action.payload.user.email;
    })
    .addCase(USER_MODIFY_PROFILE_FAILURE, (state, action) => {})
    .addDefaultCase((state, action) => {});
});

// Saga
export function* userSaga() {
  yield takeLatest(USER_REGISTER, createRequestSaga(USER_REGISTER, gateway.userRegister));
  yield takeLatest(USER_CHECK, createRequestSaga(USER_CHECK, gateway.userCheck));
  yield takeLatest(USER_LOGIN, createRequestSaga(USER_LOGIN, gateway.userLogin));
  yield takeLatest(USER_LOGOUT, function* () {
    try {
      yield call(gateway.userLogout);

      localStorage.removeItem('user');

      Cookies.remove('accessToken');
    } catch (error) {
      console.error(error);
    }
  });
  yield takeLatest(USER_MODIFY_PROFILE, createRequestSaga(USER_MODIFY_PROFILE, gateway.userModifyProfile));
}
