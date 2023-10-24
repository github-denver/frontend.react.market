import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const FOLLOWING_INITIAL = 'FOLLOWING_INITIAL';
const [FOLLOWING, FOLLOWING_SUCCESS, FOLLOWING_FAILURE] = createRequestActionTypes('FOLLOWING');

const FOLLOWER_INITIAL = 'FOLLOWER_INITIAL';
const [FOLLOWER, FOLLOWER_SUCCESS, FOLLOWER_FAILURE] = createRequestActionTypes('FOLLOWER');

// Action Creators
export const followingInitial = createAction(FOLLOWING_INITIAL);
export const following = createAction(FOLLOWING, (payload) => ({ payload }));

export const followerInitial = createAction(FOLLOWING_INITIAL);
export const follower = createAction(FOLLOWER, (payload) => ({ payload }));

// initial State
const initialState = {
  // 내가 친구로 추가한 사람
  following: null,

  // 나를 친구로 추가한 사람
  follower: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(FOLLOWING_INITIAL, (state, action) => {
      state.following = null;
      state.error = null;
    })
    .addCase(FOLLOWING_SUCCESS, (state, action) => {
      state.following = action.payload;
      state.error = null;
    })
    .addCase(FOLLOWING_FAILURE, (state, action) => {
      state.following = null;
      state.error = action.payload;
    })
    .addCase(FOLLOWER_INITIAL, (state, action) => {
      state.follower = null;
      state.error = null;
    })
    .addCase(FOLLOWER_SUCCESS, (state, action) => {
      state.follower = action.payload;
      state.error = null;
    })
    .addCase(FOLLOWER_FAILURE, (state, action) => {
      state.follower = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* followSaga() {
  yield takeLatest(FOLLOWING, createRequestSaga(FOLLOWING, gateway.following));
  yield takeLatest(FOLLOWER, createRequestSaga(FOLLOWER, gateway.follower));
}
