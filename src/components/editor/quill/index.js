import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const QuillEditor = ({ children, attributes }) => {
  const { formData, field, read } = attributes || {};

  const quillElement = useRef(null); // quill div element
  const quillInstance = useRef(null); // quill instance

  const mounted = useRef(false);

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
      if (source === 'user') field({ form: 'postWrite', key: 'contents', value: quillInstance.current.root.innerHTML });
    });
  }, [field]);

  useEffect(() => {
    if (read && !mounted.current) {
      mounted.current = true;

      const contentValue = read?.content ? read.content : formData.contents;

      quillInstance.current.root.innerHTML = contentValue;

      field({ form: 'postWrite', key: 'contents', value: contentValue });
    }
  }, [formData, field, read]);

  return <div ref={quillElement} />;
};

export default QuillEditor;
