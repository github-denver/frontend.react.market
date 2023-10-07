import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    loadingStart: (state, action) => {
      state[action.payload] = true;
    },
    loadingFinish: (state, action) => {
      state[action.payload] = false;
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
