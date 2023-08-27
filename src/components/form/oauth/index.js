import React from "react";
import styled from "styled-components";
import HgroupComponent from "@/components/hgroup";
import DimmedUnit from "@/unit/dimmed";
import ButtonStandardUnit from "@/unit/button/standard";
import FieldUnit from "@/unit/field";

const StyledModifyPassword = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;

  .button_modify_password {
    margin-top: 2rem;
  }
`;

const ModifyPasswordComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onOauthSubmit,
  onLayerClose,
}) => {
  return (
    <StyledModifyPassword>
      <HgroupComponent
        attribute={{ level: 3, title: "패스워드 재설정", invisible: true }}
      />

      <form onSubmit={onOauthSubmit}>
        <fieldset>
          <legend className="screen_out">패스워드 재설정 영역</legend>

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
              className: "button_modify_password",
              fill: true,
            }}
          >
            <span className="text_local">패스워드 변경</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>
    </StyledModifyPassword>
  );
};

export default ModifyPasswordComponent;
