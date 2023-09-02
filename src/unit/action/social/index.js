import React from "react";
import styled from "styled-components";
import { SlHeart, SlStar, SlBubble, SlShare } from "react-icons/sl";

const StyledBarBookmark = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;

  svg {
    display: inline-block;
    fill: #424242;
    vertical-align: middle;
  }

  svg + .text_local {
    margin-left: 0.6rem;
  }

  .text_local {
    display: inline-block;
    font-size: 1.2rem;
    color: #424242;
    vertical-align: middle;
  }
`;

const StyledItemSocial = styled.li`
  display: inline-block;
  width: 25%;
  padding: 1.2rem 0;
  box-sizing: border-box;
  vertical-align: top;
`;

const StyledActionSocial = styled.ul`
  font-size: 0;
  text-align: center;
`;

const ActionSocialUnit = ({ attribute }) => {
  const { className } = attribute;

  return (
    <StyledActionSocial className={className}>
      <StyledItemSocial>
        <StyledBarBookmark type="button">
          <SlHeart size={24} />
          <span className="text_local">9999+</span>
        </StyledBarBookmark>
      </StyledItemSocial>
      <StyledItemSocial>
        <StyledBarBookmark type="button">
          <SlStar size={24} />
          <span className="text_local">9999+</span>
        </StyledBarBookmark>
      </StyledItemSocial>
      <StyledItemSocial>
        <StyledBarBookmark type="button">
          <SlBubble size={24} />
          <span className="text_local">9999+</span>
        </StyledBarBookmark>
      </StyledItemSocial>
      <StyledItemSocial>
        <StyledBarBookmark type="button">
          <SlShare size={24} />
          <span className="text_local">9999+</span>
        </StyledBarBookmark>
      </StyledItemSocial>
    </StyledActionSocial>
  );
};

export default ActionSocialUnit;
