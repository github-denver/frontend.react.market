import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const SOUP_LIST = 'soup/list';

const initialState = {
  data: null,
  error: null
};

const soupListSlice = createSlice({
  name: 'soup',
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

export const { initialList } = soupListSlice.actions;

export default soupListSlice.reducer;

export const soupList = createAction(SOUP_LIST, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// Main Saga
export function* soupListSaga() {
  yield takeLatest(SOUP_LIST, createRequestSaga(SOUP_LIST, gateway.list));
}
