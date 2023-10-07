import React from 'react';
import styled from 'styled-components';
import Half from '@/unit/half/standard';
import Button from '@/unit/button/standard';
import Layer from '@/unit/layer/standard';

const StyledPublish = styled.div``;

const Publish = ({ className, attributes, errorMessage, onCloseLayer, visibleLayer }) => {
  const { publish, cancel, owner } = attributes || {};

  return (
    <StyledPublish className={className}>
      <Half
        attributes={{
          first: (
            <Button
              attributes={{
                type: 'button',
                fill: true,
                event: publish
              }}>
              <span className="text_local">{owner ? '수정' : '등록'}</span>
            </Button>
          ),
          second: (
            <Button
              attributes={{
                type: 'button',
                event: cancel
              }}>
              <span className="text_local">취소</span>
            </Button>
          )
        }}
      />

      <Layer attributes={{ visibleLayer, errorMessage, onCloseLayer }} />
    </StyledPublish>
  );
};

export default Publish;
