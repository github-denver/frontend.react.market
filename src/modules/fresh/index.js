import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const SALAD_INITIAL = 'SALAD_INITIAL';
const [SALAD, SALAD_SUCCESS, SALAD_FAILURE] = createRequestActionTypes('SALAD');

// Action Creators
export const saladInitial = createAction(SALAD_INITIAL);
export const salad = createAction(SALAD, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(SALAD_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(SALAD_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(SALAD_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* saladSaga() {
  yield takeLatest(SALAD, createRequestSaga(SALAD, gateway.posts));
}
