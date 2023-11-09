import React from 'react';
import { LuBarChart } from 'react-icons/lu';
import { TfiTimer } from 'react-icons/tfi';
import styled from 'styled-components';

const StyledText = styled.span`
  display: inline-block;
  margin-left: 0.4rem;
  vertical-align: middle;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin-left: 0.8rem;
  font-size: 1.3rem;
  vertical-align: middle;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const StyledList = styled.ul`
  margin: 1.2rem 0 0 -0.8rem;
  font-size: 0;
`;

const StyledSubject = styled.strong`
  font-weight: 500;
  font-size: 1.7rem;
`;

const StyledBoardHeader = styled.div`
  padding: 1.6rem 1.2rem;
`;

const BoardHeader = ({ className, attributes }) => {
  const { read } = attributes || {};

  return (
    <StyledBoardHeader className={className}>
      <StyledSubject>{read.subject}</StyledSubject>

      <StyledList>
        <StyledItem>
          <span className="screen_out">난이도</span>
          <LuBarChart size={14} />
          <StyledText>{read.level}</StyledText>
        </StyledItem>
        <StyledItem>
          <span className="screen_out">조리 시간</span>
          <TfiTimer size={14} />
          <StyledText>{read.time}</StyledText>
        </StyledItem>
      </StyledList>
    </StyledBoardHeader>
  );
};

export default BoardHeader;
