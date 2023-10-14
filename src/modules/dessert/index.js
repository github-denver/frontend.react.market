import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const DESSERT_INITIAL = 'DESSERT_INITIAL';
const [DESSERT, DESSERT_SUCCESS, DESSERT_FAILURE] = createRequestActionTypes('DESSERT');

// Action Creators
export const dessertInitial = createAction(DESSERT_INITIAL);
export const dessert = createAction(DESSERT, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(DESSERT_INITIAL, (state, action) => {
      console.group('[DESSERT_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(DESSERT_SUCCESS, (state, action) => {
      console.group('[DESSERT_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(DESSERT_FAILURE, (state, action) => {
      console.group('[DESSERT_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    })
    .addDefaultCase((state, action) => {
      // console.group('[DESSERT]: addDefaultCase((state, action) => { .. })');
      // console.groupEnd();
    });
});

// Saga
export function* dessertSaga() {
  yield takeLatest(DESSERT, createRequestSaga(DESSERT, gateway.posts));
}
