import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import HgroupComponent from "@/components/hgroup";

const StyledLogin = styled.div`
  margin-top: -1.2rem;
  padding: 0 1.2rem 2.4rem;
`;

const StyledSocial = styled.div`
  text-align: center;

  .text_local {
    ${(posps) =>
      posps.$space &&
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
  ${(posps) =>
    posps.$standard
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

  ${(posps) =>
    posps.$confirm &&
    css`
      ${StyledBoxField} {
      }

      ${StyledButtonGravity} {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        margin-top: 0;
      }
    `};

  .inner_common {
    position: relative;
    margin-top: 1rem;
  }
`;

const StyledLabelField = styled.label`
  ${(posps) =>
    posps.$flexible
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

const StyledButtonGravity = styled.button`
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 1.4rem 0;
  border: 0.1rem solid #35c5f0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  ${(posps) =>
    posps.$fill
      ? css`
          background-color: #35c5f0;

          .text_local {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
        `};
  color: #35c5f0;
  line-height: 1;

  .text_local {
    display: inline-block;
    /* margin: 0; */
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
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
  onLoginSubmit,
  onLayerClose,
}) => {
  return (
    <StyledLogin>
      <HgroupComponent
        attribute={{ level: 3, title: "로그인", invisible: true }}
      />

      <form onSubmit={onLoginSubmit}>
        <fieldset>
          <legend className="screen_out">로그인 영역</legend>

          <StyledGroupField>
            <StyledLabelField htmlFor="id" $flexible={true}>
              아이디
            </StyledLabelField>

            <StyledBoxField>
              <input
                type="text"
                name="id"
                id="id"
                className="textfield_local"
                placeholder="아이디를 입력해 주세요."
                onChange={onFieldChange}
                value={formData.id}
              />
            </StyledBoxField>
          </StyledGroupField>

          <StyledGroupField>
            <StyledLabelField htmlFor="password" $flexible={true}>
              패스워드
            </StyledLabelField>

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

          {errorMessage && (
            <div className="layer_wrapper">
              <div className="outer_cell">
                <div className="inner_cell">
                  <div className="inner_layer">
                    <p className="text_layer">{errorMessage}</p>

                    <StyledButtonGravity
                      type="button"
                      $fill={true}
                      onClick={onLayerClose}
                    >
                      <span className="text_local">닫기</span>
                    </StyledButtonGravity>
                  </div>
                </div>
              </div>

              <div className="dimmed"></div>
            </div>
          )}

          <StyledButtonGravity type="submit">
            <span className="text_local">로그인</span>
          </StyledButtonGravity>
        </fieldset>
      </form>

      <StyledListOptions>
        <StyledItemOptions>
          <StyledLinkOptions to="/">비밀번호 재설정</StyledLinkOptions>
        </StyledItemOptions>
        <StyledItemOptions>
          <StyledLinkOptions to="/member/register">회원가입</StyledLinkOptions>
        </StyledItemOptions>
      </StyledListOptions>

      <StyledSocial $space={true}>
        <p className="text_local">SNS 계정으로 간편하게 회원가입하세요.</p>

        <StyledListSocial>
          <StyledItemSocial>
            <StyledLinkSocial to="/">네이버 로그인</StyledLinkSocial>
          </StyledItemSocial>
          <StyledItemSocial>
            <StyledLinkSocial to="/">카카오 로그인</StyledLinkSocial>
          </StyledItemSocial>
        </StyledListSocial>

        <StyledStandardLink to="/">
          로그인에 문제가 있으신가요?
        </StyledStandardLink>
      </StyledSocial>
    </StyledLogin>
  );
};

export default LoginFormComponent;
