import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledListStandard = styled.ul`
  margin: -2rem 0 0 -2rem;
  padding-top: 2rem;
  text-align: center;
`;

const StyledItemStandard = styled.li`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  font-size: 1.2rem;
  color: #424242;
  vertical-align: middle;
`;

const StyledLinkStandard = styled(Link)`
  display: block;
  font-size: 1.2rem;
  color: #424242;
`;

const ListStandardComponent = ({ attribute }) => {
  const { list } = attribute || {};

  return (
    <StyledListStandard>
      {list.map((currentValue, index) => (
        <StyledItemStandard key={index}>
          <StyledLinkStandard to={currentValue.href}>
            {currentValue.text}
          </StyledLinkStandard>
        </StyledItemStandard>
      ))}
    </StyledListStandard>
  );
};

export default ListStandardComponent;
