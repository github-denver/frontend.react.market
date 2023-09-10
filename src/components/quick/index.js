import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FcShop,
  FcNegativeDynamic,
  FcAlarmClock,
  FcPlanner,
  FcPaid,
  FcHome,
  FcLike,
  FcFlashOn,
  FcShipped,
  FcProcess,
} from "react-icons/fc";

const StyledBoxQuick = styled.div`
  display: block;
  position: relative;
  padding-top: 100%;
  border-radius: 2rem;
  background-color: #f5f5f5;

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

  & + .text_local {
    margin-top: 0.6rem;
  }
`;

const StyledLinkQuick = styled(Link)`
  display: block;

  .text_local {
    display: block;
    font-size: 1.1rem;
    letter-spacing: -0.125rem;
  }
`;

const StyledItemQuick = styled.li`
  display: inline-block;
  width: 20%;
  margin-top: 1.2rem;
  padding-left: 1.2rem;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
`;

const StyledListQuick = styled.ul`
  margin: -1.2rem 0 0 -1.2rem;
`;

const StyledQuick = styled.div`
  margin: 2rem;
`;

const QuickComponent = () => {
  return (
    <StyledQuick>
      <StyledListQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcShop size={36} />
            </StyledBoxQuick>
            <span className="text_local">쇼핑하기</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcNegativeDynamic size={36} />
            </StyledBoxQuick>
            <span className="text_local">오!세일</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcAlarmClock size={36} />
            </StyledBoxQuick>
            <span className="text_local">오늘의 딜</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcPlanner size={36} />
            </StyledBoxQuick>
            <span className="text_local">오늘의 발견</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcPaid size={36} />
            </StyledBoxQuick>
            <span className="text_local">장보기</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        {/* <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcHome size={36} />
            </StyledBoxQuick>
            <span className="text_local">집들이</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcLike size={36} />
            </StyledBoxQuick>
            <span className="text_local">취향의 발견</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcFlashOn size={36} />
            </StyledBoxQuick>
            <span className="text_local">빠른 배송</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcShipped size={36} />
            </StyledBoxQuick>
            <span className="text_local">쉬운 이사</span>
          </StyledLinkQuick>
        </StyledItemQuick>
        <StyledItemQuick>
          <StyledLinkQuick to="/">
            <StyledBoxQuick>
              <FcProcess size={36} />
            </StyledBoxQuick>
            <span className="text_local">리모델링</span>
          </StyledLinkQuick>
        </StyledItemQuick> */}
      </StyledListQuick>
    </StyledQuick>
  );
};

export default QuickComponent;
