import React from "react";
import { Link } from "react-router-dom";
import HgroupComponent from "@/components/hgroup";

const FormRegisterComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onRegisterSubmit,
}) => {
  return (
    <>
      <HgroupComponent
        attribute={{ level: 3, title: "회원가입", invisible: true }}
      />

      <p>SNS 계정으로 간편하게 회원가입하세요.</p>
      <ul>
        <li>
          <Link to="/">네이버 로그인</Link>
        </li>
        <li>
          <Link to="/">카카오 로그인</Link>
        </li>
      </ul>

      <form onSubmit={onRegisterSubmit}>
        <fieldset>
          <legend className="invisible">회원가입 영역</legend>

          <div>
            <label htmlFor="id">아이디</label>
            <p>
              아이디는 알파벳 소·대문자, 숫자, - . _만 입력 가능하고 4자리 이상
              8자리 이하로 입력해 주세요.
            </p>
            <span>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="아이디를 입력해 주세요."
                onChange={onFieldChange}
                value={formData.id}
              />
            </span>
            <button type="button">
              <span>아이디 중복검사</span>
            </button>
          </div>

          <div>
            <label htmlFor="password">패스워드</label>
            <p>
              패스워드는 알파벳 소문자, 숫자, 특수문자를 하나 이상 포함하고
              6자리 이상 12자리 이하로 입력해 주세요.
            </p>

            <span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="패스워드를 입력해 주세요."
                onChange={onFieldChange}
                value={formData.password}
              />
            </span>
          </div>

          <div>
            <label htmlFor="password">패스워드 확인</label>

            <span>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="패스워드를 한 번 더 입력해 주세요."
                onChange={onFieldChange}
                value={formData.passwordConfirm}
              />
            </span>
          </div>

          <div>
            <label htmlFor="name">닉네임</label>
            <p>
              닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리
              이하로 입력해 주세요.
            </p>

            <span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="닉네임을 입력해 주세요."
                onChange={onFieldChange}
                value={formData.name}
              />
            </span>
            <button type="button">
              <span>닉네임 중복검사</span>
            </button>
          </div>

          <div>
            <label htmlFor="email">이메일</label>

            <span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="이메일을 입력해 주세요."
                onChange={onFieldChange}
                value={formData.email}
              />
            </span>
          </div>

          <div>
            <HgroupComponent
              attribute={{
                level: "strong",
                title: "약관 동의",
                invisible: true,
              }}
            />

            <ul>
              <li>
                <input type="checkbox" name="terms" />
                <label htmlFor="terms">전체 동의</label>
                <p>선택항목에 대한 동의 포함</p>
              </li>
              <li>
                <input type="checkbox" name="" />
                <label htmlFor="">
                  이용약관 <em>필수</em>
                </label>
              </li>
              <li>
                <input type="checkbox" name="" />
                <label htmlFor="">
                  개인정보수집 및 이용동의 <em>필수</em>
                </label>
              </li>
              <li>
                <input type="checkbox" name="" />
                <label htmlFor="">
                  개인정보 마케팅 활용 동의 <em>필수</em>
                </label>
              </li>
              <li>
                <input type="checkbox" name="" />
                <label htmlFor="">
                  이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 <span>선택</span>
                </label>
              </li>
            </ul>
            <p>필수 항목에 동의해 주세요.</p>
          </div>

          {errorMessage && <p>{errorMessage}</p>}

          <button type="submit">
            <span>회원가입</span>
          </button>

          <Link to="/">홈으로</Link>
        </fieldset>
      </form>

      <p>이미 아이디가 있으신가요?</p>
      <Link to="/member/login">로그인</Link>
    </>
  );
};

export default FormRegisterComponent;
