import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkNavigation = styled(Link)``;

const StyledItemNavigation = styled.li``;

const StyledListNavigation = styled.ul``;

const StyledInnerNavigation = styled.div``;

const StyledNavigation = styled.nav`
  ${(props) =>
    props.$type === "vertical"
      ? css`
          ${StyledListNavigation} {
            margin-top: 0.4rem;
          }

          ${StyledItemNavigation} {
            margin-top: 0.4rem;

            &:first-child {
              margin-top: 0;
            }
          }

          ${StyledLinkNavigation} {
            display: block;
            padding: 0.95rem 4rem 0.95rem 4.6rem;
            font-size: 1.4rem;
            border-radius: 0.4rem;

            &:hover,
            &:focus {
              /* font-weight: 700; */
              /* background-color: #f7f9fa; */
            }
          }
        `
      : css`
          /* border-top: 0.1rem solid #eee; */
          border-bottom: 0.1rem solid #eee;

          ${StyledInnerNavigation} {
            overflow: auto;
          }

          ${StyledListNavigation} {
            padding-left: 1.6rem;
            white-space: nowrap;
          }

          ${StyledItemNavigation} {
            display: table-cell;
            width: 36rem;
            box-sizing: border-box;
            text-align: center;
            vertical-align: middle;

            &:last-child {
              padding-right: 1.6rem;
            }
          }

          ${StyledLinkNavigation} {
            display: block;
            padding: 0.95rem 0.8rem;
            font-size: 1.4rem;
          }
        `}
`;

const NavigationComponent = ({ attribute = {} }) => {
  const { type } = attribute;

  return (
    <StyledNavigation $type={type}>
      <StyledInnerNavigation>
        <StyledListNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">홈</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">추천</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">집들이</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">집사진</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">살림 수납</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">콜렉터블</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">홈스토랑</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">핫플레이스</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">육아</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">플랜테리어</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">반려동물</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">캠핑</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">취미</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">3D 인테리어</StyledLinkNavigation>
          </StyledItemNavigation>
          <StyledItemNavigation>
            <StyledLinkNavigation to="/">이벤트</StyledLinkNavigation>
          </StyledItemNavigation>
        </StyledListNavigation>
      </StyledInnerNavigation>
    </StyledNavigation>
  );
};

export default NavigationComponent;
