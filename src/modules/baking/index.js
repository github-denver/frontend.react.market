import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const BAKING_INITIAL = 'BAKING_INITIAL';
const [BAKING, BAKING_SUCCESS, BAKING_FAILURE] = createRequestActionTypes('BAKING');

// Action Creators
export const bakingInitial = createAction(BAKING_INITIAL);
export const baking = createAction(BAKING, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(BAKING_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(BAKING_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(BAKING_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* bakingSaga() {
  yield takeLatest(BAKING, createRequestSaga(BAKING, gateway.posts));
}
