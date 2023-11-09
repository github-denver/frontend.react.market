import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const RECIPES_INITIAL = 'RECIPES_INITIAL';
const [RECIPES, RECIPES_SUCCESS, RECIPES_FAILURE] = createRequestActionTypes('RECIPES');

// Action Creators
export const recipesInitial = createAction(RECIPES_INITIAL);
export const recipes = createAction(RECIPES, (payload) => {
  const { postId, category } = payload;

  return { payload: { postId, category } };
}); // payload: { postId, category }

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(RECIPES_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(RECIPES_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(RECIPES_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Saga
export function* recipesSaga() {
  yield takeLatest(RECIPES, createRequestSaga(RECIPES, gateway.recipes));
}
