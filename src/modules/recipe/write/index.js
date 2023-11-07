import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const RECIPES_WRITE_INITIAL = 'RECIPES_WRITE_INITIAL';
const [RECIPES_WRITE, RECIPES_WRITE_SUCCESS, RECIPES_WRITE_FAILURE] = createRequestActionTypes('RECIPES_WRITE');

// Action Creators
export const recipesWriteInitial = createAction(RECIPES_WRITE_INITIAL);
export const recipesWrite = createAction(RECIPES_WRITE, (payload) => ({ payload })); // category, number, payload

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(RECIPES_WRITE_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(RECIPES_WRITE_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(RECIPES_WRITE_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Main Saga
export function* recipesWriteSaga() {
  yield takeLatest(RECIPES_WRITE, createRequestSaga(RECIPES_WRITE, gateway.recipesWrite));
}
