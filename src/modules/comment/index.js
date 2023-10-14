import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/comment';

// Action Types
const COMMENT_INITIAL = 'COMMENT_INITIAL';
const [COMMENT, COMMENT_SUCCESS, COMMENT_FAILURE] = createRequestActionTypes('COMMENT');

// const COMMENT_WRITE_INITIAL = 'COMMENT_WRITE_INITIAL';
const [COMMENT_WRITE, COMMENT_WRITE_SUCCESS, COMMENT_WRITE_FAILURE] = createRequestActionTypes('COMMENT_WRITE');

// Action Creators
export const commentInitial = createAction(COMMENT_INITIAL);
export const commentList = createAction(COMMENT, (payload) => ({ payload })); // postId
export const commentWrite = createAction(COMMENT_WRITE, (payload) => ({ payload })); // postId, parentCommentId, content

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(COMMENT_INITIAL, (state, action) => {
      console.group('[COMMENT_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(COMMENT_SUCCESS, (state, action) => {
      console.group('[COMMENT_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(COMMENT_FAILURE, (state, action) => {
      console.group('[COMMENT_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    })
    .addCase(COMMENT_WRITE_SUCCESS, (state, action) => {
      console.group('[COMMENT_WRITE_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(COMMENT_WRITE_FAILURE, (state, action) => {
      console.group('[COMMENT_WRITE_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    })
    .addDefaultCase((state, action) => {
      // console.group('[COMMENT]: addDefaultCase((state, action) => { .. })');
      // console.groupEnd();
    });
});

// Saga
export function* commentSaga() {
  yield takeLatest(COMMENT, createRequestSaga(COMMENT, gateway.commentList));
  yield takeLatest(COMMENT_WRITE, createRequestSaga(COMMENT_WRITE, gateway.commentWrite));
}
