import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

const StyledLinkAccordionMenu = styled(Link)`
  display: block;
  padding: 0.95rem 4rem 0.95rem 4.6rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;

  &:hover,
  &:focus {
    /* font-weight: 500; */
    /* background-color: #f7f9fa; */
  }
`

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
    font-weight: 500;
    font-size: 1.6rem;
    vertical-align: middle;
  }

  .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
    /* -webkit-transition: transform 0.4s;
    -moz-transition: transform 0.4s;
    -o-transition: transform 0.4s;
    transition: transform 0.4s; */
  }

  ${(props) =>
    props.$active
      ? css`
          .text_local + svg {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        `
      : css`
          & + ul {
            max-height: 0;
          }
        `}
`

const StyledItemAccordionMenu = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }

  &.item_children {
    ${StyledButtonAccordionMenu} {
      padding: 0.8rem 4rem 0.8rem 4.6rem;

      .text_local {
        font-weight: normal;
        font-size: 1.4rem;
      }
    }
  }
`

const StyledListAccordionMenu = styled.ul`
  overflow: hidden;
  max-height: 100%;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
  box-sizing: border-box;
  -webkit-transition: max-height 0.4s;
  -moz-transition: max-height 0.4s;
  -o-transition: max-height 0.4s;
  transition: max-height 0.4s;

  & > ${StyledItemAccordionMenu} > & {
    margin-top: 0;
    padding: 0;
    border-top: 0 none;
    border-bottom: 0 none;
  }

  & > .item_children > & {
    padding-left: 1rem;
  }
`

const AccordionMenu = ({ className, items, closeOthersOnClick }) => {
  const [activeIndexes, setActiveIndexes] = useState([])

  const onItemClick = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (closeOthersOnClick) {
        if (prevIndexes.includes(index)) {
          return prevIndexes.filter((i) => i !== index) // 이미 열린 메뉴 클릭 시 닫기
        } else {
          return [...prevIndexes, index] // 새로운 메뉴 열기 (기능 3)
        }
      } else {
        if (prevIndexes.includes(index)) {
          return [] // 클릭한 메뉴 닫기 (기능 1)
        } else {
          return [index] // 클릭한 메뉴 열고 다른 메뉴 닫기 (기능 2)
        }
      }
    })
  }

  return (
    <StyledListAccordionMenu className={className}>
      {items?.map((item, index) => (
        <StyledItemAccordionMenu key={index} className={item?.className}>
          {item.link ? (
            <StyledLinkAccordionMenu to={item.to}>{item.link}</StyledLinkAccordionMenu>
          ) : (
            <StyledButtonAccordionMenu onClick={() => onItemClick(index)} $active={activeIndexes.some((i) => i === index)}>
              {activeIndexes.some((i) => i === index)}
              {item.icon}
              <span className="text_local">{item.title}</span>
              {item.arrow}
            </StyledButtonAccordionMenu>
          )}

          {/* {activeIndexes.includes(index) && ( */}
          <AccordionMenu items={item.subItems} closeOthersOnClick={closeOthersOnClick} />
          {/* )} */}
        </StyledItemAccordionMenu>
      ))}
    </StyledListAccordionMenu>
  )
}

export default AccordionMenu
