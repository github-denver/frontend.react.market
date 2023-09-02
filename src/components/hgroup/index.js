import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const StyledDetailLink = styled(Link)`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  z-index: 1;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);

  svg {
    display: block;
  }
`;

const StyledTagLink = styled(Link)`
  display: block;
`;

const StyledTag = styled.strong`
  display: inline-block;
  font-weight: 700;
  font-size: 2rem;
  vertical-align: middle;
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

const StyledHeading = ({ level = 2, size, children }) => {
  const tag = typeof level === "number" ? `h${level}` : level;

  return (
    <StyledTag as={tag} size={size}>
      {size ? <StyledTagLink to="/">{children}</StyledTagLink> : children}
    </StyledTag>
  );
};

const StyledHgroup = styled.div`
  ${(props) =>
    !props.$invisible
      ? css`
          position: relative;
          padding: 1.6rem;
        `
      : css``};

  ${(props) =>
    props.size !== "small"
      ? css``
      : css`
          margin-bottom: 1rem;
          padding: 0;
          text-align: left;

          ${StyledTag} {
            font-size: 1.6rem;
          }

          ${StyledDetailLink} {
            right: 0;
          }
        `};
`;

const HgroupComponent = ({ attribute }) => {
  const { level, title, invisible, category, navigation, detail, href, size } =
    attribute;

  return (
    <StyledHgroup
      $invisible={invisible}
      size={size}
      className={invisible && "screen_out"}
    >
      <StyledHeading level={level}>
        {title ? title : filteredText(category, navigation)}
      </StyledHeading>

      {detail && (
        <StyledDetailLink to={href}>
          <SlArrowRight size="18" />
          <span className="screen_out">더 보기</span>
        </StyledDetailLink>
      )}
    </StyledHgroup>
  );
};

export default HgroupComponent;
