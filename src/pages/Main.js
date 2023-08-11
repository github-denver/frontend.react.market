import React from "react";
import HeaderContainer from "@/containers/common/header";
import Hgroup from "@/components/common/hgroup";
import Quick from "@/components/common/quick";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MainWrapper = (props) => {
  return (
    <>
      <HeaderContainer />

      <section>
        <Hgroup attribute={{ title: "본문 영역", invisible: true }} />

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>매월 5일은 오!데이딜 인기상품 1DAY 특가</SwiperSlide>
        </Swiper>

        <Quick />
      </section>
      <footer>
        <Hgroup
          attribute={{ title: "회사정보 및 이용약관", invisible: true }}
        />
      </footer>
    </>
  );
};

export default MainWrapper;
