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

const StyledModifyPassword = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;
`;

const ModifyPassword = ({ formData, errorMessage, onModifyPassword, onChangeField, onCloseLayer, visibleLayer }) => {
  return (
    <StyledModifyPassword>
      <Hgroup attributes={{ level: 3, title: '패스워드 재설정', invisible: true }} />

      <form>
        <fieldset>
          <legend className="screen_out">패스워드 재설정 영역</legend>

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

          <StyledButton
            attributes={{
              type: 'button',
              fill: true,
              event: onModifyPassword
            }}>
            <span className="text_local">패스워드 변경</span>
          </StyledButton>
        </fieldset>
      </form>

      <List
        attributes={{
          list: [
            {
              href: '/member/findPassword',
              text: '패스워드 재설정'
            },
            {
              href: '/member/login',
              text: '로그인'
            }
          ]
        }}
      />

      <Layer attributes={{ visibleLayer, errorMessage, onCloseLayer }} />
    </StyledModifyPassword>
  );
};

export default ModifyPassword;
