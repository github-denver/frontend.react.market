import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Field from '@/unit/field/standard';
import Publish from '@/containers/publish';
import ViewFinder from '@/components/viewFinder';
import { useLocation, useParams } from 'react-router-dom';

const StyledField = styled(Field)`
  margin-top: 1.2rem;
`;

const StyledWrite = styled.div`
  padding: 1.2rem;

  .field_subject,
  .editor_quill,
  .gravity_publish {
    margin-top: 1.2rem;
  }

  .editor_quill .ql-editor {
    height: 12rem;
  }
`;

const BoardWrite = ({ children, attributes }) => {
  const { category, formData, write, read, error, loading, subject, contents, thumbnail, field, upload, owner } = attributes || {};

  const quillElement = useRef(null); // quill div element
  const quillInstance = useRef(null); // quill instance

  const mounted = useRef(false);

  const { number } = useParams();

  let location = useLocation();

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 입력해 주세요.',
      modules: {
        // toolbar: []
      }
    });

    // quill에 text-change 이벤트 핸들러를 등록합니다.
    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        field({ form: 'boardWrite', key: 'contents', value: quill.root.innerHTML });
      }
    });
  }, [field]);

  useEffect(() => {
    if (location.pathname.indexOf('write') > 0) {
      quillInstance.current.root.innerHTML = formData.contents;
    }

    //
  }, [location, formData, number]);

  useEffect(() => {
    if (read && !mounted.current) {
      mounted.current = true;

      quillInstance.current.root.innerHTML = read && typeof read !== 'undefined' ? read.content : contents;
    }
  }, [contents, read]);

  const onChangeSubject = (event) => {
    field({ form: 'boardWrite', key: 'subject', value: event.target.value });
  };

  const onChangeThumbnail = (event) => {
    let files = null;
    let preview = null;

    if (window.FileReader) {
      // 이미지 파일만 통과합니다.
      if (event.target.files.length === 0) {
        upload({
          key: 'thumbnail',
          value: {
            files: null,
            preview: null
          }
        });

        return;
      }

      if (!event.target.files[0].type.match(/image\//)) return;

      // 읽기
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      files = event.target.files[0];

      // 읽은 후
      reader.onload = (event) => {
        preview = event.target.result;

        const formData = new FormData();
        formData.append('files', files);
        formData.append('preview', preview);

        upload({
          key: 'thumbnail',
          value: {
            files: formData.get('files'),
            preview: formData.get('preview')
          }
        });
      };
    } else {
    }
  };

  return (
    <StyledWrite>
      <ViewFinder
        attributes={{
          src: thumbnail?.preview,
          url: read?.thumbnail,
          tags: read?.tags,
          products: read?.products,
          event: onChangeThumbnail
        }}
      />

      <StyledField
        attributes={{
          standard: true,
          label: {
            htmlFor: 'subject',
            text: '제목',
            flexible: true
          },
          input: {
            type: 'text',
            name: 'subject',
            id: 'subject',
            placeholder: '제목을 입력해 주세요.',
            value: formData.subject ? formData.subject : read?.subject,
            event: onChangeSubject
          }
        }}
      />

      <div className="editor_quill">
        <div ref={quillElement} />
      </div>

      <Publish attributes={{ category, owner }} />
    </StyledWrite>
  );
};

export default BoardWrite;
