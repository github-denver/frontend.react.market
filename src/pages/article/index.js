import React from "react";
import styled from "styled-components";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import NavigationComponent from "@/components/navigation";
import FooterComponent from "@/components/footer";
import { useParams } from "react-router-dom";
import ArticleListContainer from "@/containers/article";
import SelectStandardUnit from "../../unit/select/standard";

const StyledInnerList = styled.div``;

const StyledList = styled.div`
  .text_profile_content {
    overflow: hidden;
    display: -webkit-box;
    position: relative;
    margin-top: -1.2rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .text_profile_content:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 2.4rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    content: "";
  }

  .outer_sort {
    margin-left: -1.2rem;
    padding: 1.2rem;
  }

  .outer_sort .option_sort {
    width: 33.33%;
    min-width: auto;
  }
`;

const ArticleListPage = () => {
  const { category } = useParams();

  return (
    <StyledList>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />

        <NavigationComponent />

        <HgroupComponent
          attribute={{
            level: 3,
            title: "집들이",
            invisible: true,
          }}
        />

        <div className="outer_sort">
          <SelectStandardUnit
            attribute={{
              className: "option_sort",
              defaultValue: "정렬",
              options: [
                { value: "최신순", text: "최신순" },
                { value: "인기순", text: "인기순" },
              ],
            }}
          />

          <SelectStandardUnit
            attribute={{
              className: "option_sort",
              defaultValue: "주거형태",
              options: [
                { value: "원룸&오피스텔", text: "원룸&오피스텔" },
                { value: "아파트", text: "아파트" },
                { value: "빌라&연립", text: "빌라&연립" },
                { value: "단독주택", text: "단독주택" },
                { value: "사무공간", text: "사무공간" },
                { value: "상업공간", text: "상업공간" },
              ],
            }}
          />

          <SelectStandardUnit
            attribute={{
              className: "option_sort",
              defaultValue: "평수",
              options: [
                { value: "10평 이하", text: "10평 이하" },
                { value: "10평대", text: "10평대" },
                { value: "20평대", text: "20평대" },
                { value: "30평대", text: "30평대" },
                { value: "40평대", text: "40평대" },
                { value: "50평대", text: "50평대" },
                { value: "60평대", text: "60평대" },
                { value: "70평대 이상", text: "70평대 이상" },
              ],
            }}
          />
        </div>

        <hr className="boundary" />

        <StyledInnerList>
          <ArticleListContainer attribute={{ category: `${category}` }} />
        </StyledInnerList>
      </section>
      <FooterComponent />
    </StyledList>
  );
};

export default ArticleListPage;
