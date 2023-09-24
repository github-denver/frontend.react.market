import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcShop, FcNegativeDynamic, FcAlarmClock, FcPlanner, FcPaid, FcHome, FcLike, FcFlashOn, FcShipped, FcProcess } from 'react-icons/fc';

const StyledBox = styled.div`
  display: block;
  position: relative;
  padding-top: 100%;
  border-radius: 0.8rem;
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

const StyledLink = styled(Link)`
  display: block;

  .text_local {
    display: block;
    font-size: 1.1rem;
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
  margin: 2rem;
`;

const Quick = ({ attributes }) => {
  const { href } = attributes || {};

  return (
    <StyledQuick>
      <StyledList>
        <StyledItem>
          <StyledLink to={href}>
            <StyledBox>
              <FcNegativeDynamic size={36} />
            </StyledBox>

            <span className="text_local">베이킹</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to={href}>
            <StyledBox>
              <FcNegativeDynamic size={36} />
            </StyledBox>

            <span className="text_local">간식</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to={href}>
            <StyledBox>
              <FcNegativeDynamic size={36} />
            </StyledBox>

            <span className="text_local">채식</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to={href}>
            <StyledBox>
              <FcNegativeDynamic size={36} />
            </StyledBox>

            <span className="text_local">도시락</span>
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to={href}>
            <StyledBox>
              <FcNegativeDynamic size={36} />
            </StyledBox>

            <span className="text_local">초대요리</span>
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledQuick>
  );
};

export default Quick;
