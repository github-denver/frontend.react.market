import React from 'react';
import styled from 'styled-components';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import Quick from '@/components/quick';
import Boundary from '@/unit/boundary/standard';
import GalleryList from '@/containers/gallery/list';
import Footer from '@/components/footer';

// import Swiper core and required modules
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyledSwiperImage = styled.img`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  border-radius: 0.8rem;
`;

const StyledSwiper = styled(Swiper)`
  overflow: hidden;
  margin: 2rem;
  border-radius: 0.8rem;
`;

const Page = () => (
  <>
    <Header />

    <section className="container">
      <Hgroup attributes={{ title: '본문 영역', invisible: true }} />

      <Navigation />

      <StyledSwiper
        // install Swiper modules
        modules={[SwiperNavigation, SwiperPagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}>
        <StyledSwiperSlide>
          <StyledSwiperImage src="/swiper_mobile_2.jpg" alt="매월 5일은 오!데이딜 인기상품 1DAY 특가" />
        </StyledSwiperSlide>
      </StyledSwiper>

      <Quick attributes={{ href: '/' }} />

      <Boundary />

      <Hgroup
        attributes={{
          title: '쉽고 재미있는 초보 베이킹',
          description: '간단하고 쉬워요!',
          href: '/board/talk/list/1'
        }}
      />

      <GalleryList attributes={{ horizon: false, category: 'talk', limit: 4 }} />
    </section>

    <Footer />
  </>
);

export default Page;
