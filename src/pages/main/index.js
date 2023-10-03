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
import SpicyList from '@/containers/spicy/list';
import PopularList from '@/containers/popular/list';
import SoupList from '@/containers/soup/list';
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
    background-color: #fe4362;
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

      <Quick attributes={{ href: '/' }} />

      <StyledBoundary />

      <StyledHgroup
        attributes={{
          // title: '쉽고 재미있는 초보 베이킹',
          // description: '간단하고 쉬워요!',
          title: '케이크',
          href: '/board/baking/list/1'
        }}
      />
      <BakingList attributes={{ flicking: true, square: false, category: 'baking' }} />

      <StyledHgroup
        attributes={{
          title: '샐러드',
          description: '',
          href: '/board/fresh/list/1'
        }}
      />
      <FreshList attributes={{ flicking: true, square: false, category: 'fresh' }} />

      <StyledHgroup
        attributes={{
          title: '디저트',
          description: '',
          href: '/board/dessert/list/1'
        }}
      />
      <DessertList attributes={{ flicking: true, square: false, category: 'dessert' }} />

      {/* <StyledHgroup
        attributes={{
          title: '내 식탁을 부탁해!',
          description: 'hey&rdquo; bread만의 레시피로 맛있는 식탁을 차려보세요!',
          href: '/board/popular/list/1'
        }}
      />
      <PopularList attributes={{ flicking: true, square: false, category: 'popular' }} /> */}

      {/* <StyledHgroup
        attributes={{
          title: '스트레스 풀리는 매운맛',
          description: '',
          href: '/board/spicy/list/1'
        }}
      />
      <SpicyList attributes={{ flicking: true, square: false, category: 'spicy' }} />

      <StyledHgroup
        attributes={{
          title: '뜨끈한 국물요리',
          description: '',
          href: '/board/soup/list/1'
        }}
      />
      <SoupList attributes={{ flicking: true, square: false, category: 'soup' }} /> */}
    </section>

    <Footer />
  </>
);

export default Page;
