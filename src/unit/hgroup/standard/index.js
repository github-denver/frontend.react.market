import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

const StyledLink = styled(Link)`
  position: absolute;
  right: 1.6rem;
  bottom: 2rem;
  z-index: 1;
  /* -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%); */

  svg {
    display: block;
  }
`;

const StyledDescription = styled.p`
  display: block;
  padding-right: 1.2rem;
  font-size: 1.4rem;
`;

const StyledTag = styled.strong`
  display: inline-block;
  font-weight: 500;
  font-size: 1.8rem;
  /* color: #937062; */
  vertical-align: middle;

  .link_local {
    display: block;
  }
`;

const StyledHeading = ({ children, level = 2, size }) => {
  const tag = typeof level === 'number' ? `h${level}` : level;

  return (
    <StyledTag as={tag} size={size}>
      {size ? (
        <Link to="/" className="link_local">
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledTag>
  );
};

const StyledHgroup = styled.div`
  ${({ size }) =>
    size === 'small' &&
    css`
      margin-bottom: 1rem;
      padding: 0;
      text-align: left;

      ${StyledTag} {
        font-size: 1.6rem;
      }

      ${StyledLink} {
        right: 0;
      }
    `};

  ${({ $invisible }) =>
    !$invisible &&
    css`
      position: relative;
      padding: 1.6rem;
    `};
`;

const filteredText = (category, navigation) => {
  let result = [];

  for (let i in navigation) {
    if (navigation[i].category === category) {
      result = navigation[i].text;

      break;
    }
  }

  return result;
};

const Hgroup = ({ className, attributes }) => {
  const { level, title, description, href, category, navigation, size, invisible } = attributes || {};

  return (
    <StyledHgroup className={`${className} ${invisible && 'screen_out'}`} size={size} $invisible={invisible}>
      <StyledHeading level={level}>{title ? title : filteredText(category, navigation)}</StyledHeading>
      {description && <StyledDescription>{description}</StyledDescription>}

      {href && (
        <StyledLink to={href}>
          <SlArrowRight size="12" />
          <span className="screen_out">더 보기</span>
        </StyledLink>
      )}
    </StyledHgroup>
  );
};

export default Hgroup;
