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
  passwordModify: {
    email: '',
    password: '',
    passwordConfirm: ''
  },
  postWrite: {
    subject: null,
    contents: null,
    thumbnail: null,
    tags: null,
    error: null
  },
  comment: {
    postId: null,
    parentCommentId: null,
    content: '',
    modifyContent: ''
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
      const { key, value } = action.payload;

      state.postWrite[key] = {
        files: value.files,
        preview: value.preview
      };
    },
    insertTag: (state, action) => {
      state.postWrite.tags = action.payload;
    },
    formInitial: (state) => {
      state.register = initialState.register;
      state.login = initialState.login;
      state.passwordModify = initialState.passwordModify;
      state.postWrite = initialState.postWrite;
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

export const { changeField, changeThumbnail, insertTag, formInitial } = formSlice.actions;

export default formSlice.reducer;
