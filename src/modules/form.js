import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as gateway from "@/library/gateway/auth";
import createRequestSaga from "@/library/createRequestSaga";

const CHANGE_FIELD = "form/changeField";
const INITIAL_LOGIN = "form/initialLogin";
const INITIAL_REGISTER = "form/initialRegister";

export const formChangeField = createAction(CHANGE_FIELD, (payload) => {
  console.group(
    "3. export const formChangeField = createAction(CHANGE_FIELD, (payload) => { .. }"
  );
  console.log("CHANGE_FIELD: ", CHANGE_FIELD);
  console.log("payload: ", payload);
  console.groupEnd();

  return { payload };
});

export const initialLogin = createAction(INITIAL_LOGIN, (payload) => {
  console.group(
    "3. export const initialLogin = createAction(INITIAL_LOGIN, (payload) => { .. }"
  );
  console.log("payload: ", payload);
  console.groupEnd();

  return { payload };
});

export const initialRegister = createAction(INITIAL_REGISTER, (payload) => {
  console.group(
    "3. export const initialRegister = createAction(INITIAL_REGISTER, (payload) => { .. }"
  );
  console.log("payload: ", payload);
  console.groupEnd();

  return { payload };
});

const initialState = {
  login: {
    id: "",
    password: "",
  },
  register: {
    id: "",
    name: "",
    email: "",
    password: "",
    confirm: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    changeField: (state, action) => {
      console.group("changeField: (state, action) => { .. }");
      console.log("state: ", state);
      console.log("action: ", action);

      const { form, key, value } = action.payload;
      console.log("form: ", form);
      console.log("key: ", key);
      console.log("value: ", value);
      console.groupEnd();

      state[form][key] = value;
    },
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  },
});

export const { changeField } = formSlice.actions;

export default formSlice.reducer;
