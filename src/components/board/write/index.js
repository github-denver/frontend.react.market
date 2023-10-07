import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Field from '@/unit/field/standard';
import Publish from '@/containers/publish';
import ViewFinder from '@/components/viewFinder';
import Half from '@/unit/half/standard';
import Text from '@/unit/text/standard';

const StyledText = styled(Text)`
  margin: 0;
  font-weight: 500;
  /* font-size: 1.6rem; */
`;

const StyledHalf = styled(Half)`
  margin-top: 1.2rem;
`;

const StyledPublish = styled(Publish)`
  margin: 2.4rem 0 -1.2rem;
`;

const StyledField = styled(Field)`
  margin-top: 1.2rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 4.4rem;
  /* margin-top: 1rem; */
  padding: 0 1.4rem;
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.4rem;
  box-sizing: border-box;
  font-size: 1.4rem;
  color: #343434;
  background-color: #fff;
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

  .list_triple {
    margin: 0 -0.4rem;
    font-size: 0;

    .item_triple {
      display: inline-block;
      width: 33.33%;
      padding: 0 0.4rem;
      box-sizing: border-box;
      vertical-align: middle;
    }

    input {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;

      & + label {
        padding-left: 0.4rem;
      }
    }

    label {
      display: inline-block;
      font-size: 1.4rem;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
  }
`;

const BoardWrite = ({ children, attributes }) => {
  const { category, formData, field, upload, read, owner } = attributes || {};

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
    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') field({ form: 'postWrite', key: 'contents', value: quill.root.innerHTML });
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

  const onChangeSubject = (event) => {
    field({ form: 'postWrite', key: 'subject', value: event.target.value });
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

  const [year, setYear] = useState([]);
  const [minute, setMinute] = useState([]);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    let _year = [];

    for (let i = 1; i <= 24; i++) {
      if (i >= 1 && i < 10) {
        _year.push('0' + i);
      } else {
        _year.push(i);
      }
    }
    console.log('_year: ', _year);
    setYear(_year);

    let _minute = [];
    for (let i = 0; i <= 12; i++) {
      let gap = 5 * i;

      if (gap >= 0 && gap < 10) {
        _minute.push('0' + gap);
      } else {
        _minute.push(gap);
      }
    }
    console.log('_minute: ', _minute);
    setMinute(_minute);

    let _second = [];
    for (let i = 0; i <= 12; i++) {
      let gap = 5 * i;

      if (gap >= 0 && gap < 10) {
        _second.push('0' + gap);
      } else {
        _second.push(gap);
      }
    }
    console.log('_second: ', _second);
    setSecond(_second);
  }, []);

  return (
    <StyledWrite>
      <ViewFinder
        attributes={{
          src: formData.thumbnail?.preview,
          url: read?.thumbnail,
          tags: read?.tags,
          products: read?.products,
          event: onChangeThumbnail
        }}
      />

      <StyledHalf
        attributes={{
          styles: {
            first: {
              width: '25%'
            },
            second: {
              width: '75%',
              textAlign: 'center'
            }
          },
          first: (
            <StyledText
              attributes={{
                text: '레시피 종류'
              }}
            />
          ),
          second: (
            <StyledSelect>
              <option value="">-- 선택 --</option>
              <option value="stew">찌개</option>
              <option value="noodle">면</option>
              <option value="curry">카레</option>
              <option value="steak">스테이크</option>
              <option value="soup">수프</option>
              <option value="salad">샐러드</option>
              <option value="baking">빵</option>
              <option value="burger">햄버거</option>
              <option value="pizza">피자</option>
              <option value="cake">케이크</option>
              <option value="dessert">디저트</option>
              <option value="drink">음료수</option>
            </StyledSelect>
          )
        }}
      />

      <StyledHalf
        attributes={{
          styles: {
            first: {
              width: '25%'
            },
            second: {
              width: '75%',
              textAlign: 'center'
            }
          },
          first: (
            <StyledText
              attributes={{
                text: '조리 난이도'
              }}
            />
          ),
          second: (
            <ul className="list_triple">
              <li className="item_triple">
                <input type="radio" name="level" id="good" />
                <label htmlFor="good">상</label>
              </li>
              <li className="item_triple">
                <input type="radio" name="level" id="fair" defaultChecked />
                <label htmlFor="fair">중</label>
              </li>
              <li className="item_triple">
                <input type="radio" name="level" id="poor" />
                <label htmlFor="poor">하</label>
              </li>
            </ul>
          )
        }}
      />

      <StyledHalf
        attributes={{
          styles: {
            first: {
              width: '25%'
            },
            second: {
              width: '75%',
              textAlign: 'center'
            }
          },
          first: (
            <StyledText
              attributes={{
                text: '조리 시간'
              }}
            />
          ),
          second: (
            <ul className="list_triple">
              <li className="item_triple">
                <StyledSelect>
                  <option value="">-- 시간 --</option>

                  {year.map((currentValue, index) => (
                    <option value={currentValue} key={index}>
                      {currentValue}시간
                    </option>
                  ))}
                </StyledSelect>
              </li>
              <li className="item_triple">
                <StyledSelect>
                  <option value="">-- 분 --</option>

                  {minute.map((currentValue, index) => (
                    <option value={currentValue} key={index}>
                      {currentValue}분
                    </option>
                  ))}
                </StyledSelect>
              </li>
              <li className="item_triple">
                <StyledSelect>
                  <option value="">-- 초 --</option>

                  {second.map((currentValue, index) => (
                    <option value={currentValue} key={index}>
                      {currentValue}초
                    </option>
                  ))}
                </StyledSelect>
              </li>
            </ul>
          )
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

      <StyledPublish attributes={{ category, owner }} />
    </StyledWrite>
  );
};

export default BoardWrite;
