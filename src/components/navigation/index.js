import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigation = styled.nav`
  ${({ $first }) =>
    $first &&
    css`
      border-top: 0 none;
    `}
  border-bottom: 0.1rem solid #eee;

  .inner_navigation {
    overflow: auto;
  }

  ul {
    /* display: table; */
    /* margin-left: -0.4rem; */
    padding-left: 1.6rem;
    white-space: nowrap;
  }
  li {
    display: table-cell;
    width: 36rem;
    /* padding-left: 0.4rem; */
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    /* white-space: nowrap; */
  }
  li:last-child {
    padding-right: 1.6rem;
  }
  a {
    display: block;
    padding: 0.95rem 0.8rem;
    font-size: 1.4rem;
  }
`;

const NavigationComponent = () => {
  return (
    <>
      <StyledNavigation $first>
        <div className="inner_navigation">
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
        </div>
        {/* inner_navigation */}
      </StyledNavigation>
    </>
  );
};

export default NavigationComponent;
