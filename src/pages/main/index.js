import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import NavigationComponent from "@/components/navigation";
import QuickComponent from "@/components/quick";
import ThumbnailComponent from "@/components/thumbnail";
import FooterComponent from "@/components/footer";

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

        <NavigationComponent />

        <div className="___swiper___">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
          >
            <SwiperSlide>
              <img
                className="image_common"
                src="/swiper_mobile_2.jpg"
                alt="매월 5일은 오!데이딜 인기상품 1DAY 특가"
              />
              {/* <img src="/swiper.jpg" alt="매월 5일은 오!데이딜 인기상품 1DAY 특가" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image_common"
                src="/swiper_mobile_2.jpg"
                alt="매월 5일은 오!데이딜 인기상품 1DAY 특가"
              />
              {/* <img src="/swiper.jpg" alt="매월 5일은 오!데이딜 인기상품 1DAY 특가" /> */}
            </SwiperSlide>
          </Swiper>
        </div>

        <QuickComponent />

        <HgroupComponent
          attribute={{ title: "주간 20평대 집들이 best", invisible: false }}
        />

        <ul>
          <li>
            <ThumbnailComponent
              attribute={{
                label: 1,
                timer: "00:00:00",
                bookmark: true,
                sticker: "<em>오늘만 이 가격!!</em>",
                title: "<em>따뜻한 26평!</em>홈스타일링 노하우만으로 완성",
              }}
            />
          </li>
          <li className="item_quick">
            <ThumbnailComponent
              attribute={{
                label: 1,
                timer: "00:00:00",
                bookmark: true,
                sticker: "<em>오늘만 이 가격!!</em>",
                title: "<em>따뜻한 26평!</em>홈스타일링 노하우만으로 완성",
              }}
            />
          </li>
        </ul>
      </section>
      <FooterComponent />
    </>
  );
};

export default MainPage;
