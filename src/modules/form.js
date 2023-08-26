import { createAction, createSlice } from "@reduxjs/toolkit";

const CHANGE_FIELD = "form/changeField";
const INITIAL_LOGIN_FORM = "form/initialLoginForm";
const INITIAL_REGISTER_FORM = "form/initialRegisterForm";
const INITIAL_OAUTH_FORM = "form/initialOauthForm";

export const formChangeField = createAction(CHANGE_FIELD, (payload) => ({
  payload,
}));
export const initialLoginForm = createAction(INITIAL_LOGIN_FORM, (payload) => ({
  payload,
}));
export const initialRegisterForm = createAction(
  INITIAL_REGISTER_FORM,
  (payload) => ({
    payload,
  })
);
export const initialOauthForm = createAction(INITIAL_OAUTH_FORM, (payload) => ({
  payload,
}));

const initialState = {
  register: {
    id: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    id: "",
    password: "",
  },
  oauth: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    changeField: (state, action) => {
      const { form, key, value } = action.payload;

      state[form][key] = value;
    },
    initialRegisterForm: (state) => {
      state.register = initialState.register;
      state.error = null;
    },
    initialLoginForm: (state) => {
      state.login = initialState.login;
      state.error = null;
    },
    initialOauthForm: (state) => {
      state.oauth = initialState.oauth;
      state.error = null;
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
