import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const POST_INITIAL = 'POST_INITIAL';
const [POST, POST_SUCCESS, POST_FAILURE] = createRequestActionTypes('POST');

// Action Creators
export const postInitial = createAction(POST_INITIAL);
export const post = createAction(POST, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(POST_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(POST_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(POST_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* postSaga() {
  yield takeLatest(POST, createRequestSaga(POST, gateway.post));
}
