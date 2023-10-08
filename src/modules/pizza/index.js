import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const PIZZA_INITIAL = 'PIZZA_INITIAL';
const [PIZZA, PIZZA_SUCCESS, PIZZA_FAILURE] = createRequestActionTypes('PIZZA');

// Action Creators
export const pizzaInitial = createAction(PIZZA_INITIAL);
export const pizza = createAction(PIZZA, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(PIZZA_INITIAL, (state, action) => {
      console.group('[PIZZA_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(PIZZA_SUCCESS, (state, action) => {
      console.group('[PIZZA_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(PIZZA_FAILURE, (state, action) => {
      console.group('[PIZZA_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[PIZZA_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.groupEnd();
  // });
});

// Saga
export function* pizzaSaga() {
  yield takeLatest(PIZZA, createRequestSaga(PIZZA, gateway.posts));
}
