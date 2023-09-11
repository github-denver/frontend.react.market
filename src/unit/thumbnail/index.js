import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SlStar } from 'react-icons/sl'

const StyledText = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: #666;
  vertical-align: middle;
`

const StyledSubject = styled.strong`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: #000;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

const StyledImage = styled.img`
  overflow: hidden;
  width: 100%;
  border-radius: 0;

  ${(props) =>
    props.$radius &&
    css`
      border-radius: 0.4rem;
    `}
`

const StyledThumbnail = styled.div`
  position: relative;
`
const StyledLink = styled(Link)`
  display: block;

  ${StyledText} + ${StyledText} {
    margin-left: 0.4rem;
  }
`

const ThumbnailUnit = ({ attribute }) => {
  const { className, path, image, radius = true, subject, author, count } = attribute || {}

  return (
    <StyledThumbnail className={className}>
      <StyledLink to={path}>
        <StyledImage src={`/uploads/${image}`} alt="" $radius={radius} />
        <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />
        <StyledText>{author}</StyledText>
        <StyledText>{count}</StyledText>
      </StyledLink>
    </StyledThumbnail>
  )
}

export default ThumbnailUnit
