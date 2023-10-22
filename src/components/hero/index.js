import React from 'react';
import styled, { css } from 'styled-components';
import Thumbnail from '@/unit/thumbnail/rectangle/list';
import Text from '@/unit/text/standard';

// import Swiper core and required modules
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, A11y, EffectFade as SwiperEffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { TfiTimer } from 'react-icons/tfi';
import { LuBarChart } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.2rem;
`;

const StyledSwiperImage = styled.img`
  width: 100%;
  border-radius: 0.8rem;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 2rem;
  box-sizing: border-box;

  /*
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #282828;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    content: '';
  }
  */

  .link_common {
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    padding: 0 1.2rem 1.2rem; */

    ${StyledSwiperImage} {
      margin-top: 1.6rem;
    }
  }

  strong {
    font-weight: 500;
    font-size: 2rem;
    color: #282828;
    word-break: keep-all;
  }

  svg {
    display: inline-block;
    color: #282828;
    vertical-align: middle;

    & + .text_local {
      margin-left: 0.8rem;
    }
  }

  .text_local {
    display: inline-block;
    font-weight: 300;
    font-size: 1.4rem;
    color: #282828;
    vertical-align: middle;
  }

  ul {
    margin: 0.8rem 0 0 -0.8rem;
    font-size: 0;
  }

  li {
    display: inline-block;
    margin-left: 0.8rem;
    vertical-align: middle;
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: static;
    top: auto;
    bottom: auto;
    left: auto;
    /* margin-top: 1.2rem; */
    font-size: 0;
  }

  .swiper-pagination-bullet {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.8rem;
    background-color: #fafafa;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 1.6rem;
    background-color: #282828;
  }
`;

const HeroList = ({ attributes }) => {
  const { list, error, loading } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !list) {
    console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (list.length === 0) {
    console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
  }

  return (
    <StyledSwiper
      // install Swiper modules
      modules={[SwiperNavigation, SwiperPagination, A11y, SwiperEffectFade]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={16}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
      autoHeight={true}
      // effect="fade"
    >
      {list.map((currentValue, index) => (
        <StyledSwiperSlide key={index}>
          <Link to={`http://localhost:3000/board/${currentValue.category}/read/${currentValue.number}`} className="link_common">
            <strong>{currentValue.subject}</strong>

            <ul>
              <li>
                <span className="screen_out">난이도</span>
                <LuBarChart size={20} />
                <span className="text_local">{currentValue.level}</span>
              </li>
              <li>
                <span className="screen_out">조리 시간</span>
                <TfiTimer size={20} />
                <span className="text_local">{currentValue.time}</span>
              </li>
            </ul>
            <StyledSwiperImage src={`http://localhost:5000/uploads/${currentValue.thumbnail}`} alt="" />
          </Link>
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default HeroList;
