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
  boardWrite: {
    subject: null,
    contents: null,
    thumbnail: null,
    tags: null,
    error: null
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
    changeThumbnail: (state, action) => {
      console.group('changeThumbnail: (state, action) => { .. }');
      console.log('action.payload: ', action.payload);
      console.groupEnd();

      const { key, value } = action.payload;

      state.boardWrite[key] = {
        files: value.files,
        preview: value.preview
      };
    },
    insertTag: (state, action) => {
      state.boardWrite.tags = action.payload;
    },
    initialForm: (state) => {
      state.register = initialState.register;
      state.login = initialState.login;
      state.modifyPassword = initialState.modifyPassword;
      state.boardWrite = initialState.boardWrite;
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

export const { changeField, changeThumbnail, insertTag, initialForm } = formSlice.actions;

export default formSlice.reducer;
