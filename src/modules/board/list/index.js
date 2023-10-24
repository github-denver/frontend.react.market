import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const POSTS_INITIAL = 'POSTS_INITIAL';
const [POSTS, POSTS_SUCCESS, POSTS_FAILURE] = createRequestActionTypes('POSTS');

// Action Creators
export const postsInitial = createAction(POSTS_INITIAL);
export const posts = createAction(POSTS, (payload) => {
  const { category, number, select, keyword } = payload;

  return { payload: { category, number, select, keyword } };
}); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(POSTS_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(POSTS_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(POSTS_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* postsSaga() {
  yield takeLatest(POSTS, createRequestSaga(POSTS, gateway.posts));
}
