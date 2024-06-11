import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

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
    category: null,
    level: null,
    time: null,
    subject: null,
    contents: null,
    thumbnail: null,
    tags: [],
    error: null
  },
  postModify: {
    category: null,
    level: null,
    time: null,
    subject: null,
    contents: null,
    thumbnail: null,
    tags: [],
    error: null
  },
  comment: {
    postId: null,
    parentCommentId: null,
    content: '',
    modifyContent: ''
  },
  recipesWrite: {
    subject: [],
    contents: [],
    thumbnail: [],
    tags: [],
    error: null
  },
  recipesModify: {
    subject: [],
    contents: [],
    thumbnail: [],
    tags: [],
    error: null
  },
  recipeModifyFormFields: [],
  error: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  // 내부 action 및 동기 action
  reducers: {
    addRecipeFormFields: (state, action) => {
      if (action.payload.index === -1) {
        state.recipeModifyFormFields.push({
          index: state.recipeModifyFormFields.length,
          subject: `Step ${state.recipeModifyFormFields.length + 1}`,
          content: '',
          thumbnail: null,
          tags: []
        });
      } else {
        state.recipeModifyFormFields.push(action.payload);
      }
    },

    changeField: (state, action) => {
      const { form, key, value } = action.payload;

      state[form][key] = value;
    },
    _changeField: (state, action) => {
      const { form, key, value, index } = action.payload;

      if (form === 'recipesWrite') {
        state[form][key][index] = value;
      } else {
        state[form][index][key] = value;
      }
    },
    changeThumbnail: (state, action) => {
      const { form, key, value, idx } = action.payload;

      if (form === 'postWrite' || form === 'postModify') {
        state[form][key] = {
          files: value.files,
          preview: value.preview
        };
      }

      if (form === 'recipesWrite' || form === 'recipesModify') {
        state[form][key][idx] = {
          files: value.files,
          preview: value.preview
        };
      }

      if (form === 'recipeModifyFormFields') {
        state[form][idx][key] = {
          files: value.files,
          preview: value.preview
        };
      }
    },
    insertTag: (state, action) => {
      const { form, value } = action.payload;

      state[form].tags = value;
    },
    formInitial: (state) => {
      state.register = initialState.register;
      state.login = initialState.login;
      state.passwordModify = initialState.passwordModify;
      state.postWrite = initialState.postWrite;
      state.comment = initialState.comment;
      state.error = null;
      state.recipeModifyFormFields = initialState.recipeModifyFormFields;
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

export const { addRecipeFormFields, recipeFormFields, changeField, _changeField, changeThumbnail, insertTag, formInitial } = formSlice.actions;

export default formSlice.reducer;
