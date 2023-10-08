import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

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
    .addCase(LOADING_INITIAL, (state) => {
      console.group('[LOADING_INITIAL]: (state) => { .. }');
      console.groupEnd();
    })
    .addCase(LOADING_START, (state, action) => {
      console.group('[LOADING_START]: (state, action) => { .. }');

      state[action.payload] = true;
      console.groupEnd();
    })
    .addCase(LOADING_FINISH, (state, action) => {
      console.group('[LOADING_FINISH]: (state, action) => { .. }');
      state[action.payload] = false;
      console.groupEnd();
    });
  // .addDefaultCase((state, action) => {
  //   console.group('[LOADING_FINISH]: addDefaultCase((state, action) => { .. })');
  //   console.groupEnd();
  // });
});
