import React from 'react';
import styled from 'styled-components';

const StyledInner = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const StyledOuter = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;

const Cell = ({ children, className }) => {
  return (
    <StyledOuter className={className}>
      <StyledInner>{children}</StyledInner>
    </StyledOuter>
  );
};

export default Cell;
