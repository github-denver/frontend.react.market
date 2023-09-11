import React from 'react'
import HeaderContainer from '@/containers/header'
import HgroupComponent from '@/components/hgroup'
import NavigationComponent from '@/components/navigation'
import QuickComponent from '@/components/quick'
import ThumbnailUnit from '@/unit/thumbnail'
import FooterComponent from '@/components/footer'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import ListStandardUnit from '@/unit/list/standard'
import ArticleListContainer from '@/containers/board'
import GalleryListContainer from '../../containers/gallery'

const MainPage = () => {
  return (
    <>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: '본문 영역', invisible: true }} />

        <NavigationComponent />

        <div className="___swiper___">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}>
            <SwiperSlide>
              <img className="image_common" src="/swiper_mobile_2.jpg" alt="매월 5일은 오!데이딜 인기상품 1DAY 특가" />
              {/* <img src="/swiper.jpg" alt="매월 5일은 오!데이딜 인기상품 1DAY 특가" /> */}
            </SwiperSlide>
          </Swiper>
        </div>

        <QuickComponent />

        <hr className="boundary" />

        <HgroupComponent
          attribute={{
            title: '쉽고 재미있는 초보 베이킹',
            description: '간단하고 쉬워요!',
            detail: true,
            href: '/board/talk/list/1'
          }}
        />

        <GalleryListContainer attribute={{ horizon: false, category: 'talk', limit: 4 }} />

        <hr className="boundary" />
      </section>
      <FooterComponent />
    </>
  )
}

export default MainPage
