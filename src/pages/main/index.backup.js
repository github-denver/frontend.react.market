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

// import Swiper core and required modules
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, A11y, EffectFade as SwiperEffectFade, Autoplay as SwiperAutoplay, Parallax as SwiperParallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const StyledThin = styled(Thin)``;

const StyledBoundary = styled(Boundary)``;

const StyledNavigation = styled(Navigation)``;

const StyledHgroup = styled(Hgroup)`
  /* margin-top: 1.6rem; */

  ${StyledBoundary} + & {
    margin-top: 0;
  }
`;

const Page = () => {
  let speed = 1000;
  let interleaveOffset = 0.5;

  let slideProgress = 0;

  let innerOffset = 0;

  let innerTranslate = 0;

  return (
    <>
      <Header />

      <section className="container">
        <StyledHgroup attributes={{ title: '본문 영역', invisible: true }} />

        <StyledNavigation />

        {/* <StyledHgroup
          attributes={{
            title: '오늘, 이 식사 어때요?',
            description: '오늘은 이 요리에 도전해 보는 건 어떠세요?',
            align: 'center'
          }}
        /> */}
        <Swiper
          className="hero-slider hero-style"
          // install Swiper modules
          modules={[SwiperNavigation, SwiperPagination, A11y, SwiperEffectFade, SwiperAutoplay, SwiperParallax]}
          navigation
          pagination={{ clickable: true }}
          parallax={true}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          watchSlidesProgress={true}
          speed={1000}
          loop={true}
          // autoplay={{
          //   delay: 8000,
          //   disableOnInteraction: false
          // }}
        >
          <SwiperSlide style={{ height: '100%' }}>
            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(http://market24.cafe24app.com/uploads/돼지고기+김치찌개.jpg)` }} data-swiper-parallax="100">
              <div className="con123tainer" data-swiper-parallax="-100">
                <div className="inner_comm">
                  <div className="inner2_comm">
                    <div className="slide-title">
                      <h2>속이 확 풀리는 얼큰함 돼지고기 김치찌개</h2>
                    </div>

                    <div className="slide-text">
                      <p>밥 한 공기를 뚝딱하게 만드는 얼큰한 국물 맛이 일품~ 돼지고기 김치찌개를 만들었어요. 푸짐하게 넣은 돼지고기와 김치가 숟가락을 멈출 수 없게 만든답니다. 언제 먹어도 맛있는 돼지고기 김치찌개로 즐거운 식탁을 만들어보세요.</p>
                    </div>

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ height: '100%' }}>
            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(http://market24.cafe24app.com/uploads/돼지고기+김치찌개.jpg)` }} data-swiper-parallax="100">
              <div className="con123tainer" data-swiper-parallax="-100">
                <div className="inner_comm">
                  <div className="inner2_comm">
                    <div className="slide-title">
                      <h2>속이 확 풀리는 얼큰함 돼지고기 김치찌개</h2>
                    </div>

                    <div className="slide-text">
                      <p>밥 한 공기를 뚝딱하게 만드는 얼큰한 국물 맛이 일품~ 돼지고기 김치찌개를 만들었어요. 푸짐하게 넣은 돼지고기와 김치가 숟가락을 멈출 수 없게 만든답니다. 언제 먹어도 맛있는 돼지고기 김치찌개로 즐거운 식탁을 만들어보세요.</p>
                    </div>

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <StyledHgroup
          attributes={{
            title: '오늘, 식사는 하셨나요?',
            description: '맛있는 거 먹고 힘내요.',
            align: 'center'
          }}
        />
        <Stew attributes={{ flicking: true, square: true, category: 'stew' }} />

        <StyledThin />

        <StyledHgroup
          attributes={{
            title: '이번 주 식사 추천',
            description: '세심하게 고른 식사들을 추천해 드려요.',
            align: 'center'
          }}
        />
        <Noodle attributes={{ flicking: true, square: true, category: 'noodle' }} />
        {/* <Stew attributes={{ grid: true, square: true, radius: true, category: 'stew' }} /> */}

        {/* <StyledBoundary /> */}
        <StyledThin />

        <Hero attributes={{ category: 'popular' }} />

        <StyledHgroup
          attributes={{
            title: '식사 노트',
            description: ''
          }}
        />
        <ul className="list_recipe_note">
          <li className="item_recipe_note">
            <span className="date_recipe_note">2024-01-01</span> <em className="emphasis_recipe_note">밥통 카레</em> <span className="writer_recipe_note">덴버</span>
            <div className="inner_recipe_note">
              <img src="http://market24.cafe24app.com/uploads/돼지고기+김치찌개.jpg" alt="" />
              <p className="text_recipe_note">소스 색감과 질감도 다르고 생크림 양도 너무 많아서 이게 맞나 하면서 만들었는데 다행히 맛은 있었어요!</p>
            </div>
          </li>
          <li className="item_recipe_note">
            <span className="date_recipe_note">2024-01-01</span> <em className="emphasis_recipe_note">밥통 카레</em> <span className="writer_recipe_note">덴버</span>
            <div className="inner_recipe_note">
              <img src="http://market24.cafe24app.com/uploads/돼지고기+김치찌개.jpg" alt="" />
              <p className="text_recipe_note">소스 색감과 질감도 다르고 생크림 양도 너무 많아서 이게 맞나 하면서 만들었는데 다행히 맛은 있었어요!</p>
            </div>
          </li>
          <li className="item_recipe_note">
            <span className="date_recipe_note">2024-01-01</span> <em className="emphasis_recipe_note">밥통 카레</em> <span className="writer_recipe_note">덴버</span>
            <div className="inner_recipe_note">
              <img src="http://market24.cafe24app.com/uploads/돼지고기+김치찌개.jpg" alt="" />
              <p className="text_recipe_note">소스 색감과 질감도 다르고 생크림 양도 너무 많아서 이게 맞나 하면서 만들었는데 다행히 맛은 있었어요!</p>
            </div>
          </li>
        </ul>

        <StyledThin />

        <StyledHgroup
          attributes={{
            title: '카테고리별 식사',
            description: ''
          }}
        />
        <Quick attributes={{ href: '/' }} />

        {/* <StyledBoundary /> */}

        <StyledHgroup
          attributes={{
            title: '찌개',
            description: '',
            href: '/board/stew/list/1'
          }}
        />
        <Stew attributes={{ flicking: true, square: true, category: 'stew' }} />
        {/* <Stew attributes={{ grid: true, square: true, radius: true, category: 'stew' }} /> */}

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
            title: '주스',
            description: '',
            href: '/board/drink/list/1'
          }}
        />
        <Drink attributes={{ flicking: true, square: true, category: 'drink' }} />
      </section>

      <Footer />
    </>
  );
};

export default Page;
