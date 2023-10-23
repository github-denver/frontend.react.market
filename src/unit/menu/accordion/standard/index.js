import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';

const StyledButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0.8rem 4rem 0.8rem 1.4rem;
  border: 0 none;
  border-radius: 0.8rem;
  box-sizing: border-box;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

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
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
  }

  ${({ $active }) =>
    $active
      ? css`
          /* background-color: #f1f1f1; */

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
            display: none;
          }
        `}
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.95rem 4rem 0.95rem 4.6rem;
  font-size: 1.2rem;
  border-radius: 0.8rem;

  &.link_accordion {
    padding: 0.8rem 4rem 0.8rem 1.4rem;

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
      font-size: 1.4rem;
      vertical-align: middle;
    }

    .text_local + svg {
      position: absolute;
      top: 50%;
      right: 1.4rem;
      z-index: 1;
      margin-top: -0.6rem;
    }
  }

  &.active {
    font-weight: 500;
    background-color: #f1f1f1;
  }
`;

const StyledItem = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }

  &.item_children {
    ${StyledButton} {
      padding: 0.8rem 4rem 0.8rem 4.6rem;

      .text_local {
        font-weight: normal;
        font-size: 1.4rem;
      }
    }
  }
`;

const StyledList = styled.ul`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #f1f1f1;
  border-bottom: 0.1rem solid #f1f1f1;
  box-sizing: border-box;

  & > ${StyledItem} > & {
    margin-top: 0.4rem;
    padding: 0;
    border-top: 0 none;
    border-bottom: 0 none;
  }

  & > .item_children > & {
    padding-left: 1rem;
  }
`;

const Accordion = ({ className, items, closeOthersOnClick }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const { category, number } = useParams();

  let location = useLocation();

  const onItemClick = (index) => {
    setActiveIndexes((prevIndexes) => {
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
    <StyledList className={className}>
      <p className="screen_out">unit → menu → accordion → standard</p>

      {items?.map((item, index) => (
        <StyledItem key={index} className={item?.className}>
          {item.link ? (
            <StyledLink to={item.to}>{item.link}</StyledLink>
          ) : (
            <>
              {item.to ? (
                <StyledLink to={item.to} className={`link_accordion } `}>
                  {activeIndexes.some((i) => i === index)}
                  {item.icon}
                  <span className="text_local">{item.title}</span>
                  {item.arrow}
                </StyledLink>
              ) : (
                <StyledButton onClick={() => onItemClick(index)} $active={activeIndexes.some((i) => i === index)}>
                  {activeIndexes.some((i) => i === index)}
                  {item.icon}
                  <span className="text_local">{item.title}</span>
                  {item.arrow}
                </StyledButton>
              )}
            </>
          )}

          <Accordion items={item.subItems} closeOthersOnClick={closeOthersOnClick} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default Accordion;
