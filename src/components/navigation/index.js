import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { useLocation, useParams } from 'react-router-dom';

const StyledLink = styled(Link)`
  position: relative;

  &.active,
  &.current {
  }
`;

const StyledItem = styled.li``;

const StyledList = styled.ul``;

const StyledInner = styled.div``;

const StyledNavigation = styled.nav`
  background-color: #fff;

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-bottom: 0.1rem solid #f1f1f1;
    content: '';
  }

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

          ${StyledInner} {
            overflow: auto;
          }

          ${StyledList} {
            padding: 0 2rem;
            white-space: nowrap;
          }

          ${StyledItem} {
            display: table-cell;
            width: 36rem;
            box-sizing: border-box;
            text-align: center;
            vertical-align: middle;

            &:last-child {
              padding-right: 2rem;
            }
          }

          ${StyledLink} {
            display: block;
            padding: 0.8rem 1.6rem;
            font-size: 1.4rem;
            color: #666;

            &:after {
              display: none;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 10;
              border-bottom: 0.4rem solid #f66f66;
              // border-bottom: 0.4rem solid #f66f66;
              content: '';
            }

            &.active,
            &.current {
              font-weight: 500;
              color: #f66f66;
              // color: #f66f66;

              &:after {
                display: block;
              }
            }
          }
        `}
`;

const Navigation = ({ className, attributes }) => {
  const { direction } = attributes || {};

  const { category, number } = useParams();

  let location = useLocation();

  return (
    <StyledNavigation className={className} direction={direction}>
      <StyledInner>
        <StyledList>
          <StyledItem>
            <StyledLink to="/" className={typeof category === 'undefined' && 'active'}>
              홈
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/stew/list/1" className={category === 'stew' && 'active'}>
              찌개
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/noodle/list/1" className={category === 'noodle' && 'active'}>
              면
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/curry/list/1" className={category === 'curry' && 'active'}>
              카레
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/steak/list/1" className={category === 'steak' && 'active'}>
              스테이크
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/soup/list/1" className={category === 'soup' && 'active'}>
              수프
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/salad/list/1" className={category === 'salad' && 'active'}>
              샐러드
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/baking/list/1" className={category === 'baking' && 'active'}>
              빵
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/burger/list/1" className={category === 'burger' && 'active'}>
              햄버거
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/pizza/list/1" className={category === 'pizza' && 'active'}>
              피자
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/cake/list/1" className={category === 'cake' && 'active'}>
              케이크
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/dessert/list/1" className={category === 'dessert' && 'active'}>
              디저트
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="/board/drink/list/1" className={category === 'drink' && 'active'}>
              음료수
            </StyledLink>
          </StyledItem>
        </StyledList>
      </StyledInner>
    </StyledNavigation>
  );
};

export default Navigation;
