import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import HgroupComponent from "@/components/hgroup";

const StyledDimmed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  ${(porps) =>
    porps.$visible
      ? css`
          display: block;
          opacity: 0.5;
        `
      : css`
          display: none;
          opacity: 0;
          pointer-events: none;
        `}
  transition: opacity 0.4s;
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
  text-align: left;

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

const StyledButtonGravity = styled.button`
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 1.4rem 0;
  border: 0.1rem solid #35c5f0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  ${(props) =>
    props.$fill
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

const StyledLogin = styled.div`
  /* margin-top: -1.2rem; */
  padding: 0 1.2rem 2.4rem;
  text-align: center;

  legend + ${StyledGroupField} {
    margin-top: 0;
  }
`;

const FindPasswordFormComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onLayerClose,
  onSendEmail,
}) => {
  return (
    <StyledLogin>
      <HgroupComponent
        attribute={{ level: 3, title: "로그인", invisible: true }}
      />

      <form>
        <fieldset>
          <legend className="screen_out">이메일 입력 영역</legend>

          <StyledGroupField $standard={true} $confirm={true}>
            <StyledLabelField htmlFor="password">이메일</StyledLabelField>

            <p className="text_common">
              가입하실 때 넣었던 이메일 주소를 입력해 주세요.
            </p>

            <div className="inner_common">
              <StyledOuterBoxField>
                <StyledBoxField>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="textfield_local"
                    placeholder="이메일을 입력해 주세요."
                    onChange={onFieldChange}
                    value={formData.email}
                  />
                </StyledBoxField>
              </StyledOuterBoxField>

              <StyledButtonGravity type="button">
                <span className="text_local">이메일 확인</span>
              </StyledButtonGravity>
            </div>
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

              <StyledDimmed $visible={true} />
            </div>
          )}

          <StyledButtonGravity type="button" $fill={true} onClick={onSendEmail}>
            <span className="text_local">이메일로 인증코드 받기</span>
          </StyledButtonGravity>
        </fieldset>
      </form>

      <StyledStandardLink to="mailto:goo.gl.denver@gmail.com">
        회원가입할 때 입력한 이메일 주소가 기억나지 않는다면?
      </StyledStandardLink>
    </StyledLogin>
  );
};

export default FindPasswordFormComponent;
