import React from 'react';
import styled from 'styled-components';
import Hgroup from '@/unit/hgroup/standard';
import Button from '@/unit/button/standard';
import Field from '@/unit/field/standard';
// import List from '@/unit/list/standard';
import Layer from '@/unit/layer/standard';
import Half from '@/unit/half/standard';

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1.2rem;
`;

const StyledField = styled(Field)`
  margin-top: 1.2rem !important;
`;

const StyledForm = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;
`;

const Profile = ({ formData, errorMessage, user, error, loading, onSubmitProfileModify, onChangeField, onCloseLayer, visibleLayer, onNameCheck, onEmailCheck, onSendEmail, fakeFields, onClickFakeField }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 데이터입니다.');

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log('에러가 발생했습니다.');

    return <p>에러가 발생했습니다.</p>;
  }

  if (loading || !user) {
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.');

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  if (!user) {
    console.log('정보가 존재하지 않습니다.');

    return <p>정보가 존재하지 않습니다.</p>;
  }

  return (
    <StyledForm>
      <Hgroup attributes={{ level: 3, title: '회원정보 수정', invisible: true }} />

      <form onSubmit={onSubmitProfileModify}>
        <fieldset>
          <legend className="screen_out">회원정보 수정 영역</legend>

          <Field
            attributes={{
              label: {
                htmlFor: 'id',
                text: '아이디'
              },
              input: {
                type: 'text',
                name: 'id',
                id: 'id',
                placeholder: '아이디를 입력해 주세요.',
                defaultValue: user.id,
                disabled: true
              }
            }}
          />

          <Field
            attributes={{
              label: {
                htmlFor: 'password',
                text: '패스워드'
              },
              input: {
                type: 'password',
                name: 'password',
                id: 'password',
                placeholder: '패스워드를 입력해 주세요.',
                value: formData.password,
                event: onChangeField,
                autoComplete: 'new-password'
              },
              standard: true,
              guideMessage: <p className="text_field">패스워드는 알파벳 소문자, 숫자, 특수문자를 하나 이상 포함하고 6자리 이상 12자리 이하로 입력해 주세요.</p>
            }}
          />

          <Field
            attributes={{
              label: {
                htmlFor: 'passwordConfirm',
                text: '패스워드 확인'
              },
              input: {
                type: 'password',
                name: 'passwordConfirm',
                id: 'passwordConfirm',
                placeholder: '패스워드를 한 번 더 입력해 주세요.',
                value: formData.passwordConfirm,
                event: onChangeField,
                autoComplete: 'new-password'
              },
              standard: true
            }}
          />

          <Field
            attributes={{
              label: {
                htmlFor: 'name',
                text: '닉네임'
              },
              input: {
                type: 'text',
                name: 'name',
                id: 'name',
                placeholder: '닉네임을 입력해 주세요.',
                value: formData.name,
                event: onChangeField,
                fake: {
                  state: fakeFields.nameField,
                  input: {
                    value: user.name,
                    event: () => onClickFakeField('name')
                  }
                  /*
                  confirmButton: (
                    <Button
                      attributes={{
                        type: 'button',
                        confirm: true,
                        event: onClickFakeField('name')
                      }}>
                      <span className="text_local">
                        <span className="screen_out">닉네임</span> 중복검사
                      </span>
                    </Button>
                  )
                  */
                }
              },
              standard: true,
              guideMessage: <p className="text_field">닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리 이하로 입력해 주세요.</p>,
              confirm: true,
              confirmButton: (
                <Button
                  attributes={{
                    type: 'button',
                    confirm: true,
                    event: onNameCheck
                  }}>
                  <span className="text_local">
                    <span className="screen_out">닉네임</span> 중복검사
                  </span>
                </Button>
              )
            }}
          />

          <Field
            attributes={{
              label: {
                htmlFor: 'email',
                text: '이메일'
              },
              input: {
                type: 'email',
                name: 'email',
                id: 'email',
                placeholder: '이메일을 입력해 주세요.',
                value: formData.email,
                event: onChangeField,
                fake: {
                  state: fakeFields.emailField,
                  input: {
                    value: user.email,
                    event: () => onClickFakeField('email')
                  }
                }
              },
              standard: true,
              confirm: true,
              confirmButton: (
                <Button
                  attributes={{
                    type: 'button',
                    confirm: true,
                    event: onEmailCheck
                  }}>
                  <span className="text_local">
                    <span className="screen_out">이메일</span> 중복검사
                  </span>
                </Button>
              )
            }}
          />

          {/* <StyledButton
            attributes={{
              type: 'button'
            }}>
            <span className="text_local">이메일 인증</span>
          </StyledButton>

          <StyledField
            attributes={{
              input: {
                type: 'email',
                name: 'emailConfirm',
                id: 'emailConfirm',
                placeholder: '인증번호를 입력해 주세요.',
                defaultValue: ''
              },
              standard: true,
              confirm: true,
              confirmButton: (
                <Button
                  attributes={{
                    type: 'button',
                    confirm: true,
                    event: null
                  }}>
                  <span className="text_local">인증번호 확인</span>
                </Button>
              )
            }}
          /> */}

          <StyledSubmit
            attributes={{
              type: 'submit',
              fill: true
            }}>
            <span className="text_local">회원정보 수정</span>
          </StyledSubmit>
        </fieldset>
      </form>

      <Layer attributes={{ visibleLayer, errorMessage, onCloseLayer }} />
    </StyledForm>
  );
};

export default Profile;
