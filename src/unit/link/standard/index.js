import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.3rem;
  color: #000;
  vertical-align: top;
`;

const HyperLink = ({ className, attributes }) => {
  const { href, text } = attributes || {};

  return (
    <StyledLink to={href} className={className}>
      {text}
    </StyledLink>
  );
};

export default HyperLink;
