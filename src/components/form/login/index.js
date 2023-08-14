import React from "react";
import { Link } from "react-router-dom";
import HgroupComponent from "@/components/hgroup";

const FormLoginComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onLoginSubmit,
}) => {
  return (
    <>
      <HgroupComponent
        attribute={{ level: 3, title: "로그인", invisible: true }}
      />

      <form onSubmit={onLoginSubmit}>
        <fieldset>
          <legend className="invisible">로그인 영역</legend>

          <div>
            <label htmlFor="id">아이디</label>

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
          </div>

          <div>
            <label htmlFor="password">패스워드</label>

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

          {errorMessage && <p>{errorMessage}</p>}

          <button type="submit">
            <span>로그인</span>
          </button>
        </fieldset>
      </form>

      <ul>
        <li>
          <Link to="/">비밀번호 재설정</Link>
        </li>
        <li>
          <Link to="/member/register">회원가입</Link>
        </li>
      </ul>

      <p>SNS 계정으로 간편하게 회원가입하세요.</p>
      <ul>
        <li>
          <Link to="/">네이버 로그인</Link>
        </li>
        <li>
          <Link to="/">카카오 로그인</Link>
        </li>
      </ul>

      <Link to="/">로그인에 문제가 있으신가요?</Link>
    </>
  );
};

export default FormLoginComponent;
