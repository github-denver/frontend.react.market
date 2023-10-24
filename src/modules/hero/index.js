import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const HERO_INITIAL = 'HERO_INITIAL';
const [HERO, HERO_SUCCESS, HERO_FAILURE] = createRequestActionTypes('HERO');

// Action Creators
export const heroInitial = createAction(HERO_INITIAL);
export const hero = createAction(HERO, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(HERO_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(HERO_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(HERO_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* heroSaga() {
  yield takeLatest(HERO, createRequestSaga(HERO, gateway.posts));
}
