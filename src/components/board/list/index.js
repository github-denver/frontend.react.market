import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '@/unit/profile/standard';
import Thumbnail from '@/unit/thumbnail/rectangle/list';
import Text from '@/unit/text/standard';
// import Boundary from '@/unit/boundary/standard';

const StyledThumbnail = styled(Thumbnail)`
  /* padding-bottom: 3.6rem; */
`;

const StyledText = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  position: relative;
  margin-top: -1.2rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 2.4rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%);
    content: '';
  }
`;

const StyledItem = styled.li``;

const StyledList = styled.ul``;

const BoardList = ({ attributes }) => {
  const { category, user, list, pagination, error, loading, select, keyword } = attributes || {};

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
    <StyledList>
      {list.map((currentValue, index) => (
        <StyledItem key={index}>
          <Profile
            attributes={{
              visible: {
                author: true,
                date: true
              },
              author: currentValue.name,
              date: currentValue.regdate
            }}
          />

          <StyledText
            attributes={{
              text: currentValue.content
            }}
          />

          <StyledThumbnail
            attributes={{
              href: `/board/${currentValue.category}/read/${currentValue.number}`,
              radius: false,
              image: currentValue.thumbnail
              // subject: currentValue.subject,
              // level: currentValue.level,
              // time: currentValue.time,
              // author: currentValue.name,
              // count: currentValue.count
            }}
          />

          {/* <Boundary /> */}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default BoardList;
