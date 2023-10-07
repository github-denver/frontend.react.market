import React from 'react';
import styled from 'styled-components';
import Hgroup from '@/unit/hgroup/standard';
import Button from '@/unit/button/standard';
import Field from '@/unit/field/standard';
import List from '@/unit/list/standard';
import Layer from '@/unit/layer/standard';

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const StyledField = styled(Field)``;

const StyledForm = styled.div`
  max-width: 31.2rem;
  margin: 0 auto;
  text-align: center;

  ${StyledField} + ${StyledField} {
    margin-top: -0.1rem;
  }
`;

const Form = ({ formData, errorMessage, onSubmitLogin, onChangeField, onCloseLayer, visibleLayer }) => {
  return (
    <StyledForm>
      <Hgroup attributes={{ level: 3, title: '로그인', invisible: true }} />

      <form onSubmit={onSubmitLogin}>
        <fieldset>
          <legend className="screen_out">로그인 영역</legend>

          <StyledField
            attributes={{
              label: {
                htmlFor: 'id',
                text: '아이디',
                flexible: true
              },
              input: {
                type: 'text',
                name: 'id',
                id: 'id',
                placeholder: '아이디를 입력해 주세요.',
                value: formData.id,
                event: onChangeField
              }
            }}
          />

          <StyledField
            attributes={{
              label: {
                htmlFor: 'password',
                text: '패스워드',
                flexible: true
              },
              input: {
                type: 'password',
                name: 'password',
                id: 'password',
                placeholder: '패스워드를 입력해 주세요.',
                value: formData.password,
                event: onChangeField
              }
            }}
          />

          <StyledButton
            attributes={{
              type: 'submit',
              fill: true
            }}>
            <span className="text_local">로그인</span>
          </StyledButton>
        </fieldset>
      </form>

      <List
        attributes={{
          list: [
            {
              href: '/member/passwordFind',
              text: '패스워드 재설정'
            },
            {
              href: '/member/register',
              text: '회원가입'
            }
          ]
        }}
      />

      <Layer attributes={{ visibleLayer, errorMessage, onCloseLayer }} />
    </StyledForm>
  );
};

export default Form;
