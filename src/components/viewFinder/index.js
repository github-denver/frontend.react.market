import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SlPlus } from 'react-icons/sl';
import Button from '@/unit/button/standard';
import { SlCamera } from 'react-icons/sl';
import Cell from '@/unit/cell/standard';
import { insertTag } from '@/modules/form';
import { useDispatch } from 'react-redux';
import { TbPhoto } from 'react-icons/tb';

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
  color: #282828;

  & + ${StyledPrice} {
    margin-left: 0.6rem;
  }
`;

const StyledName = styled.span`
  ${commonStyles}

  display: block;
  font-size: 1.4rem;
  color: #282828;
`;

const StyledBrand = styled.span`
  ${commonStyles}

  font-size: 1.2rem;
  color: #282828;
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
  border-radius: 0.8rem;
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
  color: #282828;
  vertical-align: middle;

  &:before {
    position: absolute;
    top: 0.4rem;
    bottom: 0.3rem;
    left: 0;
    z-index: 1;
    width: 0.1rem;
    background-color: #282828;
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
  color: #282828;
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
  background-color: #282828;
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
  /* border-radius: 3.6rem; */
  -webkit-transform: translateX(-50%, -50%);
  -ms-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
`;

const StyledUploads = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 1;
  width: 3.6rem;
  height: 3.6rem;
  /* border: 0.1rem solid #E30B5C; */
  border-radius: 0.8rem;
  box-sizing: border-box;
  background-color: #282828;

  input[type='file'] {
    width: 3.6rem;
    height: 3.6rem;
    opacity: 0;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    z-index: 1;
    color: #fff;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

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

      input[type='file'] {
        width: 100%;
        height: 100%;
      }
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
    color: #282828;
    vertical-align: top;
  }

  .text_local {
    font-size: 1.4rem;
    color: #282828;
  }
`;

const StyledViewFinder = styled.div`
  position: relative;
  /* width: 36rem;
  margin: 0 auto; */
  background-color: #fff;

  .button_hashtag {
    width: 2rem;
    width: 5.556vw;
    height: 2rem;
    height: 5.556vw;
    border-radius: 100%;
    font-size: 0.1rem;
    color: transparent;
    background-color: #282828;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;

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
  }

  ${(props) =>
    !props.$image &&
    css`
      padding-top: 100%;
    `}
`;

const ViewFinder = ({ children, className, attributes }) => {
  const { type, src, url, tags, products, showProductId, event } = attributes || {};

  const [isHovering, setIsHovering] = useState(null);

  const personInfo = useRef();
  const imageProduct = useRef(null);

  const [createButton, setCreateButton] = useState(false);

  const [buttons, setButtons] = useState([]);
  const [draggingButton, setDraggingButton] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = React.createRef(); // 부모 컨테이너의 ref를 생성

  const handleMouseDown = (e, button) => {
    setDraggingButton(button);
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!draggingButton) return;

    // 부모 컨테이너의 크기 가져오기
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const containerHeight = containerRef.current.getBoundingClientRect().height;

    const updatedButtons = buttons.map((button) => {
      if (button.id === draggingButton.id) {
        // 마우스 위치에 따라 비율 계산
        const xPercent = ((e.clientX - containerRef.current.getBoundingClientRect().x - 10) / containerWidth) * 100;
        const yPercent = ((e.clientY - containerRef.current.getBoundingClientRect().y - 10) / containerHeight) * 100;

        setIsDragging(true);

        return {
          ...button,
          x: xPercent,
          y: yPercent
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
    // 부모 컨테이너의 크기 가져오기
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const containerHeight = containerRef.current.getBoundingClientRect().height;

    const xPercent = ((e.clientX - containerRef.current.getBoundingClientRect().x - 10) / containerWidth) * 100;
    const yPercent = ((e.clientY - containerRef.current.getBoundingClientRect().y - 10) / containerHeight) * 100;

    const newButton = {
      id: new Date().getTime(),
      x: xPercent, // 초기 위치 설정
      y: yPercent
    };

    setButtons((prevButtons) => [...prevButtons, newButton]);

    setCreateButton(false);
  };

  const handleTouchStart = (e, button) => {
    setDraggingButton(button);
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!draggingButton) return;

    // 부모 컨테이너의 크기 가져오기
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const containerHeight = containerRef.current.getBoundingClientRect().height;

    const touch = e.touches[0];
    const updatedButtons = buttons.map((button) => {
      if (button.id === draggingButton.id) {
        // 터치 위치에 따라 비율 계산
        const xPercent = ((touch.clientX - containerRef.current.getBoundingClientRect().x - 10) / containerWidth) * 100;
        const yPercent = ((touch.clientY - containerRef.current.getBoundingClientRect().y - 10) / containerHeight) * 100;

        setIsDragging(true);

        return {
          ...button,
          x: xPercent,
          y: yPercent
        };
      }

      return button;
    });

    setButtons(updatedButtons);
  };

  const handleTouchEnd = () => {
    setDraggingButton(null);
  };

  useEffect(() => {
    dispatch(insertTag({ form: type, value: buttons }));
  }, [dispatch, type, buttons]);

  return (
    <StyledViewFinder
      className={className}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      $image={src || url}
      ref={containerRef} // 부모 컨테이너의 ref를 연결
    >
      {src ? (
        <StyledThumbnail src={src} alt="1" ref={personInfo} onClick={createButton ? addPointerButton : null} />
      ) : (
        <>
          {url ? (
            <>
              <StyledThumbnail src={`http://localhost:5000/uploads/${url}`} alt="" ref={imageProduct} />

              {products.length > 0 &&
                tags.map((currentValue, index) => {
                  return (
                    // <StyledHashtag key={index} style={{ top: currentValue.y + 12, left: currentValue.x + 12, zIndex: currentValue.index }} onMouseOver={() => setIsHovering(index)} onMouseOut={() => setIsHovering(null)}>
                    <StyledHashtag key={index} style={{ top: currentValue.y + '%', left: currentValue.x + '%', zIndex: currentValue.index }} onMouseOver={() => setIsHovering(index)} onMouseOut={() => setIsHovering(null)}>
                      <StyledIcon $arrow={isHovering === index || showProductId === currentValue.productId ? true : false}>
                        <em>{currentValue.id}</em>

                        <SlPlus size={20} />
                      </StyledIcon>

                      {(isHovering === index || showProductId === currentValue.productId) && (
                        <StyledProductLayer style={{ transform: `translate(-${(currentValue.x * 100) / imageProduct.current.clientWidth}vw, 0)` }}>
                          <StyledProductOuter>
                            <StyledProductInner>
                              <StyledProductImage src={`/uploads/products/${products[index].thumbnail}`} alt={products[index].name} />

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
                                fill: true,
                                target: '_blank'
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
            top: button.y + '%',
            left: button.x + '%',
            touchAction: 'none'
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
            onTouchStart={(e) =>
              handleTouchStart(e, {
                id: button.id,
                startX: e.touches[0].clientX - button.x,
                startY: e.touches[0].clientY - button.y
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

      <StyledUploads $fill={typeof src === 'undefined' && typeof url === 'undefined' ? true : false}>
        <input type="file" name="thumbnail" onChange={event} />

        <TbPhoto size={20} />
      </StyledUploads>
    </StyledViewFinder>
  );
};

export default ViewFinder;
