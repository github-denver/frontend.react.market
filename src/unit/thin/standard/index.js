import React from 'react';
import styled from 'styled-components';

const StyledThin = styled.hr`
  margin: 0;
  padding: 0;
  height: 0.1rem;
  border: 0 none;
  background-color: #eee;
`;

const Thin = ({ className, attributes }) => {
  return <StyledThin className={className} />;
};

export default Thin;
