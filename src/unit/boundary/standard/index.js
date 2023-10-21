import React from 'react';
import styled from 'styled-components';

const StyledBoundary = styled.hr`
  margin: 0;
  padding: 0;
  height: 1rem;
  border: 0 none;
  background-color: #fcf7f4;
`;

const Boundary = ({ className, attributes }) => {
  return <StyledBoundary className={className} />;
};

export default Boundary;
