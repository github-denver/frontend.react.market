import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as gateway from '@/library/gateway/board';
import createRequestSaga from '@/library/createRequestSaga';

const DESSERT_LIST = 'dessert/list';

const initialState = {
  data: null,
  error: null
};

const dessertListSlice = createSlice({
  name: 'dessert',
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

export const { initialList } = dessertListSlice.actions;

export default dessertListSlice.reducer;

export const dessertList = createAction(DESSERT_LIST, (payload) => ({ payload })); // payload: { category, number, select, keyword }

// Main Saga
export function* dessertListSaga() {
  yield takeLatest(DESSERT_LIST, createRequestSaga(DESSERT_LIST, gateway.list));
}
