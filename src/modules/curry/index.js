import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const CURRY_INITIAL = 'CURRY_INITIAL';
const [CURRY, CURRY_SUCCESS, CURRY_FAILURE] = createRequestActionTypes('CURRY');

// Action Creators
export const curryInitial = createAction(CURRY_INITIAL);
export const curry = createAction(CURRY, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(CURRY_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(CURRY_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(CURRY_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* currySaga() {
  yield takeLatest(CURRY, createRequestSaga(CURRY, gateway.posts));
}
