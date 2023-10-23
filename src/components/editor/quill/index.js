import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import { useLocation } from 'react-router-dom';
import { formInitial } from '@/modules/form';
import { postWriteInitial } from '@/modules/board/write';

import 'quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';

const QuillEditor = ({ children, attributes }) => {
  const { type, formData, field, read } = attributes || {};

  const dispatch = useDispatch();
  const location = useLocation();

  const quillElement = useRef(null); // quill div element
  const quillInstance = useRef(null); // quill instance

  const mounted = useRef(false);

  const test = type === 'modify' ? 'postModify' : 'postWrite';

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0];

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 입력해 주세요.',
      modules: {
        // toolbar: []
      }
    });

    // quill에 text-change 이벤트 핸들러를 등록합니다.
    quillInstance.current.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') field({ form: test, key: 'contents', value: quillInstance.current.root.innerHTML });
    });
  }, [test, field]);

  useEffect(() => {
    if (read && !mounted.current) {
      mounted.current = true;

      const contentValue = read?.content ? read.content : formData.contents;

      quillInstance.current.root.innerHTML = contentValue;

      field({ form: test, key: 'contents', value: contentValue });
    }
  }, [test, formData, field, read]);

  useEffect(() => {
    if (number === 'write') {
      quillInstance.current.root.innerHTML = '';

      dispatch(formInitial());
      dispatch(postWriteInitial());
    }
  }, [dispatch, number]);

  return <div ref={quillElement} />;
};

export default QuillEditor;
