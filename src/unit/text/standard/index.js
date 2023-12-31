import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  margin: 1.2rem;
  font-size: 1.3rem;

  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }

  a {
    color: #000;
  }
`;

const Text = ({ className, attributes }) => {
  const { text } = attributes || {};

  return <StyledText className={className} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
