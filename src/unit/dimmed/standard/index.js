import React from 'react';
import styled from 'styled-components';

const StyledDimmed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  opacity: ${({ $visible }) => ($visible ? 0.5 : 0)};
  -webkit-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  transition: opacity 0.4s;
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`;

const Dimmed = ({ attributes }) => {
  const { visible } = attributes || {};

  return <StyledDimmed $visible={visible} />;
};

export default Dimmed;
