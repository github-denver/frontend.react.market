import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// Action Types
const LOADING_START = 'LOADING_START';
const LOADING_FINISH = 'LOADING_FINISH';

// Action Creators
export const loadingStart = createAction(LOADING_START, (payload) => payload);
export const loadingFinish = createAction(LOADING_FINISH, (payload) => payload);

// initial State
const initialState = {};

// Reducers
const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  // 내부 action 및 동기 action
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder
      .addCase(loadingStart, (state, action) => {
        console.group('builder.addCase(loadingStart, (state, action) => { .. })');
        state[action.payload] = true;
        console.groupEnd();
      })
      .addCase(loadingFinish, (state, action) => {
        console.group('builder.addCase(loadingFinish, (state, action) => { .. })');
        state[action.payload] = false;
        console.groupEnd();
      });
  }
});

export default loadingSlice.reducer;
