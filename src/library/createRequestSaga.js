import { call, put } from "redux-saga/effects";
import { loadingStart, loadingFinish } from "../modules/loading";

export const createRequestActionTypes = (type) => {
  const success = `${type}/success`;
  const failure = `${type}/failure`;

  return [type, success, failure];
};

/*
  예를 들어, Action 객체가 생성되면 createRequestSaga를 수행합니다.
  Action 객체가 생성됐다면 createRequestSaga를 수행하는 데 API를 호출합니다.
  호출 후 API의 데이터를 response 변수에 할당합니다.

  그리고 response를 success, failure(Action Creator)에 put(Dispatch) 합니다.
  이때, success, failure라는 Action 객체가 생성되는데 export function* Saga()를 보면 success, failure라는 Action 객체에 대한 행동이 없기 때문에 곧바로 Reducer로 이동합니다.
  */
export default function createRequestSaga(type, request) {
  const success = `${type}Success`;
  const failure = `${type}Failure`;

  return function* (action) {
    console.log("loading start type: ", type);
    yield put(loadingStart(type));

    try {
      const response = yield call(request, action.payload);
      console.log("response: ", response);

      console.log("success: ", success);

      yield put({
        type: success,
        payload: response.data,
        meta: response,
      });
    } catch (error) {
      console.log("failure: ", failure);

      yield put({
        type: failure,
        payload: error,
        error: true,
      });
    }

    console.log("loading finish type: ", type);
    yield put(loadingFinish(type));
  };
}
