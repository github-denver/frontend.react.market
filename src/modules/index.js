import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from '@/modules/loading';
import form from '@/modules/form';
import user, { userSaga } from '@/modules/user';
import boardList, { boardListSaga } from '@/modules/board/list';
import boardWrite, { boardWriteSaga } from '@/modules/board/write';
import boardRead, { boardReadSaga } from '@/modules/board/read';
import boardModify, { boardModifySaga } from '@/modules/board/modify';

import bakingList, { bakingListSaga } from '@/modules/baking/list';
import dessertList, { dessertListSaga } from '@/modules/dessert/list';
import freshList, { freshListSaga } from '@/modules/fresh/list';
import spicyList, { spicyListSaga } from '@/modules/spicy/list';
import popularList, { popularListSaga } from '@/modules/popular/list';
import soupList, { soupListSaga } from '@/modules/soup/list';

// combineReducers를 사용해서 병합합니다.
const rootReducer = combineReducers({ loading, form, user, bakingList, dessertList, freshList, spicyList, popularList, soupList, boardList, boardWrite, boardRead, boardModify });

export function* rootSaga() {
  // yield는 비동기 작업을 처리할 때 작업 단위를 나누는 기준점 같은 것으로 보면 됩니다.
  // all 은 여러 개의 Saga를 동시에 실행시켜줍니다.
  yield all([userSaga(), bakingListSaga(), dessertListSaga(), freshListSaga(), spicyListSaga(), popularListSaga(), soupListSaga(), boardListSaga(), boardWriteSaga(), boardReadSaga(), boardModifySaga()]);
}

export default rootReducer;
