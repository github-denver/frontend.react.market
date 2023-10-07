import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
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
      console.group('[BURGER_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(BURGER_SUCCESS, (state, action) => {
      console.group('[BURGER_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(BURGER_FAILURE, (state, action) => {
      console.group('[BURGER_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[BURGER_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.log('action.type: ', action.type);
  //   console.log('action.payload: ', action.payload);
  //   console.groupEnd();
  // });
});

// Saga
export function* burgerSaga() {
  yield takeLatest(BURGER, createRequestSaga(BURGER, gateway.posts));
}
