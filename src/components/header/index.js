import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlMenu, SlMagnifier, SlBasket } from "react-icons/sl";
import UtilityComponent from "@/components/utility";

const StyledHeader = styled.header`
  display: table;
  position: relative;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.$minimal
      ? css`
          padding: 4rem 1.2rem;
          text-align: center;
        `
      : css`
          left: 0;
          height: 5rem;
          padding: 0 1.6rem;
          border-bottom: 0.1rem solid #eee;
          text-align: center;
        `};
`;

const StyledLogotype = styled.h1`
  display: table-cell;
  vertical-align: middle;
`;

const StyledLogotypeLink = styled(Link)`
  display: inline-block;
  height: 2.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  vertical-align: middle;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 50%;

  ${(props) => {
    if (props.$direction === "basket") {
      return `
        right: 1rem;
      `;
    } else if (props.$direction === "search") {
      return `
        right: 4.9rem;
      `;
    } else if (props.$direction === "hamburger") {
      return `
        left: 1rem;
      `;
    }
  }}
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
`;

const HeaderComponent = ({ attribute }) => {
  const { minimal, user, handleLogoutClick } = attribute;

  const [visible, setVisible] = useState(false);

  const handleUtilityVisible = useCallback(
    (event) => {
      event.preventDefault();

      if (!visible) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    [visible]
  );

  return (
    <StyledHeader $minimal={minimal}>
      <StyledLogotype>
        <StyledLogotypeLink to="/">
          <span className="ir_wa">오늘의 식탁</span>
        </StyledLogotypeLink>

        {minimal && <></>}
      </StyledLogotype>

      {minimal && <></>}

      {!minimal && (
        <>
          <StyledButton $direction="hamburger" onClick={handleUtilityVisible}>
            <SlMenu size={24} />
            <span className="screen_out">주메뉴 열기</span>
          </StyledButton>

          <UtilityComponent
            attribute={{
              user,
              handleLogoutClick,
              visible,
              handleUtilityVisible,
            }}
          />

          <StyledButton $direction="search">
            <SlMagnifier size={24} />
            <span className="screen_out">통합 검색창 열기</span>
          </StyledButton>

          <StyledButton $direction="basket">
            <SlBasket size={24} />
            <span className="screen_out">장바구니 열기</span>
          </StyledButton>
        </>
      )}
    </StyledHeader>
  );
};

export default HeaderComponent;
