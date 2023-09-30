import { createAction, createSlice } from '@reduxjs/toolkit';
import createRequestSaga from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/comment';
import { takeLatest } from 'redux-saga/effects';

const COMMENT = 'comment/list';

const initialState = {
  data: null,
  error: null
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    initialComment: (state) => {
      state.data = null;
      state.error = null;
    },
    listSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    listFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
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

export const { initialComment } = commentSlice.actions;

export default commentSlice.reducer;

export const commentList = createAction(COMMENT, (payload) => {
  const { postId } = payload;

  return { payload: { postId } };
});

// Main Saga
export function* commentSaga() {
  yield takeLatest(COMMENT, createRequestSaga(COMMENT, gateway.list));
}
