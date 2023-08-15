import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import ThumbnailComponent from "@/components/thumbnail";
import FooterComponent from "@/components/footer";

const ArticleListPage = () => {
  return (
    <>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />

        <HgroupComponent
          attribute={{ level: 3, title: "집들이", invisible: false }}
        />

        <select defaultValue="인기순">
          <option value="정렬">정렬</option>
          <option value="최신순">최신순</option>
          <option value="인기순">인기순</option>
        </select>

        <select defaultValue="원룸&amp;오피스텔">
          <option value="주거형태">주거형태</option>
          <option value="원룸&amp;오피스텔">원룸&amp;오피스텔</option>
          <option value="아파트">아파트</option>
          <option value="빌라&amp;연립">빌라&amp;연립</option>
          <option value="단독주택">단독주택</option>
          <option value="사무공간">사무공간</option>
          <option value="상업공간">상업공간</option>
        </select>

        <select defaultValue="10평 이하">
          <option value="평수">평수</option>
          <option value="10평 이하">10평 이하</option>
          <option value="10평대">10평대</option>
          <option value="20평대">20평대</option>
          <option value="30평대">30평대</option>
          <option value="40평대">40평대</option>
          <option value="50평대">50평대</option>
          <option value="60평대">60평대</option>
          <option value="70평대 이상">70평대 이상</option>
        </select>

        <ul>
          <li>
            <ThumbnailComponent
              attribute={{
                label: "새소식",
                // timer: "00:00:00",
                bookmark: true,
                // sticker: "<em>오늘만 이 가격!!</em>",
                title: "<em>따뜻한 26평!</em>홈스타일링 노하우만으로 완성",
                options: true,
              }}
            />
          </li>
          <li>
            <ThumbnailComponent
              attribute={{
                label: "새소식",
                // timer: "00:00:00",
                bookmark: true,
                // sticker: "<em>오늘만 이 가격!!</em>",
                title: "<em>따뜻한 26평!</em>홈스타일링 노하우만으로 완성",
                options: true,
              }}
            />
          </li>
        </ul>
      </section>
      <FooterComponent />
    </>
  );
};

export default ArticleListPage;
