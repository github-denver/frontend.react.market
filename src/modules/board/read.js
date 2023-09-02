import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/read";
import createRequestSaga from "@/library/createRequestSaga";

const BOARD_READ = "boardRead/read";

export const boardRead = createAction(BOARD_READ, (payload) => ({ payload }));

// Main Saga
export function* boardReadSaga() {
  yield takeLatest(BOARD_READ, createRequestSaga(BOARD_READ, gateway.read));
}

const initialState = {
  data: null,
  error: null,
};

const boardReadSlice = createSlice({
  name: "boardRead",
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
    readInitial: (state, action) => {
      state.data = null;
      state.error = null;
    },
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  },
});

export const { readSuccess, readFailure, readInitial } = boardReadSlice.actions;

export default boardReadSlice.reducer;
