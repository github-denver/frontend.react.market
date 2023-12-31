import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const CAKE_INITIAL = 'CAKE_INITIAL';
const [CAKE, CAKE_SUCCESS, CAKE_FAILURE] = createRequestActionTypes('CAKE');

// Action Creators
export const cakeInitial = createAction(CAKE_INITIAL);
export const cake = createAction(CAKE, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(CAKE_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(CAKE_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(CAKE_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* cakeSaga() {
  yield takeLatest(CAKE, createRequestSaga(CAKE, gateway.posts));
}
