import React from "react";
import styled from "styled-components";
import HgroupComponent from "@/components/hgroup";
import DimmedUnit from "@/unit/dimmed";
import ButtonStandardUnit from "@/unit/button/standard";
import SocialComponent from "@/components/social";
import LinkStandardUnit from "@/unit/link/standard";
import FieldUnit from "@/unit/field";
import ListStandardComponent from "@/components/list/standard";
import CheckboxStandardUnit from "@/unit/checkbox/standard";
import ListTermsComponent from "@/components/list/terms";

const StyledRegister = styled.div`
  max-width: 31.2rem;
  margin: -1.2rem auto 0;
  text-align: center;

  .button_register {
    margin-top: 2rem;
  }

  .group_social {
    margin-bottom: 3.6rem;
  }

  .link_standard {
    margin-top: 2rem;
  }

  .button_email_confirm {
    margin-top: 1.2rem;
  }

  .group_terms {
    margin-top: 2.4rem;
  }
`;

const RegisterComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onRegisterSubmit,
  onIdCheck,
  onNameCheck,
  onEmailCheck,
  onLayerClose,
  onSendEmail,
}) => {
  return (
    <StyledRegister>
      <HgroupComponent
        attribute={{ level: 3, title: "회원가입", invisible: true }}
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

      <form onSubmit={onRegisterSubmit}>
        <fieldset>
          <legend className="screen_out">회원가입 영역</legend>

          <FieldUnit
            attribute={{
              className: "group_field",
              standard: true,
              confirm: true,
              label: {
                htmlFor: "id",
                text: "아이디",
              },
              guideMessage: (
                <p className="text_field">
                  아이디는 알파벳 소·대문자, 숫자, - . _만 입력 가능하고 4자리
                  이상 8자리 이하로 입력해 주세요.
                </p>
              ),
              input: {
                type: "text",
                name: "id",
                id: "id",
                placeholder: "아이디를 입력해 주세요.",
                event: onFieldChange,
                value: formData.id,
              },
              confirmButton: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                    event: onIdCheck,
                    confirm: true,
                  }}
                >
                  <span className="text_local">
                    <span className="screen_out">아이디</span> 중복검사
                  </span>
                </ButtonStandardUnit>
              ),
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
                value: formData.name,
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
                value: formData.email,
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

          <ListTermsComponent
            attribute={{
              className: "group_terms",
              firstUnit: (
                <CheckboxStandardUnit
                  attribute={{
                    label: {
                      htmlFor: "all",
                      text: "전체 동의",
                      message: "선택항목에 대한 동의 포함",
                    },
                    input: {
                      name: "terms",
                      id: "terms",
                    },
                  }}
                />
              ),
              secondUnit: [
                <CheckboxStandardUnit
                  attribute={{
                    label: {
                      htmlFor: "a1",
                      text: "이용약관",
                      required: "(필수)",
                    },
                    input: {
                      name: "terms",
                      id: "terms",
                    },
                  }}
                />,
                <CheckboxStandardUnit
                  attribute={{
                    label: {
                      htmlFor: "a2",
                      text: "개인정보수집 및 이용동의",
                      required: "(필수)",
                    },
                    input: {
                      name: "terms",
                      id: "terms",
                    },
                  }}
                />,
                <CheckboxStandardUnit
                  attribute={{
                    label: {
                      htmlFor: "a3",
                      text: "개인정보 마케팅 활용 동의",
                      required: "(필수)",
                    },
                    input: {
                      name: "terms",
                      id: "terms",
                    },
                  }}
                />,
                <CheckboxStandardUnit
                  attribute={{
                    label: {
                      htmlFor: "a4",
                      text: "이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신",
                    },
                    input: {
                      name: "terms",
                      id: "terms",
                    },
                  }}
                />,
              ],
            }}
          >
            <HgroupComponent
              attribute={{
                level: "strong",
                title: "약관 동의",
                size: "small",
              }}
            />
          </ListTermsComponent>

          {/* <p>필수 항목에 동의해 주세요.</p> */}

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
              className: "button_register",
              fill: true,
            }}
          >
            <span className="text_local">회원가입</span>
          </ButtonStandardUnit>
        </fieldset>
      </form>

      <LinkStandardUnit
        attribute={{
          className: "link_standard",
          href: "/member/login",
          text: "이미 아이디가 있으신가요?",
        }}
      />

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
    </StyledRegister>
  );
};

export default RegisterComponent;
