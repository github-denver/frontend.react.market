import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledStandard = css`
  display: block;
  width: 100%;
  padding: 1.4rem 0;
  border: 0.1rem solid #35c5f0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  line-height: 1;
  color: #35c5f0;
  text-align: center;
  ${(props) =>
    props.$fill
      ? css`
          background-color: #35c5f0;

          .text_local {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
        `};
  ${(props) =>
    props.$confirm &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      width: 30%;
      margin-top: 0;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      display: inline-block;
      width: auto;
      padding: 1rem 1.6rem;
      vertical-align: middle;
    `}

  .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledStandardLink = styled(Link)`
  ${StyledStandard}
`;

const StyledStandardButton = styled.button`
  ${StyledStandard}
`;

const ButtonStandardUnit = ({ children, attribute }) => {
  const { type, className, event, href, fill, confirm, size } = attribute || {};

  return type === "link" ? (
    <StyledStandardLink
      to={href}
      className={className}
      $fill={fill}
      $confirm={confirm}
      size={size}
    >
      {children}
    </StyledStandardLink>
  ) : (
    <StyledStandardButton
      type={type}
      className={className}
      onClick={event}
      $fill={fill}
      $confirm={confirm}
      size={size}
    >
      {children}
    </StyledStandardButton>
  );
};

export default ButtonStandardUnit;
