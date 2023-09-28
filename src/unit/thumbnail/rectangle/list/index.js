import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SlStar } from 'react-icons/sl';

const StyledText = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 0.6rem;
  padding-left: 0.6rem;
  font-size: 1.2rem;
  color: #666;
  vertical-align: middle;

  &:before {
    position: absolute;
    top: 0.4rem;
    bottom: 0.3rem;
    left: 0;
    z-index: 1;
    width: 0.1rem;
    background-color: #ccc;
    vertical-align: middle;
    content: '';
  }

  &:nth-of-type(1) {
    margin-left: 0;
    padding-left: 0;

    &:before {
      display: none;
    }
  }
`;

const StyledSubject = styled.strong`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: #343434;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledInformation = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  z-index: 1;
  padding-left: 1rem;

  ${StyledSubject} {
    margin-top: 0;
  }

  ${StyledText} {
    margin-top: 1rem;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  left: 50%;
  bottom: 0;
  z-index: 1;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const StyledFrame = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-radius: 0.8rem;

  /*
  ${({ $flicking, $grid, $square }) =>
    $square
      ? $grid
        ? css`
            padding-top: 100%;
          `
        : css`
            ${({ $flicking }) =>
              $flicking
                ? css`
                    display: block;
                    padding-top: 100%;
                  `
                : css`
                    display: inline-block;
                    width: 50%;
                    padding-top: 50%;
                    vertical-align: top;
                  `}
          `
      : $grid
      ? css`
          padding-top: 100%;
        `
      : css`
          ${({ $flicking }) =>
            $flicking
              ? css`
                  display: block;
                `
              : css`
                  display: inline-block;
                  width: 50%;
                  vertical-align: top;
                `}
          padding-top: 150%;
        `}
  */

  padding-top: 150%;

  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: 0.4rem;
    `}
`;

const StyledLink = styled(Link)`
  display: block;
  position: relative;

  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

const StyledThumbnail = styled.div``;

const Thumbnail = ({ className, attributes }) => {
  const { flicking, grid, square, href, radius, image, subject, content, level, time } = attributes || {};

  return (
    <StyledThumbnail className={className}>
      <StyledLink to={href}>
        <StyledFrame $flicking={flicking} $grid={grid} $square={square} $radius={radius}>
          <StyledImage src={`/uploads/${image}`} alt="" />
        </StyledFrame>

        {flicking ? (
          <>{subject && <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />}</>
        ) : (
          <>
            {grid ? (
              <> {subject && <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />}</>
            ) : (
              <>
                <StyledInformation>
                  {subject && <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />}

                  {!grid && content && <StyledText dangerouslySetInnerHTML={{ __html: content }} />}
                </StyledInformation>
              </>
            )}
          </>
        )}

        {/* {level && <StyledText>{level}</StyledText>}
        {time && <StyledText>{time}</StyledText>} */}
      </StyledLink>
    </StyledThumbnail>
  );
};

export default Thumbnail;
