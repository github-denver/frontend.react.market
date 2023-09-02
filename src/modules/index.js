import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import form from "@/modules/form";
import auth, { authSaga } from "@/modules/auth";
import user, { userSaga } from "@/modules/user";
import boardList, { boardListSaga } from "@/modules/board/list";
import boardRead, { boardReadSaga } from "@/modules/board/read";
import boardWrite, { boardWriteSaga } from "@/modules/board/write";
import loading from "./loading";

// combineReducers를 사용해서 병합합니다.
const rootReducer = combineReducers({
  loading,
  form,
  auth,
  user,
  boardList,
  boardRead,
  boardWrite,
});

export function* rootSaga() {
  // yield는 비동기 작업을 처리할 때 작업 단위를 나누는 기준점 같은 것으로 보면 됩니다.
  // all 은 여러 개의 Saga를 동시에 실행시켜줍니다.
  yield all([
    authSaga(),
    userSaga(),
    boardListSaga(),
    boardReadSaga(),
    boardWriteSaga(),
  ]);
}

export default rootReducer;
