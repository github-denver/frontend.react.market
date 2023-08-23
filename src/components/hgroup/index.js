import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const StyledHgroup = styled.div`
  ${(props) =>
    !props.$invisible
      ? css`
          position: relative;
          padding: 1.6rem;
        `
      : css``};
`;

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

const StyledTag = styled.strong`
  display: inline-block;
  font-weight: 700;
  font-size: 2rem;
  vertical-align: middle;
`;

const StyledTagLink = styled(Link)`
  display: block;
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

const StyledHeading = ({ level = 2, children }) => {
  const tag = typeof level === "number" ? `h${level}` : level;

  return (
    <StyledTag as={tag}>
      <StyledTagLink to="/">{children}</StyledTagLink>
    </StyledTag>
  );
};

const HgroupComponent = ({ attribute }) => {
  const { level, title, invisible, category, navigation } = attribute;

  return (
    <StyledHgroup $invisible={invisible} className={invisible && "screen_out"}>
      <StyledHeading level={level}>
        {title ? title : filteredText(category, navigation)}
      </StyledHeading>

      {!invisible && (
        <StyledDetailLink to="/">
          <SlArrowRight size="18" />
          <span className="screen_out">더 보기</span>
        </StyledDetailLink>
      )}
    </StyledHgroup>
  );
};

export default HgroupComponent;
