import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlStar } from "react-icons/sl";

const StyledThumbnail = styled.div`
  /*
  position: relative;
  border-radius: 0.4rem;
  text-align: center;

  .thumbnail_common {
    width: 100%;
  }

  .text_thumbnail {
    overflow: hidden;
    display: -webkit-box;
    margin: 1.6rem 1rem 0;
    font-size: 1.6rem;
    color: #000;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    em {
      font-weight: 700;
      color: #35c5f0;
    }
  }

  .link_thumbnail {
    display: block;
  }

  .button_bookmark {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    z-index: 1;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;

    svg {
      fill: #fff;
    }
  }

  .list_option {
    margin: -1.2rem 0 0 -0.6rem;
    padding-top: 0.6rem;
    text-align: center;
  }

  .list_option .item_option {
    display: inline-block;
    margin: 1.2rem 0 0 0.6rem;
    font-size: 1.2rem;
    color: #777;
    vertical-align: middle;
  }

  .link_profile {
    display: inline-block;
    margin-top: 0.6rem;
    vertical-align: middle;
  }

  .link_profile .thumbnail_profile {
    display: inline-block;
    overflow: hidden;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 100%;
    vertical-align: middle;
  }

  .link_profile .box_local {
    display: inline-block;
    margin-left: 1.2rem;
    vertical-align: middle;
  }

  .link_profile .text_author {
    display: block;
    font-weight: 700;
    font-size: 1.2rem;
    color: #222;
  }
  .link_profile .text_date {
    display: block;
    font-size: 1.2rem;
    color: #666;
  }
  */
`;

const ThumbnailComponent = ({ attribute }) => {
  const { label, timer, sticker, bookmark, title, author, options } = attribute;

  const thumbnailSticker = `${sticker}`;
  const thumbnailDescription = `${title}`;

  return (
    <>
      <StyledThumbnail>
        <Link to="/article/best/read/1">
          <div>
            <img src="/sample.jpg" alt="" className="thumbnail_common" />

            {/* {label && <span>{label}</span>}

            {timer && (
              <>
                <span>남은 시간</span>
                <span>{timer}</span>
              </>
            )}

            {sticker && (
              <span dangerouslySetInnerHTML={{ __html: thumbnailSticker }} />
            )} */}
          </div>
        </Link>

        <p className="text_thumbnail">
          <Link
            to="/"
            className="link_thumbnail"
            dangerouslySetInnerHTML={{ __html: thumbnailDescription }}
          />
        </p>

        {author && (
          <Link to="/" className="link_profile">
            <img src="/profile.png" alt="" className="thumbnail_profile" />
            <span className="box_local">
              <span className="text_author">홍길동</span>
              {/* <span className="text_date">9999-99-99</span> */}
            </span>
          </Link>
        )}

        {options && (
          <ul className="list_option">
            <li className="item_option">북마크 9999</li>
            <li className="item_option">조회수 9999</li>
          </ul>
        )}

        {bookmark && (
          <button type="button" className="button_bookmark">
            <SlStar size={24} />
            <span className="screen_out">북마크</span>
          </button>
        )}
      </StyledThumbnail>
    </>
  );
};

export default ThumbnailComponent;
