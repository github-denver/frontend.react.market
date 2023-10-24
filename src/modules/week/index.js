import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const WEEK_INITIAL = 'WEEK_INITIAL';
const [WEEK, WEEK_SUCCESS, WEEK_FAILURE] = createRequestActionTypes('WEEK');

// Action Creators
export const weekInitial = createAction(WEEK_INITIAL);
export const week = createAction(WEEK, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(WEEK_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(WEEK_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(WEEK_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* weekSaga() {
  yield takeLatest(WEEK, createRequestSaga(WEEK, gateway.posts));
}
