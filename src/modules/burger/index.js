import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const BURGER_INITIAL = 'BURGER_INITIAL';
const [BURGER, BURGER_SUCCESS, BURGER_FAILURE] = createRequestActionTypes('BURGER');

// Action Creators
export const burgerInitial = createAction(BURGER_INITIAL);
export const burger = createAction(BURGER, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(BURGER_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(BURGER_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(BURGER_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* burgerSaga() {
  yield takeLatest(BURGER, createRequestSaga(BURGER, gateway.posts));
}
