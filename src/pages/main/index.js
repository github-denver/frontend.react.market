import React from 'react';
import styled from 'styled-components';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import Quick from '@/components/quick';
import Boundary from '@/unit/boundary/standard';
import Thin from '@/unit/thin/standard';

import Stew from '@/containers/stew';
import Noodle from '@/containers/noodle';
import Curry from '@/containers/curry';
import Steak from '@/containers/steak';
import Soup from '@/containers/soup';
import Salad from '@/containers/salad';
import Baking from '@/containers/baking';
import Cake from '@/containers/cake';
import Dessert from '@/containers/dessert';
import Drink from '@/containers/drink';

import Footer from '@/components/footer';
import Hero from '@/containers/hero';
import Parallax from '@/containers/slider/swiper/parallax';
import Meal from '@/containers/meal';
import Week from '@/containers/week';

const StyledBoundary = styled(Boundary)``;

const StyledThin = styled(Thin)``;

const StyledNavigation = styled(Navigation)``;

const StyledHgroup = styled(Hgroup)`
  margin-top: 1.6rem;

  ${StyledBoundary} + & {
    margin-top: 0;
  }
`;

const Page = () => (
  <>
    {/* <StyledBoundary /> */}

    <Header />

    <section className="container">
      <StyledHgroup attributes={{ title: '본문 영역', invisible: true }} />

      <StyledNavigation />

      <Parallax attributes={{ category: 'popular' }} />

      <StyledHgroup
        attributes={{
          title: '오늘, 식사는 하셨나요?',
          description: '맛있는 거 먹고 힘내요.',
          align: 'center'
        }}
      />
      <Meal attributes={{ flicking: true, square: true, category: 'meal' }} />

      <StyledThin />

      <StyledHgroup
        attributes={{
          title: '이번 주 식사 추천',
          description: '업무에 지친 당신을 위해',
          align: 'center'
        }}
      />
      <Week attributes={{ flicking: true, square: true, category: 'week' }} />

      <StyledThin />

      <Hero attributes={{ category: 'popular' }} />

      <StyledHgroup
        attributes={{
          title: '카테고리별 레시피',
          description: ''
        }}
      />
      <Quick />

      <StyledHgroup
        attributes={{
          title: '찌개',
          description: '',
          href: '/board/stew/list/1'
        }}
      />
      <Stew attributes={{ flicking: true, square: true, category: 'stew' }} />

      <StyledHgroup
        attributes={{
          title: '면',
          description: '',
          href: '/board/noodle/list/1'
        }}
      />
      <Noodle attributes={{ flicking: true, square: true, category: 'noodle' }} />

      <StyledHgroup
        attributes={{
          title: '카레',
          description: '',
          href: '/board/curry/list/1'
        }}
      />
      <Curry attributes={{ flicking: true, square: true, category: 'curry' }} />

      <StyledHgroup
        attributes={{
          title: '스테이크',
          description: '',
          href: '/board/steak/list/1'
        }}
      />
      <Steak attributes={{ flicking: true, square: true, category: 'steak' }} />

      <StyledHgroup
        attributes={{
          title: '수프',
          description: '',
          href: '/board/soup/list/1'
        }}
      />
      <Soup attributes={{ flicking: true, square: true, category: 'soup' }} />

      <StyledHgroup
        attributes={{
          title: '샐러드',
          description: '',
          href: '/board/salad/list/1'
        }}
      />
      <Salad attributes={{ flicking: true, square: true, category: 'salad' }} />

      <StyledHgroup
        attributes={{
          title: '빵',
          description: '쉽고 재미있는 초보 베이킹',
          href: '/board/baking/list/1'
        }}
      />
      <Baking attributes={{ flicking: true, square: true, category: 'baking' }} />

      <StyledHgroup
        attributes={{
          title: '케이크',
          description: '',
          href: '/board/cake/list/1'
        }}
      />
      <Cake attributes={{ flicking: true, square: true, category: 'cake' }} />

      <StyledHgroup
        attributes={{
          title: '디저트',
          description: '',
          href: '/board/dessert/list/1'
        }}
      />
      <Dessert attributes={{ flicking: true, square: true, category: 'dessert' }} />

      <StyledHgroup
        attributes={{
          title: '음료수',
          description: '',
          href: '/board/drink/list/1'
        }}
      />
      <Drink attributes={{ flicking: true, square: true, category: 'drink' }} />
    </section>

    <Footer />
  </>
);

export default Page;
