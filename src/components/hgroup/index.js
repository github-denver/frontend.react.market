import React from "react";
import styled from "styled-components";

const StyledHgroup = styled.div``;
const Heading = styled.strong``;

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

  return <Heading as={tag}>{children}</Heading>;
};

const HgroupComponent = ({ attribute }) => {
  const { level, title, invisible, category, navigation } = attribute;

  return (
    <>
      <StyledHgroup
        className={invisible ? "hgroup_global screen_out" : "hgroup_global"}
      >
        <StyledHeading level={level}>
          {title ? title : filteredText(category, navigation)}
        </StyledHeading>

        {/* <Link to="/">더 보기</Link> */}
      </StyledHgroup>
    </>
  );
};

export default HgroupComponent;
