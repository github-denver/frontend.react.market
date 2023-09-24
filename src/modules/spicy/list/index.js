import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const SPICY_LIST = 'spicy/list';

const initialState = {
  data: null,
  error: null
};

const spicyListSlice = createSlice({
  name: 'spicy',
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

export const { initialList } = spicyListSlice.actions;

export default spicyListSlice.reducer;

export const spicyList = createAction(SPICY_LIST, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// Main Saga
export function* spicyListSaga() {
  yield takeLatest(SPICY_LIST, createRequestSaga(SPICY_LIST, gateway.list));
}
