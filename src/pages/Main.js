import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import QuickComponent from "@/components/quick";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
        >
          <SwiperSlide>매월 5일은 오!데이딜 인기상품 1DAY 특가</SwiperSlide>
        </Swiper>

        <QuickComponent />
      </section>
      <footer>
        <HgroupComponent
          attribute={{ title: "회사정보 및 이용약관", invisible: true }}
        />
      </footer>
    </>
  );
};

export default MainPage;
