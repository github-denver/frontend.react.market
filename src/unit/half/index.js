import React from "react";
import styled from "styled-components";

const StyledInnerHalf = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
  vertical-align: middle;

  &:first-child {
    text-align: left;
  }
`;

const StyledOuterHalf = styled.div`
  width: 100%;
  font-size: 0;
`;

const HalfUnit = ({ attribute }) => {
  const { firstUnit, secondUnit } = attribute || {};

  return (
    <StyledOuterHalf>
      <StyledInnerHalf>{firstUnit}</StyledInnerHalf>
      <StyledInnerHalf>{secondUnit}</StyledInnerHalf>
    </StyledOuterHalf>
  );
};

export default HalfUnit;
