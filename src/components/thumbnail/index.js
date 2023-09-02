import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlStar } from "react-icons/sl";
import ProfileStandardUnit from "@/unit/profile";
import ActionSocialUnit from "@/unit/action/social";

const StyledThumbnail = styled.div`
  position: relative;
`;

const StyledLinkThumbnail = styled(Link)`
  display: block;
`;

const StyledTitleThumbnail = styled(Link)`
  overflow: hidden;
  display: -webkit-box;
  /* margin: 1.6rem 1rem 0; */
  margin: 1.2rem 0 0;
  font-size: 1.6rem;
  color: #000;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  em {
    font-weight: 700;
    color: #35c5f0;
  }

  ${(props) =>
    props.$space &&
    css`
      margin: 1.2rem 1.2rem 0;
    `}
`;

const StyledImageThumbnail = styled.img`
  overflow: hidden;
  width: 100%;
  border-radius: 0;

  ${(props) =>
    props.$radius &&
    css`
      border-radius: 0.4rem;
    `}
`;

const StyledTextThumbnail = styled.p`
  overflow: hidden;
  display: -webkit-box;
  /* margin: 1.6rem 1rem 0; */
  margin: 1rem 0 0;
  font-size: 1.6rem;
  color: #000;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  em {
    font-weight: 700;
    color: #35c5f0;
  }
`;

const StyledListOptions = styled.ul`
  margin: -1.2rem 0 0 -0.6rem;
  padding-top: 0.6rem;
  text-align: center;
`;

const StyledItemOptions = styled.li`
  display: inline-block;
  margin: 1.2rem 0 0 0.6rem;
  font-size: 1.2rem;
  color: #777;
  vertical-align: middle;
`;

const StyledButtonBookmark = styled.button`
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
`;

const ThumbnailComponent = ({ attribute }) => {
  const {
    className,
    label,
    timer,
    sticker,
    bookmark,
    title,
    author,
    options,
    bar,
    radius = true,
    space,
    src,
    href,
  } = attribute || {};

  const thumbnailSticker = `${sticker}`;
  const thumbnailDescription = `${title}`;

  return (
    <StyledThumbnail className={className}>
      <StyledLinkThumbnail to={href}>
        <StyledImageThumbnail src={`/uploads/${src}`} alt="" $radius={radius} />

        {/*
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
        */}
      </StyledLinkThumbnail>

      {title && (
        <StyledTitleThumbnail
          to="/"
          $space={space}
          dangerouslySetInnerHTML={{ __html: thumbnailDescription }}
        />
      )}

      {/* <StyledTextThumbnail
        dangerouslySetInnerHTML={{ __html: thumbnailDescription }}
      /> */}

      {author && <ProfileStandardUnit />}

      {options && (
        <StyledListOptions>
          <StyledItemOptions>북마크 9999</StyledItemOptions>
          <StyledItemOptions>조회수 9999</StyledItemOptions>
        </StyledListOptions>
      )}

      {bookmark && (
        <StyledButtonBookmark type="button">
          <SlStar size={24} />
          <span className="screen_out">북마크</span>
        </StyledButtonBookmark>
      )}

      {bar && <ActionSocialUnit attribute={{}} />}
    </StyledThumbnail>
  );
};

export default ThumbnailComponent;
