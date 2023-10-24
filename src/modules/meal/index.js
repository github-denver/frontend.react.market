import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const MEAL_INITIAL = 'MEAL_INITIAL';
const [MEAL, MEAL_SUCCESS, MEAL_FAILURE] = createRequestActionTypes('MEAL');

// Action Creators
export const mealInitial = createAction(MEAL_INITIAL);
export const meal = createAction(MEAL, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(MEAL_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(MEAL_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(MEAL_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* mealSaga() {
  yield takeLatest(MEAL, createRequestSaga(MEAL, gateway.posts));
}
