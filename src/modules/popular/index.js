import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const POPULAR_INITIAL = 'POPULAR_INITIAL';
const [POPULAR, POPULAR_SUCCESS, POPULAR_FAILURE] = createRequestActionTypes('POPULAR');

// Action Creators
export const popularInitial = createAction(POPULAR_INITIAL);
export const popular = createAction(POPULAR, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(POPULAR_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(POPULAR_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(POPULAR_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* popularSaga() {
  yield takeLatest(POPULAR, createRequestSaga(POPULAR, gateway.posts));
}
