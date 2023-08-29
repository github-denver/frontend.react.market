import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLinkAccordionMenu = styled(Link)`
  display: block;
  padding: 0.95rem 4rem 0.95rem 4.6rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;

  &:hover,
  &:focus {
    /* font-weight: 700; */
    /* background-color: #f7f9fa; */
  }
`;

const StyledButtonAccordionMenu = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0.8rem 4rem 0.8rem 1.4rem;
  border: 0 none;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    /* background-color: #f7f9fa; */
  }

  svg:first-child {
    display: inline-block;
    vertical-align: middle;
  }

  svg:first-child + .text_local {
    margin-left: 0.8rem;
  }

  .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.6rem;
    vertical-align: middle;
  }

  .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
  }

  & & {
    .text_local {
      font-weight: normal;
      font-size: 1.4rem;
    }
  }
`;

const StyledItemAccordionMenu = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListAccordionMenu = styled.ul`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;

  & & {
    margin-top: 0.4rem;
    padding: 0;
    border-top: 0 none;
    border-bottom: 0 none;

    /* & & {
      padding-left: 1rem;
    } */
  }
`;

const AccordionMenu = ({ items, closeOthersOnClick }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const onItemClick = (index) => {
    setActiveIndexes((prevIndexes) => {
      console.log("closeOthersOnClick: ", closeOthersOnClick);
      if (closeOthersOnClick) {
        if (prevIndexes.includes(index)) {
          return prevIndexes.filter((i) => i !== index); // 이미 열린 메뉴 클릭 시 닫기
        } else {
          return [...prevIndexes, index]; // 새로운 메뉴 열기 (기능 3)
        }
      } else {
        if (prevIndexes.includes(index)) {
          return []; // 클릭한 메뉴 닫기 (기능 1)
        } else {
          return [index]; // 클릭한 메뉴 열고 다른 메뉴 닫기 (기능 2)
        }
      }
    });
  };

  return (
    <StyledListAccordionMenu>
      {items.map((item, index) => (
        <StyledItemAccordionMenu key={index}>
          {item.link ? (
            <StyledLinkAccordionMenu>{item.link}</StyledLinkAccordionMenu>
          ) : (
            <StyledButtonAccordionMenu onClick={() => onItemClick(index)}>
              {item.icon}
              <span className="text_local">{item.title}</span>
              {item.arrow}
            </StyledButtonAccordionMenu>
          )}

          {activeIndexes.includes(index) && (
            <AccordionMenu
              items={item.subItems}
              closeOthersOnClick={closeOthersOnClick}
            /> // 중첩된 아코디언 메뉴
          )}
        </StyledItemAccordionMenu>
      ))}
    </StyledListAccordionMenu>
  );
};

export default AccordionMenu;
