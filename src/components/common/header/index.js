import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlMenu, SlMagnifier } from "react-icons/sl";

import Hgroup from "@/components/common/hgroup";
import Utility from "@/components/common/utility";
import Navigation from "@/components/common/navigation";

const Header = styled.header``;
const Hamburger = styled.button``;
const Search = styled.button``;

const HeaderContainer = (props) => {
  const { attribute } = props;

  const { user, handleLogout, minimal } = attribute;

  return (
    <>
      <Header>
        <h1>
          <Link to="/">오늘의 집</Link>
        </h1>

        <Hamburger>
          <SlMenu />
          <span>주메뉴 열기</span>
        </Hamburger>

        <Hgroup attribute={{ title: "로그인 영역" }} />
        <Utility attribute={{ user, handleLogout }} />

        <Search>
          <SlMagnifier />
          <span>통합 검색창 열기</span>
        </Search>

        <Navigation />
      </Header>
    </>
  );
};

export default HeaderContainer;
