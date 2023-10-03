import React from 'react';
import styled, { css } from 'styled-components';
import Thumbnail from '@/unit/thumbnail/rectangle/list';

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
  padding: 1.6rem;
  padding: 1.6rem 1.6rem 0 1.6rem;
`;

const CardList = ({ attributes }) => {
  const { grid, square, list, error, loading } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 글입니다.');

      return <p>존재하지 않는 글입니다.</p>;
    }

    console.log('문제가 발생했습니다.');

    return <p>문제가 발생했습니다.</p>;
  }

  if (loading || !list) {
    console.log('읽어들이는 중입니다.');

    return <p>읽어들이는 중입니다.</p>;
  }

  if (!list) {
    console.log('등록된 글이 없습니다.');

    return <p>등록된 글이 없습니다.</p>;
  }

  return (
    <StyledList>
      {list.map((currentValue, index) => (
        <StyledItem key={index} $grid={grid}>
          <Thumbnail attributes={{ grid, square, href: `/board/${currentValue.category}/read/${currentValue.number}`, image: currentValue.thumbnail, subject: currentValue.subject, content: currentValue.content, level: currentValue.level, time: currentValue.time, author: currentValue.name, count: currentValue.count }} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CardList;
