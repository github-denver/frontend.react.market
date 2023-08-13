import React from "react";
import { Link } from "react-router-dom";

const FormRegisterComponent = ({
  formData,
  errorMessage,
  onFieldChange,
  onRegisterSubmit,
}) => {
  return (
    <form onSubmit={onRegisterSubmit}>
      <fieldset>
        <legend className="invisible">회원가입 영역</legend>

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

        {errorMessage && <p>{errorMessage}</p>}

        <button type="submit">
          <span>회원가입</span>
        </button>

        <Link to="/">홈으로</Link>
      </fieldset>
    </form>
  );
};

export default FormRegisterComponent;
