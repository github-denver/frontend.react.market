import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Field from '@/unit/field/standard';
import Publish from '@/containers/publish';
import ViewFinder from '@/components/viewFinder';
import Half from '@/unit/half/standard';
import Text from '@/unit/text/standard';
import QuillEditor from '../../editor/quill';

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.2rem;
`;

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
  const { category, number, user, formData, field, upload, read, error, loading, owner, fakeFields, onChangeSubject, onChangeThumbnail, onClickFakeField, onChangeSelect, onChangeChoice, hour, minute, second, quill } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if ((number !== 'write' && loading) || !read) {
    console.log('읽어들이는 중입니다.');

    return <p>읽어들이는 중입니다.</p>;
  }

  if (number !== 'write' && !read) {
    console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
  }

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
            <StyledSelect name="level" onChange={(event) => onChangeSelect({ key: 'category' }, event)} defaultValue={read?.category}>
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
                <input type="radio" name="level" id="good" value="상" onChange={onChangeChoice} defaultChecked={read?.level === '상'} />
                <label htmlFor="good">상</label>
              </li>
              <li className="item_triple">
                <input type="radio" name="level" id="fair" value="중" onChange={onChangeChoice} defaultChecked={read?.level === '중'} />
                <label htmlFor="fair">중</label>
              </li>
              <li className="item_triple">
                <input type="radio" name="level" id="poor" value="하" onChange={onChangeChoice} defaultChecked={read?.level === '하'} />
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
                <StyledSelect onChange={(event) => onChangeSelect({ key: 'hour' }, event)} defaultValue={read?.time.split(':')[0]}>
                  <option value="">-- 시간 --</option>

                  {hour.map((currentValue, index) => (
                    <option value={currentValue} key={index}>
                      {currentValue}시간
                    </option>
                  ))}
                </StyledSelect>
              </li>
              <li className="item_triple">
                <StyledSelect onChange={(event) => onChangeSelect({ key: 'minute' }, event)} defaultValue={read?.time.split(':')[1]}>
                  <option value="">-- 분 --</option>

                  {minute.map((currentValue, index) => (
                    <option value={currentValue} key={index}>
                      {currentValue}분
                    </option>
                  ))}
                </StyledSelect>
              </li>
              <li className="item_triple">
                <StyledSelect onChange={(event) => onChangeSelect({ key: 'second' }, event)} defaultValue={read?.time.split(':')[2]}>
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
        <QuillEditor attributes={{ formData, field, read }} />
      </div>

      <StyledPublish attributes={{ category, owner }} />
    </StyledWrite>
  );
};

export default BoardWrite;
