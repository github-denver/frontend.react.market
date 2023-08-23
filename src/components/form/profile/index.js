import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import HgroupComponent from "@/components/hgroup";

const StyledButtonGravity = styled.button`
  display: block;
  width: 100%;
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

const StyledRegister = styled.div`
  margin-top: -1.2rem;
  padding: 0 1.2rem 2.4rem;

  ${StyledButtonGravity} {
    margin-top: 2rem;
  }
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

      ${StyledButtonGravity} {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
      }
    `};

  .inner_common {
    position: relative;
    margin-top: 1rem;

    ${StyledButtonGravity} {
      margin-top: 0;
    }
  }

  ${StyledButtonGravity} {
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

const ProfileFormComponent = ({
  loading,
  formData,
  errorMessage,
  onFieldChange,
  onModifySubmit,
  user,
}) => {
  if (loading || !user) {
    console.log("읽어들이는 중..");

    return <p>읽어들이는 중..</p>;
  }

  if (!user) {
    console.log("정보가 존재하지 않습니다.");

    return <p>정보가 존재하지 않습니다.</p>;
  }

  return (
    <StyledRegister>
      <HgroupComponent
        attribute={{ level: 3, title: "마이페이지", invisible: true }}
      />

      <form onSubmit={onModifySubmit}>
        <fieldset>
          <legend className="screen_out">마이페이지 영역</legend>

          <StyledGroupField $standard={true}>
            <StyledLabelField htmlFor="id">아이디</StyledLabelField>

            {/* <p className="text_common">
              아이디는 알파벳 소·대문자, 숫자, - . _만 입력 가능하고 4자리 이상
              8자리 이하로 입력해 주세요.
            </p> */}

            <StyledBoxField>
              <input
                type="text"
                name="id"
                id="id"
                className="textfield_local"
                // placeholder="아이디를 입력해 주세요."
                onChange={onFieldChange}
                // value={formData.id}
                defaultValue={user.id}
                disabled
              />
            </StyledBoxField>
          </StyledGroupField>

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
                // value={formData.password}
                defaultValue={user.password}
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
                // value={formData.passwordConfirm}
                defaultValue={user.passwordConfirm}
              />
            </StyledBoxField>
          </StyledGroupField>

          <StyledGroupField $standard={true} $confirm={true}>
            <StyledLabelField htmlFor="name">닉네임</StyledLabelField>

            <p className="text_common">
              닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리
              이하로 입력해 주세요.
            </p>

            <div className="inner_common">
              <StyledOuterBoxField>
                <StyledBoxField>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="textfield_local"
                    placeholder="닉네임을 입력해 주세요."
                    onChange={onFieldChange}
                    // value={formData.name}
                    defaultValue={user.name}
                  />
                </StyledBoxField>
              </StyledOuterBoxField>

              <StyledButtonGravity type="button">
                <span className="text_local">
                  <span className="screen_out">닉네임</span> 중복검사
                </span>
              </StyledButtonGravity>
            </div>
          </StyledGroupField>

          <StyledGroupField $standard={true} $confirm={true}>
            <StyledLabelField htmlFor="email">이메일</StyledLabelField>

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
                    // value={formData.email}
                    defaultValue={user.email}
                  />
                </StyledBoxField>
              </StyledOuterBoxField>

              <StyledButtonGravity type="button">
                <span className="text_local">
                  <span className="screen_out">이메일</span> 중복검사
                </span>
              </StyledButtonGravity>
            </div>
          </StyledGroupField>

          {errorMessage && <p>{errorMessage}</p>}

          <StyledButtonGravity type="submit" $fill={true}>
            <span className="text_local">회원정보 수정</span>
          </StyledButtonGravity>
        </fieldset>
      </form>
    </StyledRegister>
  );
};

export default ProfileFormComponent;
