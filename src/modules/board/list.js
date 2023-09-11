import { createAction, createSlice } from '@reduxjs/toolkit'
import { takeLatest } from 'redux-saga/effects'
import * as gateway from '@/library/gateway/list'
import createRequestSaga from '@/library/createRequestSaga'

const BOARD_LIST = 'boardList/list'

export const boardList = createAction(BOARD_LIST, (payload) => ({ payload }))

// Main Saga
export function* boardListSaga() {
  yield takeLatest(BOARD_LIST, createRequestSaga(BOARD_LIST, gateway.list))
}

const initialState = {
  data: null,
  error: null
}

const boardListSlice = createSlice({
  name: 'boardList',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    listSuccess: (state, action) => {
      state.data = action.payload
      state.error = null
    },
    listFailure: (state, action) => {
      state.data = null
      state.error = action.payload
    },
    listInitial: (state) => {
      state.data = null
      state.error = null
    }
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    )
  }
})

export const { listInitial } = boardListSlice.actions

export default boardListSlice.reducer
