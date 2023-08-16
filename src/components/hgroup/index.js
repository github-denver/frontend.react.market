import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const StyledHgroup = styled.div`
  ${({ invisible }) =>
    invisible
      ? css`
          display: none;
        `
      : css`
          position: relative;
          padding: 1.6rem;
        `}

  .link_detail {
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
  }
`;
const Heading = styled.strong`
  display: inline-block;
  font-weight: 700;
  font-size: 2rem;
  vertical-align: middle;

  .link_local {
    display: block;
  }
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
    <Heading as={tag}>
      <Link to="/" className="link_local">
        {children}
      </Link>
    </Heading>
  );
};

const HgroupComponent = ({ attribute }) => {
  const { level, title, invisible, category, navigation } = attribute;

  return (
    <>
      <StyledHgroup invisible={invisible} className="hgroup_global">
        <StyledHeading level={level}>
          {title ? title : filteredText(category, navigation)}
        </StyledHeading>

        {/* <Link to="/" className="link_detail">
          <SlArrowRight size="18" />
          <span className="screen_out">더 보기</span>
        </Link> */}
      </StyledHgroup>
    </>
  );
};

export default HgroupComponent;
