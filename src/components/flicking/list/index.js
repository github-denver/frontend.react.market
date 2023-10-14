import React from 'react';
import styled, { css } from 'styled-components';
import Thumbnail from '@/unit/thumbnail/rectangle/list';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

// Or, if you have to support IE9
import '@egjs/react-flicking/dist/flicking-inline.css';

import Text from '@/unit/text/standard';

const StyledSystemMessage = styled(Text)`
  margin: 0 1.6rem;
  font-size: 1.2rem;
`;

const StyledSwiperThumbnail = styled(Thumbnail)`
  padding-left: 1rem;
`;

const StyledBox = styled.div`
  width: calc((100% + 2rem) / 2.5);
`;

const StyledFlicking = styled(Flicking)`
  padding: 0 2rem 0 1rem;
  box-sizing: border-box;
`;

const FlickingList = ({ attributes }) => {
  const { grid, square, panelsPerView, list, error, loading } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !list) {
    console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (list.length === 0) {
    console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
  }

  return (
    <StyledFlicking align="prev" bound={true} panelsPerView={panelsPerView}>
      {list.map((currentValue, index) => (
        <StyledBox key={index}>
          <StyledSwiperThumbnail
            attributes={{
              radius: true,
              flicking: true,
              grid,
              square,
              href: `/board/${currentValue.category}/read/${currentValue.number}`,
              image: currentValue.thumbnail,
              subject: currentValue.subject,
              level: currentValue.level,
              time: currentValue.time,
              author: currentValue.name,
              count: currentValue.count
            }}
          />
        </StyledBox>
      ))}
    </StyledFlicking>
  );
};

export default FlickingList;
