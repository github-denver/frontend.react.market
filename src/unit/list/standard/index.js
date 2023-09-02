import React from "react";
import styled from "styled-components";

const StyledStandardItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 1.6rem;
  padding-left: 1.6rem;
  box-sizing: border-box;
  vertical-align: middle;
`;

const StyledStandardList = styled.ul`
  margin: -3.2rem 0 0 -1.6rem;
  padding: 1.6rem;
`;

const ListStandardUnit = ({ children, attribute }) => {
  const { list } = attribute || {};

  return (
    <StyledStandardList>
      {list.map((currentValue, index) => (
        <StyledStandardItem key={index}>{currentValue}</StyledStandardItem>
      ))}
    </StyledStandardList>
  );
};

export default ListStandardUnit;
