import React from 'react';
import styled from 'styled-components';

const StyledListRecipe = styled.div`
  padding-top: 1.6rem;
`;

const ListRecipe = ({ className, children, attributes }) => {
  // const {} = attributes || {};

  return <StyledListRecipe className={className}>{children}</StyledListRecipe>;
};

export default ListRecipe;
