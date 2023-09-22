import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  padding: 1.2rem;
  font-size: 1.4rem;

  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }
`;

const Text = ({ className, attributes }) => {
  const { text } = attributes || {};

  return <StyledText className={className} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
