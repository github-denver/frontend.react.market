import React from "react";
import styled from "styled-components";
import HgroupComponent from "@/components/hgroup";
import DimmedUnit from "@/unit/dimmed";
import ButtonStandardUnit from "@/unit/button/standard";
import FieldUnit from "@/unit/field";
import ListStandardComponent from "@/components/list/standard";
import SocialComponent from "@/components/social";
import LinkStandardUnit from "@/unit/link/standard";

const StyledLogin = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;

  .button_login {
    margin-top: 2rem;
  }

  .group_social {
    margin-top: 3.6rem;
  }

  .link_standard {
    margin-top: 2rem;
  }
`;

const LoginComponent = ({
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

          <FieldUnit
            attribute={{
              className: "group_field",
              label: {
                htmlFor: "id",
                text: "아이디",
                flexible: true,
              },
              input: {
                type: "text",
                name: "id",
                id: "id",
                placeholder: "아이디를 입력해 주세요.",
                event: onFieldChange,
                value: formData.id,
              },
            }}
          />

          <FieldUnit
            attribute={{
              className: "group_field",
              label: {
                htmlFor: "password",
                text: "패스워드",
                flexible: true,
              },
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
              className: "button_login",
              fill: true,
            }}
          >
            <span className="text_local">로그인</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>

      <ListStandardComponent
        attribute={{
          list: [
            {
              href: "/member/findPassword",
              text: "패스워드 재설정",
            },
            {
              href: "/member/register",
              text: "회원가입",
            },
          ],
        }}
      />

      <SocialComponent
        attribute={{
          className: "group_social",
          guideMessage: "SNS 계정으로 간편하게 회원가입하세요.",
          list: [
            {
              href: "/",
              text: "네이버 로그인",
            },
            {
              href: "/",
              text: "카카오 로그인",
            },
          ],
        }}
      >
        <LinkStandardUnit
          attribute={{
            className: "link_standard",
            href: "mailto:goo.gl.denver@gmail.com",
            text: "로그인에 문제가 있으신가요?",
          }}
        />
      </SocialComponent>
    </StyledLogin>
  );
};

export default LoginComponent;
