import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { rootSaga } from "@/modules";
import createSagaMiddleware from "redux-saga";

// Saga Middleware를 생성합니다.
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

// Saga를 실행합니다.
sagaMiddleware.run(rootSaga);
