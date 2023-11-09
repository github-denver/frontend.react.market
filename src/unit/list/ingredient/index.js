import React from 'react';
import styled from 'styled-components';
import Cell from '@/unit/cell/standard';
import Half from '@/unit/half/standard';
import Text from '@/unit/text/standard';
import { Link } from 'react-router-dom';

const StyledText = styled(Text)`
  display: inline-block;
  margin: 0;
  color: #666;
  vertical-align: middle;
`;

const StyledLink = styled(Link)`
  overflow: hidden;
  display: block;
  font-weight: 500;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledHalf = styled(Half)`
  & > div:last-child {
    width: 30%;
  }

  & > div:first-child {
    width: 70%;
  }
`;

const StyledCell = styled(Cell)`
  height: 6rem;
`;

const StyledBox = styled.div`
  overflow: hidden;
  padding-left: 1.2rem;
`;

const StyledThumbnail = styled.img`
  float: left;
  width: 6rem;
`;

const StyledItem = styled.li`
  margin-top: 1.2rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListIngredient = styled.ul`
  padding: 0 1.2rem;
`;

const ListIngredient = ({ className, attributes }) => {
  const { products } = attributes || {};

  const comma = (price) => String(price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

  return (
    <StyledListIngredient className={className}>
      {products.map((currentValue, index) => (
        <StyledItem key={index}>
          <StyledThumbnail src={`/uploads/products/${currentValue.thumbnail}`} alt="" />

          <StyledBox>
            <StyledCell>
              <StyledHalf
                attributes={{
                  first: (
                    <StyledLink to={currentValue.url} target="_blank">
                      {currentValue.name}
                    </StyledLink>
                  ),
                  second: (
                    <StyledText
                      attributes={{
                        text: `${comma(currentValue.price)}원`
                      }}
                    />
                  )
                }}
              />
            </StyledCell>
          </StyledBox>
        </StyledItem>
      ))}
    </StyledListIngredient>
  );
};

export default ListIngredient;
