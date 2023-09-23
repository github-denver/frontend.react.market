import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  display: block;
  font-size: 1.2rem;
  color: #424242;
  border: 0 none;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
  color: #424242;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin: 2rem 0 0 2rem;
  font-size: 1.2rem;
  color: #424242;
  vertical-align: middle;
`;

const StyledList = styled.ul`
  margin: -2rem 0 0 -2rem;
  padding-top: 2rem;
  text-align: center;
`;

const List = ({ className, attributes }) => {
  const { list } = attributes || {};
  console.log('list.event: ', list.event);

  const onEvent = (event) => {
    event();
  };

  return (
    <StyledList className={className}>
      {list.map((currentValue, index) => (
        <StyledItem key={index}>
          {currentValue.event ? (
            <StyledButton
              type="button"
              onClick={() => {
                onEvent(currentValue.event);
              }}>
              {currentValue.text}
            </StyledButton>
          ) : (
            <StyledLink to={currentValue.href}>{currentValue.text}</StyledLink>
          )}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default List;
