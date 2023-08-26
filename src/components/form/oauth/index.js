import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import HgroupComponent from "@/components/hgroup";
import ButtonStandardUnit from "@/unit/button/standard";

const StyledLogin = styled.div`
  margin-top: -1.2rem;
  padding: 0 1.2rem 2.4rem;
`;

const StyledSocial = styled.div`
  text-align: center;

  .text_local {
    ${(props) =>
      props.$space &&
      css`
        margin-top: 3.5rem;
      `};
    font-size: 1.2rem;
    color: #757575;
  }
`;

const StyledListSocial = styled.ul`
  margin: -2rem 0 0 -2rem;
  padding-top: 2rem;
`;

const StyledItemSocial = styled.li`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  border-radius: 100%;
  vertical-align: middle;
`;

const StyledLinkSocial = styled(Link)`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;
  background-color: #f1f1f1;
`;

const StyledStandardLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #999;
  vertical-align: top;
`;

const StyledGroupField = styled.div`
  position: relative;
  ${(props) =>
    props.$standard
      ? css`
          margin-top: 3rem;
        `
      : css`
          & + & {
            margin-top: -0.1rem;
          }
        `};

  .text_common {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #757575;
  }

  ${(props) =>
    props.$confirm &&
    css`
      ${StyledBoxField} {
      }

      /* StyledButtonGravity {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        margin-top: 0;
      } */
    `};

  .inner_common {
    position: relative;
    margin-top: 1rem;
  }
`;

const StyledLabelField = styled.label`
  ${(props) =>
    props.$flexible
      ? css`
          position: absolute;
          top: 50%;
          left: 1.4rem;
          z-index: 1;
          font-size: 1.4rem;
          color: #bdbdbd;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);
        `
      : css`
          display: inline-block;
          font-weight: 700;
          font-size: 16px;
          color: #2f3438;
          vertical-align: middle;
        `};
`;

const StyledBoxField = styled.div`
  /* .text_common + & {
    margin-top: 1rem;
  } */

  display: block;
  margin-top: 1rem;
  border: 0.1rem solid #bdbdbd;
  box-sizing: border-box;

  .textfield_local {
    width: 100%;
    padding: 1.05rem 1.4rem;
    border: 0 none;
    box-sizing: border-box;
    font-size: 1.4rem;
  }
`;

const StyledOuterBoxField = styled.div`
  display: inline-block;
  width: 70%;
  padding-right: 1rem;
  box-sizing: border-box;
  vertical-align: middle;

  ${StyledBoxField} {
    margin-top: 0;
  }
`;

const StyledListOptions = styled.ul`
  margin: -2rem 0 0 -2rem;
  padding-top: 2rem;
  text-align: center;
`;

const StyledItemOptions = styled.li`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  font-size: 1.2rem;
  color: #424242;
  vertical-align: middle;
`;

const StyledLinkOptions = styled(Link)`
  font-size: 1.2rem;
  color: #424242;
`;

const LoginFormComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onOauthSubmit,
  onLayerClose,
}) => {
  return (
    <StyledLogin>
      <HgroupComponent
        attribute={{ level: 3, title: "패스워드 재설정", invisible: true }}
      />

      <form onSubmit={onOauthSubmit}>
        <fieldset>
          <legend className="screen_out">패스워드 재설정 영역</legend>

          <StyledGroupField $standard={true}>
            <StyledLabelField htmlFor="password">패스워드</StyledLabelField>

            <p className="text_common">
              패스워드는 알파벳 소문자, 숫자, 특수문자를 하나 이상 포함하고
              6자리 이상 12자리 이하로 입력해 주세요.
            </p>

            <StyledBoxField>
              <input
                type="password"
                name="password"
                id="password"
                className="textfield_local"
                placeholder="패스워드를 입력해 주세요."
                onChange={onFieldChange}
                value={formData.password}
              />
            </StyledBoxField>
          </StyledGroupField>

          <StyledGroupField $standard={true}>
            <StyledLabelField htmlFor="password">
              패스워드 확인
            </StyledLabelField>

            <StyledBoxField>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                className="textfield_local"
                placeholder="패스워드를 한 번 더 입력해 주세요."
                onChange={onFieldChange}
                value={formData.passwordConfirm}
              />
            </StyledBoxField>
          </StyledGroupField>

          {errorMessage && (
            <div className="layer_wrapper">
              <div className="outer_cell">
                <div className="inner_cell">
                  <div className="inner_layer">
                    <p className="text_layer">{errorMessage}</p>

                    <ButtonStandardUnit
                      attribute={{
                        type: "button",
                        event: onLayerClose,
                        fill: true,
                      }}
                    >
                      <span className="text_local">닫기</span>
                    </ButtonStandardUnit>
                  </div>
                </div>
              </div>

              <div className="dimmed"></div>
            </div>
          )}

          <ButtonStandardUnit attribute={{ type: "submit", fill: true }}>
            <span className="text_local">패스워드 변경</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>
    </StyledLogin>
  );
};

export default LoginFormComponent;
