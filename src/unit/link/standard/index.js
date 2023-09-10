import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  color: #999;
  vertical-align: top;
`;

const LinkStandardUnit = ({ attribute }) => {
  const { className, href, text } = attribute || {};

  return (
    <StyledLink to={href} className={className}>
      {text}
    </StyledLink>
  );
};

export default LinkStandardUnit;
