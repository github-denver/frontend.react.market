import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledThumbnail = styled.div``;

const ThumbnailComponent = ({ attribute }) => {
  const { label, timer, sticker, bookmark, title, author, options } = attribute;

  const thumbnailSticker = `${sticker}`;
  const thumbnailDescription = `${title}`;

  return (
    <>
      <StyledThumbnail>
        <Link to="/">
          <div>
            <img src="/sample.jpg" alt="" />

            {label && <span>{label}</span>}

            {timer && (
              <>
                <span>남은 시간</span>
                <span>{timer}</span>
              </>
            )}

            {sticker && (
              <span dangerouslySetInnerHTML={{ __html: thumbnailSticker }} />
            )}
          </div>
        </Link>

        <p>
          <Link
            to="/"
            dangerouslySetInnerHTML={{ __html: thumbnailDescription }}
          />
        </p>

        {author && (
          <Link to="/">
            <img src="/profile.png" alt="" />
            <span>홍길동</span>
          </Link>
        )}

        {options && (
          <ul>
            <li>북마크 9999</li>
            <li>조회수 9999</li>
          </ul>
        )}

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
