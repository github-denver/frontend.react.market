import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const commonStyles = css`
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.375rem 0;
  border: 0.1rem solid #987060;
  border-radius: 0.4rem;
  box-sizing: border-box;
  line-height: 1;
  color: #987060;
  text-align: center;

  .text_local {
    display: inline-block;
    font-weight: 500;
    font-size: 1.3rem;
    vertical-align: middle;
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      display: inline-block;
      width: auto;
      padding: 1rem 1.6rem;
      vertical-align: middle;
    `}

  ${({ $confirm }) =>
    $confirm &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      width: 8.4rem;
      margin-top: 0;
    `}

    ${({ $fill }) =>
    $fill
      ? css`
          background-color: #987060;

          .text_local {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
        `};
`;

const StyledLink = styled(Link)`
  ${commonStyles}
`;

const StyledButton = styled.button`
  ${commonStyles}
`;

const Button = ({ className, attributes, children }) => {
  const { type, href, size, confirm, fill, target, event } = attributes || {};

  return type === 'link' ? (
    <StyledLink to={href} className={className} size={size} $confirm={confirm} $fill={fill} target={target}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton type={type} className={className} size={size} $confirm={confirm} $fill={fill} onClick={event}>
      {children}
    </StyledButton>
  );
};

export default Button;
