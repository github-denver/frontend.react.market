import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const BOARD_MODIFY = 'board/modify';

const initialState = {
  data: null,
  error: null
};

const boardModifySlice = createSlice({
  name: 'board',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    modifySuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    modifyFailure: (state, action) => {
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

export const { initialModify } = boardModifySlice.actions;

export default boardModifySlice.reducer;

export const boardModify = createAction(BOARD_MODIFY, (payload) => ({ payload })); // category, number, payload

// Main Saga
export function* boardModifySaga() {
  yield takeLatest(BOARD_MODIFY, createRequestSaga(BOARD_MODIFY, gateway.modify));
}
