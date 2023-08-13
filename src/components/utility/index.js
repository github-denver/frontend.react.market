import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledUtility = styled.div``;

const UtilityComponent = ({ attribute }) => {
  const { user, handleLogoutClick } = attribute;

  return (
    <>
      <StyledUtility>
        <ul>
          {user ? (
            <>
              <li>
                <button type="button" onClick={handleLogoutClick}>
                  <span>로그아웃</span>
                </button>
              </li>
              <li>
                <Link to="/member/login">마이페이지</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/member/login">로그인</Link>
              </li>
              <li>
                <Link to="/member/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </StyledUtility>
    </>
  );
};

export default UtilityComponent;
