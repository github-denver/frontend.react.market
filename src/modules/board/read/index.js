import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/read';
import createRequestSaga from '@/library/createRequestSaga';

const BOARD_READ = 'board/read';

const initialState = {
  data: null,
  error: null
};

const boardReadSlice = createSlice({
  name: 'board',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    readSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    readFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
    initialRead: (state) => {
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

export const { initialRead } = boardReadSlice.actions;

export default boardReadSlice.reducer;

export const boardRead = createAction(BOARD_READ, (payload) => {
  const { category, number } = payload;

  return { payload: { category, number } };
});

// Main Saga
export function* boardReadSaga() {
  yield takeLatest(BOARD_READ, createRequestSaga(BOARD_READ, gateway.read));
}
