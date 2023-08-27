import React from "react";
import styled from "styled-components";
import HgroupComponent from "@/components/hgroup";
import DimmedUnit from "@/unit/dimmed";
import ButtonStandardUnit from "@/unit/button/standard";
import FieldUnit from "@/unit/field";

const StyledRegister = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;

  .button_modify_profile {
    margin-top: 2rem;
  }

  .button_email_confirm {
    margin-top: 1.2rem;
  }
`;

const ProfileFormComponent = ({
  loading,
  formData,
  errorMessage,
  onFieldChange,
  onModifySubmit,
  onIdCheck,
  onNameCheck,
  onEmailCheck,
  onLayerClose,
  onSendEmail,
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

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              label: {
                htmlFor: "id",
                text: "아이디",
              },
              input: {
                type: "text",
                name: "id",
                id: "id",
                defaultValue: user.id,
                disabled: true,
              },
            }}
          />

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              label: {
                htmlFor: "password",
                text: "패스워드",
              },
              guideMessage: (
                <p className="text_field">
                  패스워드는 알파벳 소문자, 숫자, 특수문자를 하나 이상 포함하고
                  6자리 이상 12자리 이하로 입력해 주세요.
                </p>
              ),
              input: {
                type: "password",
                name: "password",
                id: "password",
                placeholder: "패스워드를 입력해 주세요.",
                event: onFieldChange,
                value: formData.password,
              },
            }}
          />

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              label: {
                htmlFor: "passwordConfirm",
                text: "패스워드 확인",
              },
              input: {
                type: "password",
                name: "passwordConfirm",
                id: "passwordConfirm",
                placeholder: "패스워드를 한 번 더 입력해 주세요.",
                event: onFieldChange,
                value: formData.passwordConfirm,
              },
            }}
          />

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              confirm: true,
              label: {
                htmlFor: "name",
                text: "닉네임",
              },
              guideMessage: (
                <p className="text_field">
                  닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리
                  이하로 입력해 주세요.
                </p>
              ),
              input: {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "닉네임을 입력해 주세요.",
                event: onFieldChange,
                defaultValue: user.name,
              },
              confirmButton: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                    event: onNameCheck,
                    confirm: true,
                  }}
                >
                  <span className="text_local">
                    <span className="screen_out">닉네임</span> 중복검사
                  </span>
                </ButtonStandardUnit>
              ),
            }}
          />

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              confirm: true,
              label: {
                htmlFor: "email",
                text: "이메일",
              },
              input: {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "이메일을 입력해 주세요.",
                event: onFieldChange,
                defaultValue: user.email,
              },
              confirmButton: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                    event: onEmailCheck,
                    confirm: true,
                  }}
                >
                  <span className="text_local">
                    <span className="screen_out">이메일</span> 중복검사
                  </span>
                </ButtonStandardUnit>
              ),
            }}
          />

          <ButtonStandardUnit
            attribute={{
              type: "button",
              className: "button_email_confirm",
              event: onSendEmail,
            }}
          >
            <span className="text_local">이메일 인증</span>
          </ButtonStandardUnit>

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

              <DimmedUnit attribute={{ visible: true }} />
            </div>
          )}

          <ButtonStandardUnit
            attribute={{
              type: "submit",
              className: "button_modify_profile",
              fill: true,
            }}
          >
            <span className="text_local">회원정보 수정</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>
    </StyledRegister>
  );
};

export default ProfileFormComponent;
