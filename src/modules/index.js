import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from '@/modules/loading';
import form from '@/modules/form';
import user, { userSaga } from '@/modules/user';
import boardList, { boardListSaga } from '@/modules/board/list';
import boardRead, { boardReadSaga } from '@/modules/board/read';

// combineReducers를 사용해서 병합합니다.
const rootReducer = combineReducers({ loading, form, user, boardList, boardRead });

export function* rootSaga() {
  // yield는 비동기 작업을 처리할 때 작업 단위를 나누는 기준점 같은 것으로 보면 됩니다.
  // all 은 여러 개의 Saga를 동시에 실행시켜줍니다.
  yield all([userSaga(), boardListSaga(), boardReadSaga()]);
}

export default rootReducer;
