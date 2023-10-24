import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const SOUP_INITIAL = 'SOUP_INITIAL';
const [SOUP, SOUP_SUCCESS, SOUP_FAILURE] = createRequestActionTypes('SOUP');

// Action Creators
export const soupInitial = createAction(SOUP_INITIAL);
export const soup = createAction(SOUP, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(SOUP_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(SOUP_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(SOUP_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* soupSaga() {
  yield takeLatest(SOUP, createRequestSaga(SOUP, gateway.posts));
}
