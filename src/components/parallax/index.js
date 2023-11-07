import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Text from '@/unit/text/standard';
import Cell from '@/unit/cell/standard';

// import Swiper core and required modules
import { Pagination as SwiperPagination, A11y, Autoplay as SwiperAutoplay, Parallax as SwiperParallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.3rem;
`;

const StyledSwiperContent = styled.div`
  overflow: hidden;
  display: -webkit-box;
  font-size: 1.4rem;
  color: #fff;
  word-break: keep-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledSwiperSubject = styled.strong`
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
`;

const StyledCell = styled(Cell)`
  position: relative;
  z-index: 10;
`;

const SwiperContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 1.6rem;

  &:after {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: #000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
    content: '';
  }
`;

const StyledSwiperLink = styled(Link)`
  display: block;
`;

const StyledSwiperBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  ${({ $backgroundImageUrl }) =>
    $backgroundImageUrl &&
    css`
      background-image: url('http://localhost:5000/uploads/${$backgroundImageUrl}');
    `}

  background-size: cover;
  background-position: center;
  text-align: left;

  justify-content: center;
  align-items: flex-end;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  height: 100%;
`;

const StyledSwiper = styled(Swiper)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  /* margin-bottom: 1.6rem; */
  padding-bottom: 2.4rem;

  .swiper-pagination {
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: auto;
    font-size: 0;
  }

  .swiper-pagination-bullet {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.8rem;
    background-color: #ddd;
    opacity: 1;

    -webkit-transition: transform 0.4s;
    -moz-transition: transform 0.4s;
    -o-transition: transform 0.4s;
    transition: transform 0.4s;
  }

  .swiper-pagination-bullet-active {
    width: 1.6rem;
    background-color: #f66f66;

    -webkit-transform: scaleX(1.2);
    -ms-transform: scaleX(1.2);
    -moz-transform: scaleX(1.2);
    -o-transform: scaleX(1.2);
    transform: scaleX(1.2);
  }
`;

const StyledSwiperWrapper = styled.div`
  position: relative;
  padding-top: 100%;
`;

const ParallaxList = ({ attributes }) => {
  const { list, error, loading } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    // console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !list) {
    // console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (list.length === 0) {
    // console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
  }

  return (
    <StyledSwiperWrapper>
      <StyledSwiper
        // install Swiper modules
        modules={[SwiperPagination, A11y, SwiperAutoplay, SwiperParallax]}
        pagination={{ clickable: true }}
        parallax={true}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        watchSlidesProgress={true}
        speed={1000}
        loop={true}>
        {list.map((currentValue, index) => {
          return (
            <StyledSwiperSlide key={index}>
              <StyledSwiperBox data-swiper-parallax="100" $backgroundImageUrl={currentValue.thumbnail}>
                <StyledSwiperLink to={`http://localhost:3000/board/${currentValue.category}/read/${currentValue.number}`}>
                  <SwiperContainer data-swiper-parallax="-100">
                    <StyledCell
                      attributes={{
                        styles: {
                          second: {
                            verticalAlign: 'bottom'
                          }
                        }
                      }}>
                      <StyledSwiperSubject>{currentValue.subject}</StyledSwiperSubject>
                      <StyledSwiperContent dangerouslySetInnerHTML={{ __html: currentValue.content }} />
                    </StyledCell>
                  </SwiperContainer>
                </StyledSwiperLink>
              </StyledSwiperBox>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </StyledSwiperWrapper>
  );
};

StyledSwiperSlide.displayName = 'SwiperSlide';

export default ParallaxList;
