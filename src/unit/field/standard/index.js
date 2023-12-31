import React from 'react';
import styled, { css } from 'styled-components';

const StyledFakeField = styled.button`
  width: 100%;
  min-height: 4.2rem;
  padding: 1.05rem 1.4rem;
  border: 0 none;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 1.3rem;
  text-align: left;
  cursor: text;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.05rem 1.4rem;
  border: 0 none;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 1.3rem;

  &:disabled {
    border-radius: 0.4rem;
    background-color: #fff;
    cursor: not-allowed;
  }
`;

const StyledBox = styled.div`
  display: block;
  margin-top: 1rem;
  border: 0.1rem solid #987060;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background-color: #fff;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledInner = styled.div`
  display: inline-block;
  width: 100%;
  padding-right: 9.4rem;
  box-sizing: border-box;
  vertical-align: middle;

  ${StyledBox} {
    margin-top: 0;
  }
`;

const StyledOuter = styled.div`
  position: relative;

  ${({ $label }) =>
    $label
      ? css`
          margin-top: 0;
        `
      : css`
          margin-top: 1rem;
        `}
`;

const StyledLabel = styled.label`
  ${({ $flexible }) =>
    !$flexible
      ? css`
          display: inline-block;
          font-weight: 500;
          font-size: 1.5rem;
          color: #000;
          vertical-align: middle;
        `
      : css`
          display: none;
          position: absolute;
          top: 50%;
          left: 1.4rem;
          z-index: 1;
          font-size: 1.3rem;
          color: #000;
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
    font-size: 1.3rem;
    color: #666;
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

const Field = ({ children, className, attributes }) => {
  const { label, input, standard, guideMessage, confirm, confirmButton } = attributes || {};

  const { htmlFor, flexible, text } = label || {};
  const { type, name, id, placeholder, defaultValue, value, disabled, event, fake, autoComplete } = input || {};

  return (
    <StyledField className={className} $standard={standard}>
      {type === 'etc' ? (
        <>
          {fake?.state ? (
            <>
              {fake.confirmButton ? (
                <>
                  <StyledOuter $label={!label}>
                    <StyledInner>
                      <StyledBox>
                        <StyledFakeField type="button" onClick={fake.input.event}>
                          {fake.input.value}
                        </StyledFakeField>
                      </StyledBox>
                    </StyledInner>

                    {fake.confirmButton}
                  </StyledOuter>
                </>
              ) : (
                <>
                  <StyledBox>
                    <StyledFakeField type="button" onClick={fake.input.event}>
                      {fake.input.value}
                    </StyledFakeField>
                  </StyledBox>
                </>
              )}
            </>
          ) : (
            <> {children}</>
          )}
        </>
      ) : (
        <>
          {label && (
            <StyledLabel htmlFor={htmlFor} $flexible={flexible}>
              {text}
            </StyledLabel>
          )}

          {guideMessage}

          {fake?.state ? (
            <>
              {fake.confirmButton ? (
                <>
                  <StyledOuter $label={!label}>
                    <StyledInner>
                      <StyledBox>
                        <StyledFakeField type="button" onClick={fake.input.event}>
                          {fake.input.value}
                        </StyledFakeField>
                      </StyledBox>
                    </StyledInner>

                    {fake.confirmButton}
                  </StyledOuter>
                </>
              ) : (
                <>
                  <StyledBox>
                    <StyledFakeField type="button" onClick={fake.input.event}>
                      {fake.input.value}
                    </StyledFakeField>
                  </StyledBox>
                </>
              )}
            </>
          ) : (
            <>
              {confirm ? (
                <StyledOuter $label={!label}>
                  <StyledInner>
                    <StyledBox>{defaultValue ? <StyledInput type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} /> : <StyledInput type={type} name={name} id={id} placeholder={placeholder} value={value || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} />}</StyledBox>
                  </StyledInner>

                  {confirmButton}
                </StyledOuter>
              ) : (
                <StyledBox>{defaultValue ? <StyledInput type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} /> : <StyledInput type={type} name={name} id={id} placeholder={placeholder} value={value || ''} disabled={disabled} onChange={event} autoComplete={autoComplete} />}</StyledBox>
              )}
            </>
          )}
        </>
      )}
    </StyledField>
  );
};

export default Field;
