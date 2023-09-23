import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  &.active {
    color: #35c5f0;
  }
`;

const StyledItem = styled.li``;

const StyledList = styled.ul``;

const StyledInner = styled.div``;

const StyledNavigation = styled.nav`
  ${({ direction }) =>
    direction === 'vertical'
      ? css`
          ${StyledList} {
            margin-top: 0.4rem;
          }

          ${StyledItem} {
            margin-top: 0.4rem;

            &:first-child {
              margin-top: 0;
            }
          }

          ${StyledLink} {
            display: block;
            padding: 0.95rem 4rem 0.95rem 4.6rem;
            font-size: 1.4rem;
            border-radius: 0.4rem;

            &:hover,
            &:focus {
            }
          }
        `
      : css`
          border-bottom: 0.1rem solid #eee;

          ${StyledInner} {
            overflow: auto;
          }

          ${StyledList} {
            padding-left: 1.6rem;
            white-space: nowrap;
          }

          ${StyledItem} {
            display: table-cell;
            width: 36rem;
            box-sizing: border-box;
            text-align: center;
            vertical-align: middle;

            &:last-child {
              padding-right: 1.6rem;
            }
          }

          ${StyledLink} {
            display: block;
            padding: 0.95rem 0.8rem;
            font-weight: 500;
            font-size: 1.4rem;
          }
        `}
`;

const Navigation = ({ attributes }) => {
  const { direction } = attributes || {};

  return (
    <StyledNavigation direction={direction}>
      <StyledInner>
        <StyledList>
          <StyledItem>
            <StyledLink to="/">홈</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/talk/list/1">초보자</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledInner>
    </StyledNavigation>
  );
};

export default Navigation;
