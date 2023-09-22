import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  return (
    <StyledList className={className}>
      {list.map((currentValue, index) => (
        <StyledItem key={index}>
          <StyledLink to={currentValue.href}>{currentValue.text}</StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default List;
