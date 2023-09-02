import React from "react";
import styled from "styled-components";

const StyledStandardText = styled.p`
  padding: 1.2rem;
  font-size: 1.4rem;

  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }
`;

const TextStandardUnit = ({ children, attribute }) => {
  const { className, text } = attribute || {};

  const __html = `${text}`;

  return (
    <StyledStandardText
      className={className}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

export default TextStandardUnit;
