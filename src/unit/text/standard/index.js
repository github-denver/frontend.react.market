import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  padding: 1.2rem;
  font-size: 1.4rem;

  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }
`;

const TextStandardUnit = ({ attribute }) => {
  const { className, text } = attribute || {};

  return (
    <StyledText className={className}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </StyledText>
  );
};

export default TextStandardUnit;
