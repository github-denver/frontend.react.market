import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
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
      console.group('[SOUP_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(SOUP_SUCCESS, (state, action) => {
      console.group('[SOUP_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(SOUP_FAILURE, (state, action) => {
      console.group('[SOUP_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[SOUP_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.log('action.type: ', action.type);
  //   console.log('action.payload: ', action.payload);
  //   console.groupEnd();
  // });
});

// Saga
export function* soupSaga() {
  yield takeLatest(SOUP, createRequestSaga(SOUP, gateway.posts));
}
