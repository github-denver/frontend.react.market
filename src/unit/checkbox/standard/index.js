import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;

  .text_local {
    display: inline-block;
    font-size: 1.2rem;
    color: #2f3438;
    vertical-align: middle;
  }

  .text_local + .description_local {
    margin-left: 0.6rem;
  }

  .text_local + .emphasis_local {
    margin-left: 0.6rem;
  }

  .description_local {
    display: inline-block;
    font-size: 1.1rem;
    color: #828c94;
    vertical-align: middle;
  }

  .description_local + .emphasis_local {
    padding-left: 0.6rem;
  }

  .emphasis_local {
    display: inline-block;
    font-size: 1.1rem;
    color: #828c94;
    vertical-align: middle;
  }

  em.emphasis_local {
    color: #009fce;
  }
`;

const StyledBox = styled.div`
  overflow: hidden;
`;

const StyledStandard = styled.div`
  text-align: left;

  .textfield_local {
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 0.1rem;
    border: 0.1rem solid #bdbdbd;
    box-sizing: border-box;
  }

  .textfield_local + ${StyledBox} {
    padding-left: 0.6rem;
  }
`;

const CheckboxStandardUnit = ({ attribute }) => {
  const { label, input } = attribute || {};
  const { htmlFor, text, message, required } = label || {};
  const { name } = input || {};

  return (
    <StyledStandard>
      <input
        type="checkbox"
        name={name}
        id={htmlFor}
        className="textfield_local"
      />

      <StyledBox>
        <StyledLabel htmlFor={htmlFor}>
          <span
            dangerouslySetInnerHTML={{ __html: text }}
            className="text_local"
          />

          {message && <span className="description_local">{message}</span>}

          {required ? (
            <em className="emphasis_local">{required}</em>
          ) : (
            <span className="emphasis_local">(선택)</span>
          )}
        </StyledLabel>
      </StyledBox>
    </StyledStandard>
  );
};

export default CheckboxStandardUnit;
