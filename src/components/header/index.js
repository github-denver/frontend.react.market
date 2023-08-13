import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlMenu, SlMagnifier } from "react-icons/sl";

import HgroupComponent from "@/components/hgroup";
import UtilityComponent from "@/components/utility";
import NavigationComponent from "@/components/navigation";

const StyledHeader = styled.header``;
const StyledHamburger = styled.button``;
const StyledSearch = styled.button``;

const HeaderComponent = ({ attribute }) => {
  const { minimal, user, handleLogoutClick } = attribute;

  return (
    <>
      <StyledHeader>
        <h1>
          <Link to="/">오늘의 집</Link>

          {minimal && (
            <>
              <span>X</span>
              <Link to={{ pathname: `https://naver.com` }} target="_blank">
                덴버월드
              </Link>
            </>
          )}
        </h1>

        {minimal && (
          <>
            <div>
              <em>
                이 사이트는 덴버월드 사이트의 아이디와 패스워드가 공유됩니다.
              </em>
            </div>
          </>
        )}

        {!minimal && (
          <>
            <StyledHamburger>
              <SlMenu />
              <span>주메뉴 열기</span>
            </StyledHamburger>

            <HgroupComponent attribute={{ title: "로그인 영역" }} />
            <UtilityComponent attribute={{ user, handleLogoutClick }} />

            <StyledSearch>
              <SlMagnifier />
              <span>통합 검색창 열기</span>
            </StyledSearch>

            <NavigationComponent />
          </>
        )}
      </StyledHeader>
    </>
  );
};

export default HeaderComponent;
