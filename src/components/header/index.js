import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SlMenu } from 'react-icons/sl';

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
    color: #fe4362;
    vertical-align: middle;
  }
`;

const StyledHamburger = styled.button`
  ${commonStyles}

  left: 1rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 2.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  color: #fe4362;
  line-height: 2.6rem;
  vertical-align: middle;
`;

const StyledHeader = styled.header`
  display: table;
  position: relative;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;

  h1 {
    display: table-cell;
    vertical-align: middle;
  }

  ${({ $minimal }) =>
    $minimal
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

const Header = ({ attributes }) => {
  const { minimal, user, visible, onVisible, onLogout } = attributes || {};

  return (
    <StyledHeader $minimal={minimal}>
      <h1>
        <StyledLink to="/">
          <span className="ir_wa">hey&rdquo; bread</span>
        </StyledLink>
      </h1>

      {!minimal && (
        <>
          <StyledHamburger onClick={onVisible}>
            <SlMenu size={24} />
            <span className="screen_out">주메뉴 열기</span>
          </StyledHamburger>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
