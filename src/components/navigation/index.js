import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  position: relative;

  &.active {
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
            border-radius: 0.8rem;

            &:hover,
            &:focus {
            }
          }
        `
      : css`
          position: fixed;
          top: 5rem;
          right: 0;
          left: 0;
          z-index: 10;
          border-bottom: 0.1rem solid #eee;
          background-color: #fff;

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

            &:after {
              display: none;
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
              border-bottom: 0.2rem solid #937062;
              content: '';
            }

            &.active {
              color: #937062;

              &:after {
                display: block;
              }
            }
          }
        `}
`;

const Navigation = ({ className, attributes }) => {
  const { direction } = attributes || {};

  return (
    <StyledNavigation className={className} direction={direction}>
      <StyledInner>
        <StyledList>
          <StyledItem>
            <StyledLink to="/">홈</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/stew/list/1">찌개</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/noodle/list/1">면</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/curry/list/1">카레</StyledLink>
          </StyledItem>

          {/* <StyledItem>
            <StyledLink to="/board/steak/list/1">스테이크</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/soup/list/1">수프</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/salad/list/1">샐러드</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/baking/list/1">빵</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/burger/list/1">햄버거</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/pizza/list/1">피자</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/cake/list/1">케이크</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/dessert/list/1">디저트</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/drink/list/1">음료수</StyledLink>
          </StyledItem> */}
        </StyledList>
      </StyledInner>
    </StyledNavigation>
  );
};

export default Navigation;
