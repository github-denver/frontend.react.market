import { createAction, createSlice } from '@reduxjs/toolkit';
import createRequestSaga from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';
import { takeLatest } from 'redux-saga/effects';

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';

const FOLLOWING = 'follow/following';
const FOLLOWER = 'follow/follower';

const initialState = {
  // 내가 친구로 추가한 사람
  following: null,

  // 나를 친구로 추가한 사람
  follower: null,
  error: null
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    initialFollow: (state) => {
      state.following = null;
      state.follower = null;
      state.error = null;
    },
    followingSuccess: (state, action) => {
      state.following = action.payload;
    },
    followingFailure: (state, action) => {},

    followerSuccess: (state, action) => {
      state.follower = action.payload;
    },
    followerFailure: (state, action) => {}
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  }
});

export const { initialFollow } = followSlice.actions;

export default followSlice.reducer;

export const following = createAction(FOLLOWING);
export const follower = createAction(FOLLOWER);

const followingSaga = createRequestSaga(FOLLOWING, gateway.following);
const followerSaga = createRequestSaga(FOLLOWER, gateway.follower);

// Main Saga
export function* followSaga() {
  yield takeLatest(FOLLOWING, followingSaga);
  yield takeLatest(FOLLOWER, followerSaga);
}
