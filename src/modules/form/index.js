import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  register: {
    id: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    id: '',
    password: ''
  },
  modifyPassword: {
    email: '',
    password: '',
    passwordConfirm: ''
  },
  error: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    changeField: (state, action) => {
      const { form, key, value } = action.payload;

      state[form][key] = value;
    },
    initialForm: (state) => {
      state.register = initialState.register;
      state.login = initialState.login;
      state.modifyPassword = initialState.modifyPassword;
      state.error = null;
    }
  },
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {},
      (state, action) => {}
    );
  }
});

export const { changeField, initialForm } = formSlice.actions;

export default formSlice.reducer;
