import { call, put } from 'redux-saga/effects';
import { loadingStart, loadingFinish } from '@/modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

/*
  예를 들어, Action 객체가 생성되면 createRequestSaga를 수행합니다.
  Action 객체가 생성됐다면 createRequestSaga를 수행하는 데 API를 호출합니다.
  호출 후 API의 데이터를 response 변수에 할당합니다.

  그리고 response를 success, failure(Action Creator)에 put(Dispatch) 합니다.
  이때, success, failure라는 Action 객체가 생성되는데 export function* Saga()를 보면 success, failure라는 Action 객체에 대한 행동이 없기 때문에 곧바로 Reducer로 이동합니다.
  */
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(loadingStart(type));

    try {
      const response = yield call(request, action.payload);

      yield put({ type: SUCCESS, payload: response.data, meta: response });
    } catch (error) {
      yield put({ type: FAILURE, payload: error, error: true });
    }

    yield put(loadingFinish(type));
  };
}
