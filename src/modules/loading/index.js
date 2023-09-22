import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    loadingStart: (state, action) => {
      console.group('loadingStart: (state, action) => { .. }');
      console.log('action.payload: ', action.payload);

      state[action.payload] = true;
      console.groupEnd();
    },
    loadingFinish: (state, action) => {
      console.group('loadingFinish: (state, action) => { .. }');
      console.log('action.payload: ', action.payload);

      state[action.payload] = false;
      console.groupEnd();
    }
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  }
});

export const { loadingStart, loadingFinish } = loadingSlice.actions;

export default loadingSlice.reducer;
