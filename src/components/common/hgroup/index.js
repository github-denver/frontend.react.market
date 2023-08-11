import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.strong``;
const Hgroup = styled.div``;

const func = (category, navigation) => {
  let result = [];

  for (let i in navigation) {
    if (navigation[i].category === category) {
      result = navigation[i].text;

      break;
    }
  }

  return result;
};

const HeadingContainer = ({ level = 2, children }) => {
  return <Heading as={`h${level}`}>{children}</Heading>;
};

const HgroupContainer = ({ attribute }) => {
  const { level, title, invisible, category, navigation } = attribute;

  const result = func(category, navigation);

  return (
    <>
      <Hgroup
        className={invisible ? "hgroup_global screen_out" : "hgroup_global"}
      >
        <HeadingContainer level={level}>
          {title ? title : result}
        </HeadingContainer>

        {/* <Link to="/">더 보기</Link> */}
      </Hgroup>
    </>
  );
};

export default HgroupContainer;
