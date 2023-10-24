import React from 'react';
import styled, { css } from 'styled-components';
import Thumbnail from '@/unit/thumbnail/rectangle/list';
import Text from '@/unit/text/standard';

const StyledThumbnail = styled(Thumbnail)`
  border-radius: 0.8rem;
`;

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.2rem;
`;

const StyledItem = styled.li`
  margin-top: 1.6rem;
  padding-left: 1.6rem;
  box-sizing: border-box;
  vertical-align: top;

  ${({ $grid }) =>
    $grid
      ? css`
          display: inline-block;
          width: 50%;
        `
      : css`
          display: block;
        `}
`;

const StyledList = styled.ul`
  margin: -3.2rem 0 0 -1.6rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
`;

const CardList = ({ attributes }) => {
  const { grid, radius, square, list, error, loading } = attributes || {};

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

  if (!list) {
    // console.log('등록된 글이 없습니다.');

    return <p>등록된 글이 없습니다.</p>;
  }

  return (
    <StyledList>
      {list.map((currentValue, index) => (
        <StyledItem key={index} $grid={grid}>
          <StyledThumbnail attributes={{ grid, radius, square, href: `/board/${currentValue.category}/read/${currentValue.number}`, image: currentValue.thumbnail, subject: currentValue.subject, content: currentValue.content, level: currentValue.level, time: currentValue.time, author: currentValue.name, count: currentValue.count }} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CardList;
