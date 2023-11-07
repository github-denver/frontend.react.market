import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

const StyledLink = styled(Link)`
  position: absolute;
  right: 1.6rem;
  bottom: 2rem;
  z-index: 1;

  svg {
    display: block;
  }
`;

const StyledDescription = styled.p`
  display: block;
  /* padding-right: 1.2rem; */
  font-size: 1.5rem;
  color: #666;
`;

const StyledTag = styled.strong`
  display: inline-block;
  font-weight: 500;
  font-size: 1.7rem;
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
        <Link to="" className="link_local">
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
        font-size: 1.5rem;
      }

      ${StyledLink} {
        right: 0;
      }
    `};

  ${({ $invisible }) =>
    !$invisible &&
    css`
      position: relative;
      margin: 0 1.2rem;
      padding: 1.6rem 0;
    `};

  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `};

  ${({ $line }) =>
    $line === 'thick' &&
    css`
      border-bottom: 0.2rem solid #987060;

      ${StyledTag} {
        font-weight: 700;
      }
    `}

  ${({ $line }) =>
    $line === 'thin' &&
    css`
      border-bottom: 0.1rem solid #eee;

      ${StyledTag} {
        font-weight: 700;
      }
    `}
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
  const { level, title, description, href, category, navigation, size, invisible, align, line } = attributes || {};
  console.log(line);

  return (
    <StyledHgroup className={`${className} ${invisible && 'screen_out'}`} size={size} $invisible={invisible} $align={align} $line={line}>
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
