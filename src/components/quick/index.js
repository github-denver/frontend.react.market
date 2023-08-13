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

const StyledQuick = styled.div``;

const QuickComponent = () => {
  return (
    <>
      <StyledQuick>
        <ul>
          <li>
            <Link to="/">
              <FcShop size={24} />
              <span>쇼핑하기</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcNegativeDynamic size={24} />
              <span>오!세일</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcAlarmClock size={24} />
              <span>오늘의 딜</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcPlanner size={24} />
              <span>오늘의 발견</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcPaid size={24} />
              <span>장보기</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcHome size={24} />
              <span>집들이</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcLike size={24} />
              <span>취향의 발견</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcFlashOn size={24} />
              <span>빠른 배송</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcShipped size={24} />
              <span>쉬운 이사</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcProcess size={24} />
              <span>리모델링</span>
            </Link>
          </li>
        </ul>
      </StyledQuick>
    </>
  );
};

export default QuickComponent;
