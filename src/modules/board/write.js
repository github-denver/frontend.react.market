import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/write";
import createRequestSaga from "@/library/createRequestSaga";

const BOARD_WRITE = "boardWrite/write";
const CHANGE_FIELD = "boardWrite/changeField";
const CHANGE_THUMBNAIL = "boardWrite/changeThumbnail";

export const boardWrite = createAction(BOARD_WRITE, (payload) => ({ payload }));

export const formChangeField = createAction(CHANGE_FIELD, (payload) => ({
  payload,
}));

export const formChangeThumbnail = createAction(
  CHANGE_THUMBNAIL,
  (payload) => ({
    payload,
  })
);

// Main Saga
export function* boardWriteSaga() {
  yield takeLatest(BOARD_WRITE, createRequestSaga(BOARD_WRITE, gateway.write));
}

const initialState = {
  subject: null,
  contents: null,
  thumbnail: null,
  data: null,
  owner: null,
  error: null,
};

const boardWriteSlice = createSlice({
  name: "boardWrite",
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    changeField: (state, action) => {
      const { key, value } = action.payload;

      state[key] = value;
    },
    changeThumbnail: (state, action) => {
      const { key, value } = action.payload;

      state[key] = {
        files: value.files,
        preview: value.preview,
      };
    },
    writeSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    writeFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
    writeInitial: (state, action) => {
      state.subject = null;
      state.contents = null;
      state.thumbnail = null;
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

export const {
  changeField,
  changeThumbnail,
  writeSuccess,
  writeFailure,
  writeInitial,
} = boardWriteSlice.actions;

export default boardWriteSlice.reducer;
