import React from 'react';
import styled from 'styled-components';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import Quick from '@/components/quick';
import Boundary from '@/unit/boundary/standard';
import BakingList from '@/containers/baking/list';
import DessertList from '@/containers/dessert/list';
import FreshList from '@/containers/fresh/list';
import Footer from '@/components/footer';

// import Swiper core and required modules
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const StyledBoundary = styled(Boundary)``;

const StyledSwiperImage = styled.img`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  border-radius: 0.8rem;
`;

const StyledSwiper = styled(Swiper)`
  padding: 0 2rem;

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #35c5f0;
  }
`;

const StyledNavigation = styled(Navigation)`
  & + ${StyledSwiper} {
    margin-top: 2rem;
  }
`;

const StyledHgroup = styled(Hgroup)`
  margin-top: 1.6rem;

  ${StyledBoundary} + & {
    margin-top: 0;
  }
`;

const Page = () => (
  <>
    <Header />

    <section className="container">
      <StyledHgroup attributes={{ title: '본문 영역', invisible: true }} />

      <StyledNavigation />

      <StyledSwiper
        // install Swiper modules
        modules={[SwiperNavigation, SwiperPagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}>
        <StyledSwiperSlide>
          <StyledSwiperImage src="#" alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledSwiperImage src="#" alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledSwiperImage src="#" alt="" />
        </StyledSwiperSlide>
      </StyledSwiper>

      <Quick attributes={{ href: '/' }} />

      <StyledBoundary />

      <StyledHgroup
        attributes={{
          title: '쉽고 재미있는 초보 베이킹',
          description: '간단하고 쉬워요!',
          href: '/board/baking/list/1'
        }}
      />
      <BakingList attributes={{ horizon: false, category: 'baking' }} />

      <StyledHgroup
        attributes={{
          title: '내 식탁을 부탁해!',
          description: 'SNS에서 핫한 요리 모음',
          href: '/board/talk/list/1'
        }}
      />

      <StyledHgroup
        attributes={{
          title: '기분전환 디저트',
          description: '',
          href: '/board/dessert/list/1'
        }}
      />
      <DessertList attributes={{ horizon: false, category: 'dessert' }} />

      <StyledHgroup
        attributes={{
          title: '산뜻한 신선함',
          description: '',
          href: '/board/fresh/list/1'
        }}
      />
      <FreshList attributes={{ horizon: false, category: 'fresh' }} />

      <StyledHgroup
        attributes={{
          title: '스트레스 풀리는 매운맛',
          description: '',
          href: '/board/talk/list/1'
        }}
      />

      <StyledHgroup
        attributes={{
          title: '가을의 맛 뜨끈한 국물요리',
          description: '',
          href: '/board/talk/list/1'
        }}
      />
    </section>

    <Footer />
  </>
);

export default Page;
