import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledThumbnail = styled.div``;

const ThumbnailComponent = ({ attribute }) => {
  const { rank, timer, sticker, bookmark, title } = attribute;

  const thumbnailSticker = `${sticker}`;
  const thumbnailDescription = `${title}`;

  return (
    <>
      <StyledThumbnail>
        <Link to="/">
          <img src="/sample.jpg" alt="" />

          <span>{rank}순위</span>
          <span>남은 시간 {timer}</span>
          <span dangerouslySetInnerHTML={{ __html: thumbnailSticker }}></span>
          <span>홍길동</span>

          <p dangerouslySetInnerHTML={{ __html: thumbnailDescription }}></p>
        </Link>

        {bookmark && (
          <button type="button">
            <span>북마크</span>
          </button>
        )}
      </StyledThumbnail>
    </>
  );
};

export default ThumbnailComponent;
