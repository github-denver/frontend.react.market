import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga';
import * as gateway from '@/library/gateway/board';

// Action Types
const POST_MODIFY_INITIAL = 'POST_MODIFY_INITIAL';
const [POST_MODIFY, POST_MODIFY_SUCCESS, POST_MODIFY_FAILURE] = createRequestActionTypes('POST_MODIFY');

// Action Creators
export const postModifyInitial = createAction(POST_MODIFY_INITIAL);
export const postModify = createAction(POST_MODIFY, (payload) => ({ payload })); // category, number, payload

// initial State
const initialState = {
  data: null,
  error: null
};

// Reducers
export default createReducer(initialState, (builder) => {
  builder
    .addCase(POST_MODIFY_INITIAL, (state, action) => {
      state.data = null;
      state.error = null;
    })
    .addCase(POST_MODIFY_SUCCESS, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    .addCase(POST_MODIFY_FAILURE, (state, action) => {
      state.data = null;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

// Main Saga
export function* postModifySaga() {
  yield takeLatest(POST_MODIFY, createRequestSaga(POST_MODIFY, gateway.postModify));
}
