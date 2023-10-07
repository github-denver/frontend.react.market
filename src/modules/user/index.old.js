import { createAction, createSlice } from '@reduxjs/toolkit';
import createRequestSaga from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/auth';
import Cookies from 'js-cookie';
import { call, takeLatest } from 'redux-saga/effects';

const USER_REGISTER = 'user/register';
const USER_CHECK = 'user/check';
const USER_LOGIN = 'user/login';
const USER_LOGOUT = 'user/logout';
const USER_PROFILE = 'user/profile';

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    initialError: (state) => {
      state.error = null;
    },
    setAccessToken: (state, action) => {
      state.auth.accessToken = action.payload;
      state.auth.message = null;
    },
    setUser: (state, action) => {
      state.user.user2 = JSON.parse(action.payload);
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.error = action.payload.response.data.message;
    },
    checkSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    checkFailure: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload.response.data.message;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.auth = initialState.auth;
      state.error = null;
    },
    profileSuccess: (state, action) => {
      state.user.user2.name = action.payload.user.name;
      state.user.user2.email = action.payload.user.email;
    },
    profileFailure: (state, action) => {}
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  }
});

export const { setAccessToken, setUser, initialError } = userSlice.actions;

export default userSlice.reducer;

export const userRegister = createAction(USER_REGISTER, (payload) => {
  const { id, name, password, email } = payload;

  return { payload: { id, name, password, email } };
});

export const userCheck = createAction(USER_CHECK, (accessToken) => {
  return { payload: accessToken };
});

export const userLogin = createAction(USER_LOGIN, (payload) => {
  const { id, password } = payload;

  return { payload: { id, password } };
});

export const userLogout = createAction(USER_LOGOUT);

export const userModifyProfile = createAction(USER_PROFILE, (payload) => {
  const { id, name, password, email } = payload;

  return { payload: { id, name, password, email } }; // picture
});

const registerSaga = createRequestSaga(USER_REGISTER, gateway.register);
const userCheckSaga = createRequestSaga(USER_CHECK, gateway.userCheck);
const userLoginSaga = createRequestSaga(USER_LOGIN, gateway.userLogin);
const userModifyProfileSaga = createRequestSaga(USER_PROFILE, gateway.userModifyProfile);

function* userLogoutSaga() {
  try {
    yield call(gateway.userLogout);

    localStorage.removeItem('user');

    Cookies.remove('accessToken');
  } catch (error) {
    console.error(error);
  }
}

// Main Saga
export function* userSaga() {
  yield takeLatest(USER_REGISTER, registerSaga);
  yield takeLatest(USER_CHECK, userCheckSaga);
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_LOGOUT, userLogoutSaga);
  yield takeLatest(USER_PROFILE, userModifyProfileSaga);
}
