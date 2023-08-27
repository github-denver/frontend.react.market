import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledItemTerms = styled.li`
  margin-top: 1.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListTerms = styled.ul`
  ${(props) =>
    props.$firstUnit &&
    css`
      margin-top: 1.4rem;
      padding-top: 1.4rem;
      border-top: 0.1rem solid #bdbdbd;
    `}
`;

const StyledInnerTerms = styled.div`
  padding: 1.4rem;
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.4rem;
`;

const StyledTerms = styled.div``;

const ListTermsComponent = ({ children, attribute }) => {
  const { className, firstUnit, secondUnit } = attribute || {};

  return (
    <StyledTerms className={className}>
      {children}

      <StyledInnerTerms>
        {firstUnit}

        <StyledListTerms $firstUnit={firstUnit}>
          {secondUnit.map((currentValue, index) => (
            <StyledItemTerms key={index}>{currentValue}</StyledItemTerms>
          ))}
        </StyledListTerms>
      </StyledInnerTerms>
    </StyledTerms>
  );
};

export default ListTermsComponent;
