import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav``;

const NavigationContainer = (props) => {
  return (
    <>
      <Navigation>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/">추천</Link>
          </li>
          <li>
            <Link to="/">집들이</Link>
          </li>
          <li>
            <Link to="/">집사진</Link>
          </li>
          <li>
            <Link to="/">살림 수납</Link>
          </li>
          <li>
            <Link to="/">콜렉터블</Link>
          </li>
          <li>
            <Link to="/">홈스토랑</Link>
          </li>
          <li>
            <Link to="/">핫플레이스</Link>
          </li>
          <li>
            <Link to="/">육아</Link>
          </li>
          <li>
            <Link to="/">플랜테리어</Link>
          </li>
          <li>
            <Link to="/">반려동물</Link>
          </li>
          <li>
            <Link to="/">캠핑</Link>
          </li>
          <li>
            <Link to="/">취미</Link>
          </li>
          <li>
            <Link to="/">3D 인테리어</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
        </ul>
      </Navigation>
    </>
  );
};

export default NavigationContainer;
