import React from 'react';
import styled from 'styled-components';
import Hgroup from '@/unit/hgroup/standard';
import Button from '@/unit/button/standard';
import Field from '@/unit/field/standard';
import HyperLink from '@/unit/link/standard';
import Layer from '@/unit/layer/standard';

const StyledHyperLink = styled(HyperLink)`
  margin-top: 2rem;
  color: #182c2b;
`;

const StyledButton = styled(Button)`
  margin-top: 1.2rem;
`;

const StyledForm = styled.div`
  max-width: 31.2rem;
  margin: 0 auto;
  text-align: center;
`;

const Form = ({ formData, errorMessage, onSendEmail, onChangeField, onCloseLayer, visibleLayer, onEmailCheck }) => {
  return (
    <StyledForm>
      <Hgroup attributes={{ level: 3, title: '이메일 확인', invisible: true }} />

      <form>
        <fieldset>
          <legend className="screen_out">이메일 입력 영역</legend>

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
                event: onChangeField,
                value: formData.email
              },
              standard: true,
              guideMessage: <p className="text_field">가입하실 때 넣었던 이메일 주소를 입력해 주세요.</p>,
              confirm: true,
              confirmButton: (
                <Button
                  attributes={{
                    type: 'button',
                    confirm: true,
                    event: onEmailCheck
                  }}>
                  <span className="text_local">이메일 확인</span>
                </Button>
              )
            }}
          />

          <StyledButton
            attributes={{
              type: 'button',
              fill: true,
              event: onSendEmail
            }}>
            <span className="text_local">이메일로 인증코드 받기</span>
          </StyledButton>
        </fieldset>
      </form>

      <StyledHyperLink
        attributes={{
          href: 'mailto:goo.gl.denver@gmail.com',
          text: '회원가입할 때 입력한 이메일 주소가 기억나지 않는다면?'
        }}
      />

      <Layer attributes={{ visibleLayer, errorMessage, onCloseLayer }} />
    </StyledForm>
  );
};

export default Form;
