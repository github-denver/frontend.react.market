import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import ThumbnailComponent from "@/components/thumbnail";
import ProfileComponent from "@/components/profile";
import FooterComponent from "@/components/footer";

const ArticleReadPage = () => {
  return (
    <>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />

        <HgroupComponent
          attribute={{ level: 3, title: "집들이", invisible: false }}
        />

        <div className="read_header">
          <ThumbnailComponent
            attribute={{
              // label: "새소식",
              // timer: "00:00:00",
              // bookmark: true,
              // sticker: "<em>오늘만 이 가격!!</em>",
              title: "<em>따뜻한 26평!</em>홈스타일링 노하우만으로 완성",
              author: false,
              // options: true,
            }}
          />

          <ProfileComponent>
            <dl>
              <dt>공간</dt>
              <dd>아파트</dd>
              <dt>평수</dt>
              <dd>34평</dd>
              <dt>분야</dt>
              <dd>부분공사</dd>
              <dt>가족형태</dt>
              <dd>취학 자녀가 있는 집</dd>
            </dl>
          </ProfileComponent>
        </div>
        {/* read_header */}

        <div className="read_contents">
          <div className="metadata">
            <HgroupComponent
              attribute={{
                level: "strong",
                title: "상세정보",
                invisible: false,
              }}
            />

            <dl>
              <dt>공간</dt>
              <dd>아파트</dd>
              <dt>평수</dt>
              <dd>34평</dd>
              <dt>작업</dt>
              <dd>반셀프</dd>
              <dt>분야</dt>
              <dd>부분공사</dd>
              <dt>가족형태</dt>
              <dd>취학 자녀가 있는 집</dd>
              <dt>스타일</dt>
              <dd>내추럴</dd>
              <dt>기간</dt>
              <dd>3주</dd>
              <dt>예산</dt>
              <dd>3,000만 원</dd>
              <dt>세부공사</dt>
              <dd>주방 리모델링, 조명 시공, 중문, 가벽&amp;파티션</dd>
            </dl>

            <button type="button">
              <span>9개 접어두기</span>
            </button>
          </div>
          {/* metadata */}

          <div className="content">내용입니다.</div>

          <div className="comment">
            <HgroupComponent attribute={{ level: "strong", title: "댓글" }} />

            <div>
              <img src="/profile.png" alt="" />
              <Link to="/">로그인 후 작성 가능합니다.</Link>
              {/* <input type="text" /> */}
              <button type="button">
                <span>등록</span>
              </button>
            </div>

            <ul>
              <li>
                <ProfileComponent />
                <p>안녕하세요.</p>

                <ul>
                  <li>등록일 9999-99-99</li>
                  <li>공감 9999</li>
                  <li>
                    <button type="button">
                      <span>댓글 달기</span>
                    </button>

                    {/* <div>
                      <img src="/profile.png" alt="" />
                      <input type="text" />
                      <button type="button">
                        <span>등록</span>
                      </button>
                    </div> */}

                    {/* <ul><li> .. </li></ul> */}
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="paging">
              <li>
                <Link to="/">이전</Link>
              </li>
              <li>
                <Link to="/">1</Link>
              </li>
              <li>
                <Link to="/">2</Link>
              </li>
              <li>
                <Link to="/">3</Link>
              </li>
              <li>
                <Link to="/">4</Link>
              </li>
              <li>
                <Link to="/">5</Link>
              </li>
              <li>
                <Link to="/">6</Link>
              </li>
              <li>
                <Link to="/">7</Link>
              </li>
              <li>
                <Link to="/">8</Link>
              </li>
              <li>
                <Link to="/">9</Link>
              </li>
              <li>
                <Link to="/">10</Link>
              </li>
              <li>
                <Link to="/">다음</Link>
              </li>
            </ul>
          </div>
          {/* comment */}
        </div>
        {/* read_contents */}
      </section>
      <FooterComponent />
    </>
  );
};

export default ArticleReadPage;
