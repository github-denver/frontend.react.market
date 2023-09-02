import React, { useState } from "react";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

const StyledStandardSelect = styled.select`
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

const StyledStandardLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 0 3.4rem 0 1.2rem;
  font-size: 0;
  text-align: left;

  .text_local {
    overflow: hidden;
    display: block;
    font-size: 1.2rem;
    line-height: 3.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    margin-top: -0.5rem;
  }
`;

const StyledStandardSelectInner = styled.div`
  position: relative;
  z-index: 1;
  height: 3.4rem;
  border: 0.1rem solid #e9e9e9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  background-position: 100% 50%;
`;

const StyledStandardSelectWrapper = styled.div`
  display: inline-block;
  padding-left: 1.2rem;
  box-sizing: border-box;
  vertical-align: top;
`;

const SelectStandardUnit = ({ children, attribute }) => {
  const { className, options, defaultValue } = attribute || {};

  const [select, setSelect] = useState(defaultValue);

  const onChange = (event) => {
    if (event.target.tagName.toLowerCase() === "select") {
      setSelect(event.target.options[event.target.selectedIndex].value);
    }
  };

  return (
    <StyledStandardSelectWrapper className={className}>
      <StyledStandardSelectInner>
        <StyledStandardLabel htmlFor="search">
          <span className="text_local">{select}</span>
          <SlArrowDown size="10" />
        </StyledStandardLabel>

        <StyledStandardSelect
          name="search"
          onChange={onChange}
          defaultValue={select}
        >
          {options.map((currentValue, index) => (
            <option value={currentValue.value} key={index}>
              {currentValue.text}
            </option>
          ))}
        </StyledStandardSelect>
      </StyledStandardSelectInner>
    </StyledStandardSelectWrapper>
  );
};

export default SelectStandardUnit;
