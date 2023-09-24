import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const BOARD_WRITE = 'board/write';

const initialState = {
  data: null,
  error: null
};

const boardWriteSlice = createSlice({
  name: 'board',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    writeSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    writeFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
    initialWrite: (state) => {
      state.data = null;
      state.error = null;
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

export const { initialWrite } = boardWriteSlice.actions;

export default boardWriteSlice.reducer;

export const boardWrite = createAction(BOARD_WRITE, (payload) => ({ payload })); // category, payload

// Main Saga
export function* boardWriteSaga() {
  yield takeLatest(BOARD_WRITE, createRequestSaga(BOARD_WRITE, gateway.write));
}
