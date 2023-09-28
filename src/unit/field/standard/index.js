import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 1.05rem 1.4rem;
  border: 0 none;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 1.4rem;

  &:disabled {
    border-radius: 0.4rem;
    background-color: #fafafa;
    cursor: not-allowed;
  }
`;

const StyledBox = styled.div`
  display: block;
  margin-top: 1rem;
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.4rem;
  box-sizing: border-box;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledInner = styled.div`
  display: inline-block;
  width: 70%;
  padding-right: 1rem;
  box-sizing: border-box;
  vertical-align: middle;

  ${StyledBox} {
    margin-top: 0;
  }
`;

const StyledOuter = styled.div`
  position: relative;
  margin-top: 1rem;
`;

const StyledLabel = styled.label`
  ${({ $flexible }) =>
    !$flexible
      ? css`
          display: inline-block;
          font-weight: 500;
          font-size: 16px;
          color: #2f3438;
          vertical-align: middle;
        `
      : css`
          display: none;
          position: absolute;
          top: 50%;
          left: 1.4rem;
          z-index: 1;
          font-size: 1.4rem;
          color: #bdbdbd;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);

          & + ${StyledBox} {
            margin-top: 0;
          }
        `};
`;

const StyledField = styled.div`
  position: relative;
  text-align: left;

  .text_field {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    color: #757575;
  }

  ${({ $standard }) =>
    $standard
      ? css`
          margin-top: 2.4rem;

          &:nth-of-type(1) {
            margin-top: 0;
          }
        `
      : css`
          ${StyledBox} {
            border-radius: 0;
          }

          &:nth-of-type(1) {
            ${StyledBox} {
              border-radius: 0.4rem 0.4rem 0 0;
            }
          }

          &:nth-last-of-type(1) {
            ${StyledBox} {
              border-radius: 0 0 0.4rem 0.4rem;
            }
          }
        `};
`;

const Field = ({ className, attributes }) => {
  const { label, input, standard, guideMessage, confirm, confirmButton } = attributes || {};

  const { htmlFor, flexible, text } = label || {};
  const { type, name, id, placeholder, defaultValue, value, disabled, event, autoComplete } = input || {};

  return (
    <StyledField className={className} $standard={standard}>
      {label && (
        <StyledLabel htmlFor={htmlFor} $flexible={flexible}>
          {text}
        </StyledLabel>
      )}

      {guideMessage}

      {confirm ? (
        <StyledOuter>
          <StyledInner>
            <StyledBox>{defaultValue ? <StyledInput type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} /> : <StyledInput type={type} name={name} id={id} placeholder={placeholder} value={value || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} />}</StyledBox>
          </StyledInner>

          {confirmButton}
        </StyledOuter>
      ) : (
        <StyledBox>{defaultValue ? <StyledInput type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} /> : <StyledInput type={type} name={name} id={id} placeholder={placeholder} value={value || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} />}</StyledBox>
      )}
    </StyledField>
  );
};

export default Field;
