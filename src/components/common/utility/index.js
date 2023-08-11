import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Utility = styled.div``;

const UtilityContainer = (props) => {
  const { attribute } = props;

  const { user, handleLogout } = attribute;

  return (
    <>
      <Utility>
        <ul>
          {user ? (
            <>
              <li>
                <button type="button" onClick={handleLogout}>
                  <span>로그아웃</span>
                </button>
              </li>
              <li>
                <Link to="/beluga/member/login">마이페이지</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/beluga/member/login">로그인</Link>
              </li>
              <li>
                <Link to="/beluga/member/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </Utility>
    </>
  );
};

export default UtilityContainer;
