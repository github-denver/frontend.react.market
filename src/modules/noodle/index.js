import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const NOODLE_INITIAL = 'NOODLE_INITIAL';
const [NOODLE, NOODLE_SUCCESS, NOODLE_FAILURE] = createRequestActionTypes('NOODLE');

// Action Creators
export const noodleInitial = createAction(NOODLE_INITIAL);
export const noodle = createAction(NOODLE, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(NOODLE_INITIAL, (state, action) => {
      console.group('[NOODLE_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(NOODLE_SUCCESS, (state, action) => {
      console.group('[NOODLE_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(NOODLE_FAILURE, (state, action) => {
      console.group('[NOODLE_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[NOODLE_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.groupEnd();
  // });
});

// Saga
export function* noodleSaga() {
  yield takeLatest(NOODLE, createRequestSaga(NOODLE, gateway.posts));
}
