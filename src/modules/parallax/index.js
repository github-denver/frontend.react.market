import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const PARALLAX_INITIAL = 'PARALLAX_INITIAL';
const [PARALLAX, PARALLAX_SUCCESS, PARALLAX_FAILURE] = createRequestActionTypes('PARALLAX');

// Action Creators
export const parallaxInitial = createAction(PARALLAX_INITIAL);
export const parallax = createAction(PARALLAX, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(PARALLAX_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(PARALLAX_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(PARALLAX_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* parallaxSaga() {
  yield takeLatest(PARALLAX, createRequestSaga(PARALLAX, gateway.posts));
}
