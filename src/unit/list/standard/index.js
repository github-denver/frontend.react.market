import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  display: block;
  font-size: 1.3rem;
  color: #666;
  border: 0 none;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.3rem;
  color: #666;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin: 0 0 0 1.2rem;
  font-size: 1.3rem;
  color: #666;
  vertical-align: middle;
`;

const StyledList = styled.ul`
  margin: 0 0 0 -1.2rem;
  /* padding-top: 2rem; */
  font-size: 0;
  /* text-align: center; */
`;

const List = ({ className, attributes }) => {
  const { list } = attributes || {};

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
              {currentValue.screenOut && <span className="screen_out">{currentValue.screenOut}</span>}
              {currentValue.text}
            </StyledButton>
          ) : (
            <>
              {currentValue.href ? (
                <StyledLink to={currentValue.href}>{currentValue.text}</StyledLink>
              ) : (
                <>
                  {currentValue.screenOut && <span className="screen_out">{currentValue.screenOut}</span>}
                  {currentValue.text}
                </>
              )}
            </>
          )}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default List;
