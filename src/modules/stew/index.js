import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const STEW_INITIAL = 'STEW_INITIAL';
const [STEW, STEW_SUCCESS, STEW_FAILURE] = createRequestActionTypes('STEW');

// Action Creators
export const stewInitial = createAction(STEW_INITIAL);
export const stew = createAction(STEW, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(STEW_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(STEW_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(STEW_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* stewSaga() {
  yield takeLatest(STEW, createRequestSaga(STEW, gateway.posts));
}
