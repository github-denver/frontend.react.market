import React from "react";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  display: block;
  margin-top: 1rem;
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.4rem;
  box-sizing: border-box;

  .textfield_local {
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
  }
`;

const StyledLabel = styled.label`
  ${(props) =>
    props.$flexible &&
    css`
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

  ${(props) =>
    !props.$flexible &&
    css`
      display: inline-block;
      font-weight: 700;
      font-size: 16px;
      color: #2f3438;
      vertical-align: middle;
    `};
`;

const StyledField = styled.div`
  position: relative;
  text-align: left;

  .text_field {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #757575;
  }

  .outer_field {
    position: relative;
    margin-top: 1rem;
  }

  .inner_field {
    display: inline-block;
    width: 70%;
    padding-right: 1rem;
    box-sizing: border-box;
    vertical-align: middle;

    ${StyledBox} {
      margin-top: 0;
    }
  }

  ${(props) =>
    props.$standard &&
    css`
      &.group_field + &.group_field {
        margin-top: 2.4rem;
      }
    `};

  ${(props) =>
    !props.$standard &&
    css`
      ${StyledBox} {
        border-radius: 0.4rem 0.4rem 0 0;
      }

      &.group_field + &.group_field {
        margin-top: -0.1rem;

        ${StyledBox} {
          border-radius: 0 0 0.4rem 0.4rem;
        }
      }
    `};
`;

const FieldUnit = ({ attribute }) => {
  const {
    className,
    standard,
    confirm,
    guideMessage,
    confirmButton,
    label,
    input,
  } = attribute || {};

  const { htmlFor, text, flexible, hideLabel } = label || {};
  const {
    type,
    name,
    id,
    placeholder,
    event,
    // value,
    defaultValue,
    disabled,
    autoComplete,
  } = input || {};

  return (
    <StyledField className={className} $standard={standard}>
      <StyledLabel
        htmlFor={htmlFor}
        $flexible={flexible}
        $hideLabel={hideLabel}
      >
        {text}
      </StyledLabel>

      {guideMessage}

      {confirm ? (
        <div className="outer_field">
          <div className="inner_field">
            <StyledBox>
              <input
                type={type}
                name={name}
                id={id}
                className="textfield_local"
                placeholder={placeholder}
                onChange={event}
                defaultValue={defaultValue}
                // value={value}
                disabled={disabled}
                autoComplete={autoComplete}
              />
            </StyledBox>
          </div>

          {confirmButton}
        </div>
      ) : (
        <StyledBox>
          <input
            type={type}
            name={name}
            id={id}
            className="textfield_local"
            placeholder={placeholder}
            onChange={event}
            defaultValue={defaultValue}
            // value={value}
            disabled={disabled}
            autoComplete={autoComplete}
          />
        </StyledBox>
      )}
    </StyledField>
  );
};

export default FieldUnit;
