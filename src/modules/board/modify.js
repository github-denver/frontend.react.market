import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/modify";
import createRequestSaga from "@/library/createRequestSaga";

const BOARD_WRITE = "boardModify/modify";
const CHANGE_FIELD = "boardModify/changeField";
const CHANGE_THUMBNAIL = "boardModify/changeThumbnail";

export const boardModify = createAction(BOARD_WRITE, (payload) => ({
  payload,
}));

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
export function* boardModifySaga() {
  yield takeLatest(BOARD_WRITE, createRequestSaga(BOARD_WRITE, gateway.modify));
}

const initialState = {
  subject: null,
  contents: null,
  thumbnail: null,
  data: null,
  owner: null,
  error: null,
};

const boardModifySlice = createSlice({
  name: "boardModify",
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
    modifySuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    modifyFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
    modifyInitial: (state, action) => {
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
  modifySuccess,
  modifyFailure,
  modifyInitial,
} = boardModifySlice.actions;

export default boardModifySlice.reducer;
