import React, { useState } from "react";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

const StyledSelect = styled.select`
  width: 100%;
  height: 3.2rem;
  padding: 1.2rem;
  border: 0 none;
  box-sizing: border-box;
  font-size: 1.2rem;
  line-height: 3.2rem;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const StyledText = styled.span`
  overflow: hidden;
  display: block;
  font-size: 1.2rem;
  line-height: 3.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 0 3.4rem 0 1.2rem;
  font-size: 0;
  text-align: left;

  svg {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    margin-top: -0.5rem;
  }
`;

const StyledInner = styled.div`
  position: relative;
  z-index: 1;
  height: 3.4rem;
  border: 0.1rem solid #e9e9e9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  background-position: 100% 50%;
`;

const StyledWrapper = styled.div`
  display: inline-block;
  padding-left: 1.2rem;
  box-sizing: border-box;
  vertical-align: top;
`;

const SelectStandardUnit = ({ attribute }) => {
  const { className, options, defaultValue } = attribute || {};
  const [select, setSelect] = useState(defaultValue);

  const onChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <StyledWrapper className={className}>
      <StyledInner>
        <StyledLabel htmlFor="search">
          <StyledText>{select}</StyledText>
          <SlArrowDown size="10" />
        </StyledLabel>

        <StyledSelect name="search" onChange={onChange} defaultValue={select}>
          {options.map((currentValue, index) => (
            <option value={currentValue.value} key={index}>
              {currentValue.text}
            </option>
          ))}
        </StyledSelect>
      </StyledInner>
    </StyledWrapper>
  );
};

export default SelectStandardUnit;
