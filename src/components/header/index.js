import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SlMenu, SlMagnifier, SlBasket } from 'react-icons/sl';
import Utility from '@/components/utility';

const commonStyles = css`
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
    color: #000;
    vertical-align: middle;
  }
`;

const StyledBasket = styled.button`
  ${commonStyles}

  right: 1rem;
`;

const StyledSearch = styled.button`
  ${commonStyles}

  right: 4.9rem;
`;

const StyledHamburger = styled.button`
  ${commonStyles}

  left: 0.8rem;

  /* width: auto;
  padding: 0 2rem;
  border-radius: 0 2rem 2rem 0;
  background-color: #000;

  svg {
    color: #fff;
  } */
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 2.6rem;
  font-family: 'Sunflower', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.6rem;
  color: #000;
  vertical-align: middle;
`;

const StyledLogo = styled.h1`
  display: table-cell;
  vertical-align: middle;
`;

const StyledHeader = styled.header`
  display: table;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;

  ${({ $minimal }) =>
    $minimal
      ? css`
          position: static;
          padding: 4rem 1.2rem;
          text-align: center;

          & + section {
            padding-top: 0;
          }
        `
      : css`
          left: 0;
          height: 5rem;
          padding: 0 1.6rem;
          text-align: center;
        `};
`;

const Header = ({ attributes }) => {
  const { minimal, user, handleLogout } = attributes || {};

  const [visible, setVisible] = useState(false);

  const handleVisible = useCallback(
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
      <StyledLogo>
        <StyledLink to="/">
          <span className="ir_wa">오늘의 식사</span>
        </StyledLink>
      </StyledLogo>

      {!minimal && (
        <>
          <StyledHamburger onClick={handleVisible}>
            <SlMenu size={20} />
            <span className="screen_out">주메뉴 열기</span>
          </StyledHamburger>

          <Utility
            attributes={{
              user,
              visible,
              handleVisible,
              handleLogout
            }}
          />

          {/* <StyledSearch>
            <SlMagnifier size={24} />
            <span className="screen_out">통합 검색창 열기</span>
          </StyledSearch>

          <StyledBasket>
            <SlBasket size={24} />
            <span className="screen_out">장바구니 열기</span>
          </StyledBasket> */}
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
