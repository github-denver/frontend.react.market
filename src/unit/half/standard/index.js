import React from 'react';
import styled from 'styled-components';

const StyledInner = styled.div`
  display: inline-block;
  width: 50%;
  padding-left: 1rem;
  box-sizing: border-box;
  text-align: right;
  vertical-align: middle;

  &:first-child {
    text-align: left;
  }
`;

const StyledOuter = styled.div`
  margin-left: -1rem;
  font-size: 0;
`;

const Half = ({ className, attributes }) => {
  const { styles, first, second } = attributes || {};

  return (
    <StyledOuter className={className}>
      <StyledInner style={{ ...styles?.first }}>{first}</StyledInner>
      <StyledInner style={{ ...styles?.second }}>{second}</StyledInner>
    </StyledOuter>
  );
};

export default Half;
