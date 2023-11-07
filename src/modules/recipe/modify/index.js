import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const RECIPES_MODIFY_INITIAL = 'RECIPES_MODIFY_INITIAL';
const [RECIPES_MODIFY, RECIPES_MODIFY_SUCCESS, RECIPES_MODIFY_FAILURE] = createRequestActionTypes('RECIPES_MODIFY');

// Action Creators
export const recipesModifyInitial = createAction(RECIPES_MODIFY_INITIAL);
export const recipesModify = createAction(RECIPES_MODIFY, (payload) => ({ payload })); // category, number, payload

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(RECIPES_MODIFY_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(RECIPES_MODIFY_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(RECIPES_MODIFY_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Main Saga
export function* recipesModifySaga() {
  yield takeLatest(RECIPES_MODIFY, createRequestSaga(RECIPES_MODIFY, gateway.recipesModify));
}
