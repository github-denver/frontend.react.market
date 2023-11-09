import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Field from '@/unit/field/standard';
import Publish from '@/containers/publish';
import ViewFinder from '@/components/viewFinder';
import Half from '@/unit/half/standard';
import Text from '@/unit/text/standard';
import QuillEditor from '@/components/editor/quill';
import { ImBin } from 'react-icons/im';
import { HiPlusSmall } from 'react-icons/hi2';
import Thin from '@/unit/thin/standard';
import { _changeField } from '../../../modules/form';
import { useDispatch } from 'react-redux';
import TextArea from './test';

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.3rem;
`;

const StyledText = styled(Text)`
  margin: 0;
  font-weight: 500;
  /* font-size: 1.5rem; */
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
  border: 0.1rem solid #987060;
  border-radius: 0.8rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  color: #987060;
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
      font-size: 1.3rem;
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
  const { category, number, user, formData, recipesFormData, field, upload, read, error, loading, owner, fakeFields, onChangeSubject, onChangeThumbnail, onClickFakeField, onChangeSelect, onChangeChoice, hour, minute, second, quill, recipeModifyFormFields } = attributes || {};

  const [formFields, setFormFields] = useState([]);

  const [isTest123, setIsTest123] = useState(false);

  const dispatch = useDispatch();
  const _field = useCallback((payload) => dispatch(_changeField(payload)), [dispatch]);

  const handleAddFields = () => {
    const values = [...formFields, { subject: [], content: [], thumbnail: [] }];
    setFormFields(values);
  };

  const handleRemoveFields = (index) => {
    if (formFields.length === 1) {
      alert('At least one form must remain');
      return;
    }
    const values = [...formFields].splice(index, 1);
    setFormFields(values);
  };

  const handleInputChange = (index, event) => {
    /*
    const values = [...formFields];

    if (e.target.name === 'name') {
      values[index].name = e.target.value;
    } else {
      values[index].value = e.target.value;
    }
    setFormFields(values);
    */

    _field({ form: 'recipesModify', key: 'contents', value: event.target.value, index });
  };

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    // console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !read) {
    // console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (!read) {
    // console.log('등록된 글이 없습니다.');

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
          type: 'postModify',
          src: formData?.thumbnail?.preview,
          url: read?.thumbnail,
          tags: read?.tags,
          products: read?.products,
          event: onChangeThumbnail
        }}
      />

      {/* <StyledHalf
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
                text: '식사 종류'
              }}
            />
          ),
          second: (
            <StyledSelect name="level" onChange={(event) => onChangeSelect({ key: 'category' }, event)} defaultValue={read?.category ? read.category : ''}>
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
              <option value="drink">주스</option>
            </StyledSelect>
          )
        }}
      /> */}

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
            value: formData.subject,
            event: onChangeSubject,
            fake: {
              state: fakeFields.subjectField,
              input: {
                value: read?.subject,
                event: () => onClickFakeField('subject')
              }
            }
          }
        }}
      />

      <div className="editor_quill">
        <QuillEditor attributes={{ type: 'modify', formData, field, read }} />
      </div>

      <p style={{ fontSize: 14 }}>formFields: {JSON.stringify(formFields)}</p>
      <p style={{ fontSize: 14 }}>formFields.length: {formFields.length}</p>

      {recipeModifyFormFields.map((currentValue, index) => {
        return (
          <div className="write_recipe" key={index}>
            <Thin />

            <div className="inner_recipe">
              <label htmlFor={`step${index}`} className="recipe_label">
                {currentValue.subject}
              </label>

              <ViewFinder
                attributes={{
                  type: 'recipesModify',
                  src: recipesFormData.thumbnail[index]?.preview,
                  url: currentValue.thumbnail,
                  event: onChangeThumbnail,
                  isTags: true,
                  idx: index
                }}
              />

              <TextArea index={index} value={recipesFormData[index]?.contents} defaultValue={currentValue.content} event={handleInputChange} />

              {/* <StyledField
              attributes={{
                standard: true,
                label: {
                  htmlFor: `recipe_content${index}`,
                  text: '레시피 내용',
                  flexible: true
                },
                input: {
                  type: 'text',
                  name: `recipe_content${index}`,
                  id: `recipe_content${index}`,
                  placeholder: '레시피 내용을 입력해 주세요.',
                  value: recipesFormData[index]?.contents,
                  event: (e) => handleInputChange(index, e),
                  fake: {
                    state: fakeFields.recipeContentField,
                    input: {
                      value: currentValue.content,
                      event: () => onClickFakeField('recipeContent')
                    }
                  }
                }
              }}
            /> */}

              <button type="button" className="button_remove" onClick={() => handleRemoveFields(index)}>
                <ImBin size={20} />
              </button>
            </div>
          </div>
        );
      })}

      <button type="button" className="button_add" onClick={() => handleAddFields()}>
        <HiPlusSmall size={24} />
      </button>

      <StyledPublish attributes={{ type: 'modify', category, owner, fakeFields }} />
    </StyledWrite>
  );
};

export default BoardWrite;
