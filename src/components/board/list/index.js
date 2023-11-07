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

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.3rem;
`;

const StyledItem = styled.li``;

const StyledList = styled.ul``;

const BoardList = ({ attributes }) => {
  const { category, list, pagination, error, loading, select, keyword, handleLogin, handleFollow, handleUnfollow, followings } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    // console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !list) {
    // console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (list.length === 0) {
    // console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
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
              square: true,
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
