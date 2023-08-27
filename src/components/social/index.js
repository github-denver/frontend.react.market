import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledSocial = styled.div`
  .text_local {
    font-size: 1.2rem;
    color: #757575;
  }
`;

const StyledListSocial = styled.ul`
  margin: -2rem 0 0 -2rem;
  padding-top: 2rem;
`;

const StyledItemSocial = styled.li`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  border-radius: 100%;
  vertical-align: middle;
`;

const StyledLinkSocial = styled(Link)`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;
  background-color: #f1f1f1;
`;

const SocialComponent = ({ children, attribute }) => {
  const { className, guideMessage, list } = attribute || {};

  return (
    <StyledSocial className={className}>
      <p className="text_local">{guideMessage}</p>

      <StyledListSocial>
        {list.map((currentValue, index) => (
          <StyledItemSocial key={index}>
            <StyledLinkSocial to={currentValue.href}>
              {currentValue.text}
            </StyledLinkSocial>
          </StyledItemSocial>
        ))}
      </StyledListSocial>

      {children}
    </StyledSocial>
  );
};

export default SocialComponent;
