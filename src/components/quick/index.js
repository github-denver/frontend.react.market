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

const StyledQuick = styled.div`
  /*
  margin: 2rem;

  .list_quick {
    margin: -1.2rem 0 0 -1.2rem;
  }

  .list_quick .item_quick {
    display: inline-block;
    width: 20%;
    margin-top: 1.2rem;
    padding-left: 1.2rem;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
  }

  .list_quick .link_quick {
    display: block;
  }

  .list_quick .box_quick {
    display: block;
    position: relative;
    padding-top: 100%;
    border-radius: 0.8rem;
    background-color: #f5f5f5;
  }

  .list_quick .box_quick svg {
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

  .list_quick .box_quick + .text_quick {
    margin-top: 0.6rem;
  }

  .list_quick .text_quick {
    display: block;
    font-size: 1.1rem;
    letter-spacing: -0.125rem;
  }
  */
`;

const QuickComponent = () => {
  return (
    <StyledQuick>
      <ul className="list_quick">
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcShop size={36} />
            </span>
            <span className="text_quick">쇼핑하기</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcNegativeDynamic size={36} />
            </span>
            <span className="text_quick">오!세일</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcAlarmClock size={36} />
            </span>
            <span className="text_quick">오늘의 딜</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcPlanner size={36} />
            </span>
            <span className="text_quick">오늘의 발견</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcPaid size={36} />
            </span>
            <span className="text_quick">장보기</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcHome size={36} />
            </span>
            <span className="text_quick">집들이</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcLike size={36} />
            </span>
            <span className="text_quick">취향의 발견</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcFlashOn size={36} />
            </span>
            <span className="text_quick">빠른 배송</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcShipped size={36} />
            </span>
            <span className="text_quick">쉬운 이사</span>
          </Link>
        </li>
        <li className="item_quick">
          <Link to="/" className="link_quick">
            <span className="box_quick">
              <FcProcess size={36} />
            </span>
            <span className="text_quick">리모델링</span>
          </Link>
        </li>
      </ul>
    </StyledQuick>
  );
};

export default QuickComponent;
