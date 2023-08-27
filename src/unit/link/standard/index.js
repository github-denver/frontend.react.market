import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledStandardLink = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  color: #999;
  vertical-align: top;
`;

const LinkStandardUnit = ({ attribute }) => {
  const { href, className, text } = attribute || {};

  return (
    <StyledStandardLink to={href} className={className}>
      {text}
    </StyledStandardLink>
  );
};

export default LinkStandardUnit;
