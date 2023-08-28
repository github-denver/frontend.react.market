import React from "react";
import styled from "styled-components";
import HgroupComponent from "@/components/hgroup";
import DimmedUnit from "@/unit/dimmed";
import ButtonStandardUnit from "@/unit/button/standard";
import FieldUnit from "@/unit/field";
import LinkStandardUnit from "@/unit/link/standard";

const StyledFindPassword = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;

  .button_find_email {
    margin-top: 2rem;
  }

  .link_standard {
    margin-top: 2rem;
  }
`;

const FindPasswordComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onLayerClose,
  onSendEmail,
}) => {
  return (
    <StyledFindPassword>
      <HgroupComponent
        attribute={{ level: 3, title: "이메일 확인", invisible: true }}
      />

      <form>
        <fieldset>
          <legend className="screen_out">이메일 입력 영역</legend>

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              confirm: true,
              label: {
                htmlFor: "email",
                text: "이메일",
              },
              guideMessage: (
                <p className="text_field">
                  가입하실 때 넣었던 이메일 주소를 입력해 주세요.
                </p>
              ),
              input: {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "이메일을 입력해 주세요.",
                event: onFieldChange,
                value: formData.email,
              },
              confirmButton: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                    confirm: true,
                  }}
                >
                  <span className="text_local">이메일 확인</span>
                </ButtonStandardUnit>
              ),
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
              type: "button",
              event: onSendEmail,
              className: "button_find_email",
              fill: true,
            }}
          >
            <span className="text_local">이메일로 인증코드 받기</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>

      <LinkStandardUnit
        attribute={{
          className: "link_standard",
          href: "mailto:goo.gl.denver@gmail.com",
          text: "회원가입할 때 입력한 이메일 주소가 기억나지 않는다면?",
        }}
      />
    </StyledFindPassword>
  );
};

export default FindPasswordComponent;
