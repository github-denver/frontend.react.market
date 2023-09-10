import React from "react";
import styled from "styled-components";
import ThumbnailComponent from "@/components/thumbnail";

const StyledItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 1.6rem;
  padding-left: 1.6rem;
  box-sizing: border-box;
  vertical-align: middle;
`;

const StyledList = styled.ul`
  margin: -3.2rem 0 0 -1.6rem;
  padding: 1.6rem;
`;

const ListStandardUnit = ({ attribute }) => {
  const { list } = attribute || {};

  return (
    <StyledList>
      {list.map((currentValue, index) => (
        <StyledItem key={index}>
          <ThumbnailComponent
            attribute={{
              label: 1,
              timer: "00:00:00",
              bookmark: true,
              sticker: currentValue.content,
              title: currentValue.subject,
              src: currentValue.thumbnail,
              href: `/board/${currentValue.category}/read/${currentValue.number}`,
            }}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default ListStandardUnit;
