import React from 'react';
import styled, { css } from 'styled-components';
import Cell from '@/unit/cell/standard';
import Button from '@/unit/button/standard';
import Dimmed from '@/unit/dimmed/standard';

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const StyledText = styled.p`
  font-size: 1.3rem;
`;

const StyledInner = styled.div`
  position: relative;
  z-index: 10;
  padding: 2.4rem;
  border-radius: 0.8rem;
  background-color: #fff;

  -webkit-transform: translateY(2.4rem);
  -ms-transform: translateY(2.4rem);
  -moz-transform: translateY(2.4rem);
  -o-transform: translateY(2.4rem);
  transform: translateY(2.4rem);

  -webkit-transition: transform 0.4s;
  -moz-transition: transform 0.4s;
  -o-transition: transform 0.4s;
  transition: transform 0.4s;
`;

const StyledLayer = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 1.2rem;
  opacity: 0;
  -webkit-transition: z-index 0.4s, opacity 0.4s;
  -moz-transition: z-index 0.4s, opacity 0.4s;
  -o-transition: z-index 0.4s, opacity 0.4s;
  transition: z-index 0.4s, opacity 0.4s;
  pointer-events: none;

  ${({ $visibleLayer }) =>
    $visibleLayer &&
    css`
      z-index: 1000;
      opacity: 1;
      pointer-events: auto;

      ${StyledInner} {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        -moz-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
      }
    `}
`;

const Layer = ({ className, attributes }) => {
  const { visibleLayer, errorMessage, onCloseLayer } = attributes || {};

  return (
    <StyledLayer className={className} $visibleLayer={visibleLayer}>
      <Cell>
        <StyledInner>
          <StyledText>{errorMessage}</StyledText>

          <StyledButton
            attributes={{
              type: 'button',
              fill: true,
              event: onCloseLayer
            }}>
            <span className="text_local">닫기</span>
          </StyledButton>
        </StyledInner>
      </Cell>

      <Dimmed attributes={{ visible: true }} />
    </StyledLayer>
  );
};

export default Layer;
