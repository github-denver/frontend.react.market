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
  color: #000;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
  padding-top: 100%;
  border-radius: 0.8rem;

  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: 0.4rem;
    `}
`;

const StyledLink = styled(Link)`
  display: block;
`;

const StyledThumbnail = styled.div``;

const Thumbnail = ({ className, attributes }) => {
  const { href, radius, image, subject, level, time } = attributes || {};

  return (
    <StyledThumbnail className={className}>
      <StyledLink to={href}>
        <StyledFrame $radius={radius}>
          <StyledImage src={`/uploads/${image}`} alt="" />
        </StyledFrame>

        {subject && <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />}
        {/* {level && <StyledText>{level}</StyledText>}
        {time && <StyledText>{time}</StyledText>} */}
      </StyledLink>
    </StyledThumbnail>
  );
};

export default Thumbnail;
