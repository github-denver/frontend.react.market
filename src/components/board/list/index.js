import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '@/unit/profile/standard';
import Thumbnail from '@/unit/thumbnail/rectangle/list';
import Text from '@/unit/text/standard';

const StyledThumbnail = styled(Thumbnail)``;

const StyledText = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  position: relative;
  margin-top: 0 !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const StyledItem = styled.li``;

const StyledList = styled.ul``;

const BoardList = ({ attributes }) => {
  const { category, list, pagination, error, loading, select, keyword, handleLogin, handleFollow, handleUnfollow, followings } = attributes || {};

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
                date: true,
                follow: true
              },
              userNumber: currentValue.userNumber,
              id: currentValue.id,
              author: currentValue.name,
              date: currentValue.regdate,
              event: [handleLogin, handleFollow, handleUnfollow],
              followings
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
