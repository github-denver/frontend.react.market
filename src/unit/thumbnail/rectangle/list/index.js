import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SlStar } from 'react-icons/sl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TfiTimer } from 'react-icons/tfi';
import { LuBarChart } from 'react-icons/lu';

const StyledText = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 0.8rem;
  font-size: 1.3rem;
  color: #666;
  vertical-align: middle;

  svg {
    display: inline-block;
    color: #000;
    vertical-align: middle;

    & + .text_local {
      margin-left: 0.4rem;
    }
  }

  .text_local {
    display: inline-block;
    font-size: 1.3rem;
    vertical-align: middle;
  }

  &:nth-of-type(1) {
    margin-left: 0;
    padding-left: 0;
  }
`;

const StyledSubject = styled.strong`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: #000;
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

const StyledImage = styled(LazyLoadImage)`
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
  padding-top: 56.25%;
  border-radius: 0;

  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: 0.8rem;
    `}

  ${({ $square }) =>
    $square &&
    css`
      padding-top: 100%;
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
      <p className="screen_out">thumbnail → rectangle → list → index.js</p>

      <StyledLink to={href}>
        <StyledFrame $flicking={flicking} $grid={grid} $square={square} $radius={radius}>
          <StyledImage
            src={`/uploads/${image}`} // use normal <img> attributes as props
            alt=""
          />
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
        {level && (
          <StyledText>
            <span className="screen_out">난이도</span>
            <LuBarChart size={14} />
            <span className="text_local">{level}</span>
          </StyledText>
        )}

        {time && (
          <StyledText>
            <span className="screen_out">조리 시간</span>
            <TfiTimer size={14} />
            <span className="text_local">{time}</span>
          </StyledText>
        )}
      </StyledLink>
    </StyledThumbnail>
  );
};

export default Thumbnail;
