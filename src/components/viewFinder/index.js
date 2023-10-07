import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SlPlus } from 'react-icons/sl';
import Button from '@/unit/button/standard';
import { SlCamera } from 'react-icons/sl';
import Cell from '@/unit/cell/standard';
import { insertTag } from '@/modules/form';
import { useDispatch } from 'react-redux';

const commonStyles = css`
  display: inline-block;
  margin-top: 0.2rem;
  vertical-align: top;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledButton2 = styled(Button)`
  display: block;
  margin-top: 1.2rem;
  font-size: 1.4rem;
`;

const StyledPrice = styled.span`
  ${commonStyles}

  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1.6rem;
`;

const StyledDiscount = styled.em`
  ${commonStyles}

  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: #fe4362;

  & + ${StyledPrice} {
    margin-left: 0.6rem;
  }
`;

const StyledName = styled.span`
  ${commonStyles}

  display: block;
  font-size: 1.4rem;
  color: #343434;
`;

const StyledBrand = styled.span`
  ${commonStyles}

  font-size: 1.2rem;
  color: #666;
`;

const StyledDetail = styled.div`
  overflow: hidden;
  padding-left: 1.2rem;
  text-align: left;
`;

const StyledProductImage = styled.img`
  float: left;
  width: 8.4rem;
  max-width: none;
  height: 8.4rem;
`;

const StyledProductInner = styled.div`
  min-width: 25.6rem;

  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

const StyledProductOuter = styled.div`
  padding: 1.2rem;
  border-radius: 0.4rem;
  background-color: #fff;
`;

const StyledProductLayer = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 10;

  &:before {
    position: absolute;
    top: -2rem;
    right: 0;
    left: 0;
    z-index: 1;
    padding-top: 2rem;
    content: '';
  }

  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

const StyledText = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 1rem;
  padding-left: 1rem;
  font-size: 1.6rem;
  color: #666;
  vertical-align: middle;

  &:before {
    position: absolute;
    top: 0.4rem;
    bottom: 0.3rem;
    left: 0;
    z-index: 1;
    width: 0.1rem;
    background-color: #ccc;
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
  color: #343434;
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

const StyledImage = styled.img`
  overflow: hidden;
  width: 100%;
  border-radius: 0;
`;

const StyledIcon = styled.button`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0 none;
  border-radius: 100%;
  font-size: 0.1rem;
  color: transparent;
  background-color: #fe4362;
  vertical-align: top;
  // cursor: pointer;

  &:before {
    position: absolute;
    top: 2rem;
    left: 0;
    z-index: 1;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #fff;
    border-left: 1rem solid transparent;
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
    color: #fff;
  }
`;

const StyledHashtag = styled.div`
  position: absolute;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  z-index: 10;
  border-radius: 3.6rem;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
`;

const StyledUploads = styled.input`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 1;
  width: 3.6rem;
  height: 3.6rem;
  opacity: 1;
  // cursor: pointer;

  ${({ $fill }) =>
    $fill &&
    css`
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: auto;
      height: auto;
      opacity: 0;
    `}
`;

const StyledThumbnail = styled.img`
  width: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

const StyledGuide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  text-align: center;

  svg {
    display: block;
    margin: 0 auto;
  }

  svg + .emphasis_local {
    margin-top: 1.2rem;
  }

  .emphasis_local {
    display: inline-block;
    font-weight: 500;
    font-size: 1.6rem;
    color: #828c94;
    vertical-align: top;
  }

  .text_local {
    font-size: 1.4rem;
    color: #828c94;
  }
`;

const StyledViewFinder = styled.div`
  position: relative;
  background-color: #f7f9fa;

  .button_hashtag {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    font-size: 0.1rem;
    color: transparent;
    background-color: #fe4362;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      color: #fff;
    }
  }

  ${(props) =>
    !props.$image &&
    css`
      padding-top: 100%;
    `}
`;

const ViewFinder = ({ children, className, attributes }) => {
  const { src, url, tags, products, showProductId, event } = attributes || {};

  const [isHovering, setIsHovering] = useState(null);

  const personInfo = useRef();

  const [createButton, setCreateButton] = useState(false);

  const [buttons, setButtons] = useState([]);
  const [draggingButton, setDraggingButton] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e, button) => {
    setDraggingButton(button);
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!draggingButton) return;

    const updatedButtons = buttons.map((button) => {
      if (button.id === draggingButton.id) {
        const dx = e.clientX - draggingButton.startX;
        const dy = e.clientY - draggingButton.startY;

        setIsDragging(true);

        return {
          ...button,
          x: dx,
          y: dy
        };
      }
      return button;
    });

    setButtons(updatedButtons);
  };

  const handleInputChange = (id, e) => {
    const updatedButtons = buttons.map((button) => {
      if (button.id === id) {
        return {
          ...button,
          productId: e.target.value
        };
      }

      return button;
    });

    setButtons(updatedButtons);
  };

  const handleMouseUp = () => {
    setDraggingButton(null);
  };

  const handleClick = (button) => {
    if (!isDragging && !draggingButton) {
      alert(`Button ${button.id} clicked!`);
    }
  };

  const dispatch = useDispatch();

  const addDraggableButton = () => {
    setCreateButton(true);
  };

  const addPointerButton = (e) => {
    const x = e.clientX - personInfo.current.getBoundingClientRect().left;
    const y = e.clientY - personInfo.current.getBoundingClientRect().top;
    const newButton = {
      id: new Date().getTime(),
      x: x - 10,
      y: y - 10
    };

    setButtons((prevButtons) => [...prevButtons, newButton]);

    setCreateButton(false);
  };

  useEffect(() => {
    dispatch(insertTag(buttons));
  }, [dispatch, buttons]);

  return (
    <StyledViewFinder className={className} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} $image={src || url}>
      {src ? (
        <StyledThumbnail src={src} alt="1" ref={personInfo} onClick={createButton ? addPointerButton : null} />
      ) : (
        <>
          {url ? (
            <>
              <StyledThumbnail src={`http://localhost:5000/uploads/${url}`} alt="2" />

              {products.length > 0 &&
                tags.map((currentValue, index) => {
                  return (
                    <StyledHashtag key={index} style={{ top: currentValue.y + 12, left: currentValue.x + 12, zIndex: currentValue.index }} onMouseOver={() => setIsHovering(index)} onMouseOut={() => setIsHovering(null)}>
                      <StyledIcon $arrow={isHovering === index || showProductId === currentValue.productId ? true : false}>
                        {currentValue.id}

                        <SlPlus size={20} />
                      </StyledIcon>

                      {(isHovering === index || showProductId === currentValue.productId) && (
                        <StyledProductLayer style={{ transform: `translate(-${currentValue.x}px, 0)` }}>
                          <StyledProductOuter>
                            <StyledProductInner>
                              <StyledProductImage src={`/uploads/${products[index].thumbnail}`} alt={products[index].name} />

                              <StyledDetail>
                                <StyledBrand>{products[index].brand}</StyledBrand>
                                <StyledName>{products[index].name}</StyledName>
                                <StyledDiscount>{products[index].discount}%</StyledDiscount>
                                <StyledPrice>{products[index].price}</StyledPrice>
                              </StyledDetail>
                            </StyledProductInner>

                            <StyledButton2
                              attributes={{
                                type: 'link',
                                href: products[index].url,
                                fill: true
                              }}>
                              <span className="text_local">구매1</span>
                            </StyledButton2>
                          </StyledProductOuter>
                        </StyledProductLayer>
                      )}
                    </StyledHashtag>
                  );
                })}
            </>
          ) : (
            <StyledGuide>
              <Cell>
                <SlCamera size="24" />
                <em className="emphasis_local">사진 올리기</em>
                <p className="text_local">이미지는 한 장만 올릴 수 있어요!</p>
              </Cell>
            </StyledGuide>
          )}
        </>
      )}
      {buttons.map((button) => (
        <div
          key={button.id}
          style={{
            position: 'absolute',
            zIndex: 10,
            top: button.y,
            left: button.x
          }}>
          <div
            className="button_hashtag"
            onMouseDown={(e) =>
              handleMouseDown(e, {
                id: button.id,
                startX: e.clientX - button.x,
                startY: e.clientY - button.y
              })
            }
            onClick={() => handleClick(button)}>
            Button {button.id}
            <SlPlus size={20} />
          </div>

          <input type="text" onChange={(e) => handleInputChange(button.id, e)} />
        </div>
      ))}
      {src && (
        <StyledButton
          attributes={{
            type: 'button',
            event: addDraggableButton,
            fill: true,
            size: 'small'
          }}>
          <span className="text_local">상품 태그 추가</span>
        </StyledButton>
      )}

      <StyledUploads type="file" name="thumbnail" onChange={event} $fill={typeof src === 'undefined' && typeof url === 'undefined' ? true : false} />
    </StyledViewFinder>
  );
};

export default ViewFinder;
