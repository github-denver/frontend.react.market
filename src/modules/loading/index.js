import { createAction, createReducer } from '@reduxjs/toolkit';

// Action Types
const LOADING_INITIAL = 'LOADING_INITIAL';
const LOADING_START = 'LOADING_START';
const LOADING_FINISH = 'LOADING_FINISH';

// Action Creators
export const loadingInitial = createAction(LOADING_INITIAL);
export const loadingStart = createAction(LOADING_START, (payload) => ({ payload }));
export const loadingFinish = createAction(LOADING_FINISH, (payload) => ({ payload }));

// initial State
const initialState = {};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(LOADING_INITIAL, (state) => {})
    .addCase(LOADING_START, (state, action) => {
      state[action.payload] = true;
    })
    .addCase(LOADING_FINISH, (state, action) => {
      state[action.payload] = false;
    })
    .addDefaultCase((state, action) => {});
});
