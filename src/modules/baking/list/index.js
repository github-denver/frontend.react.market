import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const BAKING_LIST = 'baking/list';

const initialState = {
  data: null,
  error: null
};

const bakingListSlice = createSlice({
  name: 'baking',
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

export const { initialList } = bakingListSlice.actions;

export default bakingListSlice.reducer;

export const bakingList = createAction(BAKING_LIST, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// Main Saga
export function* bakingListSaga() {
  yield takeLatest(BAKING_LIST, createRequestSaga(BAKING_LIST, gateway.list));
}
