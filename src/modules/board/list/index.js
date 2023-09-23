import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const BOARD_LIST = 'board/list';

const initialState = {
  data: null,
  error: null
};

const boardListSlice = createSlice({
  name: 'board',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    listSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    listFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
    initialList: (state) => {
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

export const { initialList } = boardListSlice.actions;

export default boardListSlice.reducer;

export const boardList = createAction(BOARD_LIST, (payload) => {
  const { category, number, select, keyword } = payload;

  return { payload: { category, number, select, keyword } };
});

// Main Saga
export function* boardListSaga() {
  yield takeLatest(BOARD_LIST, createRequestSaga(BOARD_LIST, gateway.list));
}
