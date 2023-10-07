import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const POST_WRITE_INITIAL = 'POST_WRITE_INITIAL';
const [POST_WRITE, POST_WRITE_SUCCESS, POST_WRITE_FAILURE] = createRequestActionTypes('POST_WRITE');

// Action Creators
export const postWriteInitial = createAction(POST_WRITE_INITIAL);
export const postWrite = createAction(POST_WRITE, (payload) => ({ payload })); // category, number, payload

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(POST_WRITE_INITIAL, (state, action) => {
      console.group('[POST_WRITE_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(POST_WRITE_SUCCESS, (state, action) => {
      console.group('[POST_WRITE_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(POST_WRITE_FAILURE, (state, action) => {
      console.group('[POST_WRITE_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[POST_WRITE_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.log('action.type: ', action.type);
  //   console.log('action.payload: ', action.payload);
  //   console.groupEnd();
  // });
});

// Main Saga
export function* postWriteSaga() {
  yield takeLatest(POST_WRITE, createRequestSaga(POST_WRITE, gateway.postWrite));
}
