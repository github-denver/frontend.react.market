import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcShop, FcNegativeDynamic, FcAlarmClock, FcPlanner, FcPaid, FcHome, FcLike, FcFlashOn, FcShipped, FcProcess } from 'react-icons/fc';

const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0.6rem;
  border: 0.2rem solid #000;
  border-radius: 100%;
  box-sizing: border-box;

  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const StyledBox = styled.div`
  display: block;
  position: relative;
  padding-top: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  border: 0.1rem solid #ddd;
  border-radius: 1.55rem;

  .text_local {
    display: block;
    padding: 0.4rem 0.2rem;
    font-size: 1.3rem;
    color: #666;
    letter-spacing: -0.125rem;
  }
`;

const StyledItem = styled.li`
  display: inline-block;
  width: 20%;
  margin-top: 1.2rem;
  padding-left: 1.2rem;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
`;

const StyledList = styled.ul`
  margin: -1.2rem 0 0 -1.2rem;
`;

const StyledQuick = styled.div`
  margin: 0 1.6rem;
`;

const Quick = ({ attributes }) => {
  const {} = attributes || {};

  return (
    <StyledQuick>
      <StyledList>
        <StyledItem>
          <StyledLink to="/board/stew/list/1">
            <span className="text_local">찌개</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/noodle/list/1">
            <span className="text_local">면</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/curry/list/1">
            <span className="text_local">카레</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/baking/list/1">
            <span className="text_local">스테이크</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/soup/list/1">
            <span className="text_local">수프</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/salad/list/1">
            <span className="text_local">샐러드</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/baking/list/1">
            <span className="text_local">빵</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/burger/list/1">
            <span className="text_local">햄버거</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/baking/list/1">
            <span className="text_local">피자</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/cake/list/1">
            <span className="text_local">케이크</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/dessert/list/1">
            <span className="text_local">디저트</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/board/drink/list/1">
            <span className="text_local">주스</span>
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledQuick>
  );
};

export default Quick;
