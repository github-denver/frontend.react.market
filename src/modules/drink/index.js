import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const DRINK_INITIAL = 'DRINK_INITIAL';
const [DRINK, DRINK_SUCCESS, DRINK_FAILURE] = createRequestActionTypes('DRINK');

// Action Creators
export const drinkInitial = createAction(DRINK_INITIAL);
export const drink = createAction(DRINK, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(DRINK_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(DRINK_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(DRINK_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* drinkSaga() {
  yield takeLatest(DRINK, createRequestSaga(DRINK, gateway.posts));
}
