import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlMenu, SlMagnifier, SlBasket } from "react-icons/sl";
import UtilityComponent from "@/components/utility";

const StyledHeader = styled.header`
  display: table;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 5rem;
  padding: 0 1.6rem;
  border-bottom: 0.1rem solid #eee;
  box-sizing: border-box;
  text-align: center;

  .title_common {
    display: table-cell;
    vertical-align: middle;
  }
  .title_common .link_common {
    display: inline-block;
    width: 7.4rem;
    height: 2.6rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    vertical-align: middle;
  }

  .button_utility {
    position: absolute;
    top: 50%;
    z-index: 1;
    width: 3.6rem;
    height: 3.6rem;
    margin-top: -1.8rem;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;

    svg {
      display: inline-block;
      vertical-align: middle;
    }
  }
`;
const StyledHamburger = styled.button`
  left: 1rem;
`;
const StyledSearch = styled.button`
  right: 4.9rem;
`;
const StyledBasket = styled.button`
  right: 1rem;
`;

const HeaderComponent = ({ attribute }) => {
  const { minimal, user, handleLogoutClick } = attribute;

  return (
    <>
      <StyledHeader>
        <h1 className="title_common">
          <Link to="/" className="link_common">
            <span className="ir_wa">오늘의 집</span>
          </Link>

          {minimal && (
            <>
              {/* <span>X</span>
              <Link to={{ pathname: `https://naver.com` }} target="_blank">
                덴버월드
              </Link> */}
            </>
          )}
        </h1>

        {minimal && (
          <>
            {/* <div>
              <em>
                이 사이트는 덴버월드 사이트의 아이디와 패스워드가 공유됩니다.
              </em>
            </div> */}
          </>
        )}

        {!minimal && (
          <>
            <StyledHamburger className="button_utility  ">
              <SlMenu size={24} />
              <span className="screen_out">주메뉴 열기</span>
            </StyledHamburger>
            {/* <UtilityComponent attribute={{ user, handleLogoutClick }} /> */}

            <StyledSearch className="button_utility  ">
              <SlMagnifier size={24} />
              <span className="screen_out">통합 검색창 열기</span>
            </StyledSearch>

            <StyledBasket className="button_utility  ">
              <SlBasket size={24} />
              <span className="screen_out">장바구니 열기</span>
            </StyledBasket>
          </>
        )}
      </StyledHeader>
    </>
  );
};

export default HeaderComponent;
