import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PaperLoginWrapper = ({
  formData,
  errorMessage,
  onFieldChange,
  onLoginSubmit,
}) => {
  return (
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
  );
};

export default PaperLoginWrapper;
