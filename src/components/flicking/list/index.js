import React from 'react';
import styled, { css } from 'styled-components';
import Thumbnail from '@/unit/thumbnail/rectangle/list';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

// Or, if you have to support IE9
import '@egjs/react-flicking/dist/flicking-inline.css';

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
  const { grid, square, list, error, loading } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 데이터입니다.');

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log('에러가 발생했습니다.');

    return <p>에러가 발생했습니다.</p>;
  }

  if (loading || !list) {
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.');

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  if (!list) {
    console.log('목록이 존재하지 않습니다.');

    return <p>목록이 존재하지 않습니다.</p>;
  }

  return (
    <StyledFlicking align="prev" bound={true} duration={1000}>
      {list.map((currentValue, index) => (
        <StyledBox key={index}>
          <StyledSwiperThumbnail
            attributes={{
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
