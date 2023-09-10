import React from "react";
import styled, { css } from "styled-components";

const StyledTextRegular = css`
  display: inline-block;
  font-size: 1.2rem;
  vertical-align: middle;
`;

const StyledTextSmall = css`
  display: inline-block;
  font-size: 1.1rem;
  vertical-align: middle;
`;

const StyledEmphasis = styled.em`
  ${StyledTextSmall}
  color: #009fce;
`;

const StyledDescription = styled.p`
  ${StyledTextSmall}
  color: #828c94;
`;

const StyledText = styled.span`
  ${StyledTextRegular}
  color: #2f3438;
`;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;

  ${StyledText} + ${StyledDescription} {
    margin-left: 0.6rem;
  }

  ${StyledText} + ${StyledEmphasis} {
    margin-left: 0.6rem;
  }

  ${StyledDescription} + ${StyledEmphasis},
  ${StyledDescription} + ${StyledDescription} {
    padding-left: 0.6rem;
  }
`;

const StyledBox = styled.div`
  overflow: hidden;
`;

const StyledInput = styled.input`
  float: left;
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 0.1rem;
  border: 0.1rem solid #bdbdbd;
  box-sizing: border-box;

  & + ${StyledBox} {
    padding-left: 0.6rem;
  }
`;

const StyledCheckbox = styled.div`
  text-align: left;
`;

const CheckboxStandardUnit = ({ attribute }) => {
  const { input, label } = attribute || {};

  const { name } = input || {};
  const { htmlFor, text, message, required } = label || {};

  return (
    <StyledCheckbox>
      <StyledInput type="checkbox" name={name} id={htmlFor} />

      <StyledBox>
        <StyledLabel htmlFor={htmlFor}>
          <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>

          {message && <StyledDescription>{message}</StyledDescription>}

          {required ? (
            <StyledEmphasis>{required}</StyledEmphasis>
          ) : (
            <StyledDescription>(선택)</StyledDescription>
          )}
        </StyledLabel>
      </StyledBox>
    </StyledCheckbox>
  );
};

export default CheckboxStandardUnit;
