import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const STEAK_INITIAL = 'STEAK_INITIAL';
const [STEAK, STEAK_SUCCESS, STEAK_FAILURE] = createRequestActionTypes('STEAK');

// Action Creators
export const steakInitial = createAction(STEAK_INITIAL);
export const steak = createAction(STEAK, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(STEAK_INITIAL, (state, action) => {
      console.group('[STEAK_INITIAL]: (state, action) => { .. }');
      state.data = null;
      state.error = null;
      console.groupEnd();
    })
    .addCase(STEAK_SUCCESS, (state, action) => {
      console.group('[STEAK_SUCCESS]: (state, action) => { .. }');
      state.data = action.payload;
      state.error = null;
      console.groupEnd();
    })
    .addCase(STEAK_FAILURE, (state, action) => {
      console.group('[STEAK_FAILURE]: (state, action) => { .. }');
      state.data = null;
      state.error = action.payload;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[STEAK_FAILURE]: addDefaultCase((state, action) => { .. })');
  //   console.log('action.type: ', action.type);
  //   console.log('action.payload: ', action.payload);
  //   console.groupEnd();
  // });
});

// Saga
export function* steakSaga() {
  yield takeLatest(STEAK, createRequestSaga(STEAK, gateway.posts));
}
