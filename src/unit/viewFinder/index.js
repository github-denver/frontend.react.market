import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { SlPlus } from 'react-icons/sl'
import ButtonStandardUnit from '@/unit/button/standard'
import { SlCamera } from 'react-icons/sl'
import CellUnit from '@/unit/cell'

const StyledViewFinderUploads = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 1;
`

const StyledViewFinderThumbnail = styled.img`
  width: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  pointer-events: none;
`

const StyledViewFinderThumbnailGuide = styled.div`
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
`

const StyledViewFinder = styled.div`
  position: relative;
  background-color: #f7f9fa;

  .button_common {
    position: absolute;
    bottom: 1.2rem;
    left: 50%;
    z-index: 1;
    border-radius: 3.6rem;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .button_hashtag {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    font-size: 0.1rem;
    color: transparent;
    background-color: #3498db;

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
`

const ViewFinderUnit = ({ children, attribute }) => {
  const { className, src, event, url } = attribute || {}

  const [buttons, setButtons] = useState([])
  const [draggingButton, setDraggingButton] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e, button) => {
    setDraggingButton(button)
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!draggingButton) return

    const updatedButtons = buttons.map((button) => {
      if (button.id === draggingButton.id) {
        const dx = e.clientX - draggingButton.startX
        const dy = e.clientY - draggingButton.startY

        setIsDragging(true)

        return {
          ...button,
          x: dx,
          y: dy
        }
      }
      return button
    })

    setButtons(updatedButtons)
  }

  const handleMouseUp = () => {
    setDraggingButton(null)
  }

  const handleClick = (button) => {
    if (!isDragging && !draggingButton) {
      alert(`Button ${button.id} clicked!`)
    }
  }

  const addDraggableButton = () => {
    const newButton = {
      id: new Date().getTime(),
      x: 0,
      y: 0
    }
    setButtons([...buttons, newButton])
  }

  return (
    <StyledViewFinder className={className} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} $image={src || url}>
      {src ? (
        <StyledViewFinderThumbnail src={src} alt="" />
      ) : (
        <>
          {url ? (
            <StyledViewFinderThumbnail src={`http://localhost:5000/uploads/${url}`} alt="" />
          ) : (
            <StyledViewFinderThumbnailGuide>
              <CellUnit>
                <SlCamera size="24" />
                <em className="emphasis_local">사진 올리기</em>
                <p className="text_local">이미지는 한 장만 올릴 수 있어요!</p>
              </CellUnit>
            </StyledViewFinderThumbnailGuide>
          )}
        </>
      )}

      {buttons.map((button) => (
        <div
          key={button.id}
          className="button_hashtag"
          style={{
            top: `${button.y}px`,
            left: `${button.x}px`
          }}
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
      ))}

      {src && (
        <ButtonStandardUnit
          attribute={{
            className: 'button_common',
            type: 'button',
            event: addDraggableButton,
            fill: true,
            size: 'small'
          }}>
          <span className="text_local">상품 태그 추가</span>
        </ButtonStandardUnit>
      )}

      {(!src || !url) && <StyledViewFinderUploads type="file" name="thumbnail" onChange={event} />}
    </StyledViewFinder>
  )
}

export default ViewFinderUnit
