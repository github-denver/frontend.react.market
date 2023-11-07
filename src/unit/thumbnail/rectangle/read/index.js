import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SlPlus } from 'react-icons/sl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const commonStyles = css`
  display: inline-block;
  margin-top: 0.2rem;
  vertical-align: top;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledPrice = styled.span`
  ${commonStyles}

  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1.5rem;
`;

const StyledDiscount = styled.em`
  ${commonStyles}

  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;

  & + ${StyledPrice} {
    margin-left: 0.6rem;
  }
`;

const StyledName = styled.span`
  ${commonStyles}

  display: block;
  font-size: 1.3rem;
  color: #000;
`;

const StyledBrand = styled.span`
  ${commonStyles}

  font-size: 1.3rem;
  color: #000;
`;

const StyledDetail = styled.div`
  overflow: hidden;
  padding-left: 1.2rem;
  text-align: left;
`;

const StyledProductImage = styled.img`
  float: left;
  width: 8.4rem;
  width: 23.333vw;
  max-width: none;
  height: 8.4rem;
  height: 23.333vw;
`;

const StyledProductInner = styled.div`
  min-width: 25.6rem;
  min-width: 71.111vw;

  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

const StyledProductOuter = styled(Link)`
  display: block;
  padding: 0.8rem;
  padding: 2.222vw;
  border-radius: 0.8rem;
  border-radius: 2.222vw;
  background-color: #fff;
`;

const StyledProductLayer = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  margin-bottom: -0.1rem;
  margin-bottom: -0.278vw;

  &:before {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;
    content: '';
  }

  &:after {
    display: block;
    clear: both;
    content: '';
  }

  ${({ $isBottom }) =>
    $isBottom
      ? css`
          bottom: 4rem;
          bottom: 11.111vw;
          z-index: 10;

          &:before {
            bottom: -2rem;
            padding-bottom: 2rem;
          }
        `
      : css`
          top: 4rem;
          top: 11.111vw;
          z-index: 10;

          &:before {
            top: -2rem;
            padding-top: 2rem;
          }
        `}
`;

const StyledText = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 1rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  color: #000;
  vertical-align: middle;

  &:before {
    position: absolute;
    top: 0.4rem;
    bottom: 0.3rem;
    left: 0;
    z-index: 1;
    width: 0.1rem;
    background-color: #000;
    vertical-align: middle;
    content: '';
  }

  &:nth-of-type(1) {
    margin-left: 0;
    padding-left: 0;

    &:before {
      display: none;
    }
  }
`;

const StyledSubject = styled.strong`
  overflow: hidden;
  display: -webkit-box;
  font-weight: 500;
  font-size: 2.4rem;
  color: #000;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 1.2rem;
  padding: 3.333vw;
`;

const StyledShadow = styled.div`
  display: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 100%);

  ${StyledSubject},
  ${StyledText} {
    color: #fff;
  }
`;

// const StyledImage = styled.img`
const StyledImage = styled(LazyLoadImage)`
  overflow: hidden;
  width: 100%;
  border-radius: 0;
`;

const StyledIcon = styled.button`
  display: inline-block;
  width: 2rem;
  width: 5.556vw;
  height: 2rem;
  height: 5.556vw;
  border: 0.1rem solid #fff;
  border-radius: 0.4rem;
  box-sizing: border-box;
  font-size: 0.1rem;
  color: transparent;
  background-color: #987060;
  vertical-align: top;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 2rem;
    top: 5.556vw;
    left: 0;
    z-index: 1;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-top: 2.778vw solid transparent;
    border-right: 1rem solid transparent;
    border-right: 2.778vw solid transparent;
    border-bottom: 1rem solid #fff;
    border-bottom: 2.778vw solid #fff;
    border-left: 1rem solid transparent;
    border-left: 2.778vw solid transparent;
    visibility: hidden;
    content: '';
  }

  ${({ $arrow }) =>
    $arrow &&
    css`
      &:before {
        visibility: visible;
      }
    `}

  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 2rem;
    width: 5.556vw;
    height: 2rem;
    height: 5.556vw;
    color: #fff;
  }

  ${({ $isBottom }) =>
    $isBottom
      ? css`
          &:before {
            top: auto;
            bottom: 2rem;
            bottom: 5.556vw;
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        `
      : css``}
`;

const StyledHashtag = styled.div`
  position: absolute;
`;

const StyledThumbnail = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;

  [class*='lazy-load-image'] {
    width: 100%;
  }

  ${({ $radius }) =>
    $radius &&
    css`
      margin: 1.2rem;

      ${StyledShadow},
      ${StyledImage} {
        border-radius: 0.8rem;
      }
    `}
`;

const Thumbnail = ({ className, attributes }) => {
  const { radius, image, subject, level, time, tags, products, showProductId } = attributes || {};

  const [isHovering, setIsHovering] = useState(null);

  const imageProduct = useRef(null);
  const layerProduct = useRef(null);

  const [isBottom, setIsBottom] = useState(false);

  const handleHoverHashtag = (index) => {
    setIsBottom(() => false);

    if (imageProduct.current) {
      setTimeout(() => {
        if (layerProduct.current && layerProduct.current.getBoundingClientRect().top > imageProduct.current.getBoundingClientRect().height) setIsBottom(() => true);
      }, 1);
    }

    setIsHovering(index);
  };

  useEffect(() => {
    setIsBottom(() => false);

    if (imageProduct.current) {
      setTimeout(() => {
        if (layerProduct.current && layerProduct.current.getBoundingClientRect().top > imageProduct.current.getBoundingClientRect().height) setIsBottom(() => true);
      }, 1);
    }
  }, [showProductId]);

  const comma = (str) => {
    return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <StyledThumbnail className={className} $radius={radius}>
      <p className="screen_out">thumbnail → rectangle → read → index.js</p>

      <div ref={imageProduct}>
        <StyledImage src={`/uploads/${image}`} alt="" effect="blur" />
      </div>

      {products.length > 0 &&
        tags.map((currentValue, index) => {
          return (
            <StyledHashtag key={index} style={{ top: currentValue.y + '%', left: currentValue.x + '%', zIndex: currentValue.index }} onMouseEnter={() => handleHoverHashtag(index)} onMouseLeave={() => setIsHovering(null)}>
              <StyledIcon $arrow={isHovering === index || showProductId === currentValue.productId ? true : false} $isBottom={isBottom}>
                <em className="emphasis_hashtag">{currentValue.id}</em>

                {/* <SlPlus size={18} /> */}
              </StyledIcon>

              {(isHovering === index || showProductId === currentValue.productId) && (
                <StyledProductLayer style={{ transform: `translate(-${currentValue.x}%, 0)` }} $isBottom={isBottom} ref={layerProduct}>
                  <StyledProductOuter to={products[index].url} target="_blank">
                    <StyledProductInner>
                      <StyledProductImage src={`/uploads/products/${products[index].thumbnail}`} alt={products[index].name} />

                      <StyledDetail>
                        <StyledBrand>{products[index].brand}</StyledBrand>
                        <StyledName>{products[index].name}</StyledName>
                        {parseInt(products[index].discount) !== 0 && <StyledDiscount>{products[index].discount}%</StyledDiscount>}
                        <StyledPrice>{comma(products[index].price)}원</StyledPrice>
                      </StyledDetail>
                    </StyledProductInner>
                  </StyledProductOuter>
                </StyledProductLayer>
              )}
            </StyledHashtag>
          );
        })}

      <StyledShadow>
        <StyledBox>
          <StyledSubject dangerouslySetInnerHTML={{ __html: subject }} />
          <StyledText>{level}</StyledText>
          <StyledText>{time}</StyledText>
        </StyledBox>
      </StyledShadow>
    </StyledThumbnail>
  );
};

export default Thumbnail;
