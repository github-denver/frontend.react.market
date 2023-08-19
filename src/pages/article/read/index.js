import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import NavigationComponent from "@/components/navigation";
import ThumbnailComponent from "@/components/thumbnail";
import ProfileComponent from "@/components/profile";
import FooterComponent from "@/components/footer";

const ArticleReadPage = () => {
  return (
    <>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />

        <NavigationComponent />

        <HgroupComponent
          attribute={{ level: 3, title: "집들이", invisible: true }}
        />

        <div className="read_header">
          <ThumbnailComponent
            attribute={{
              // label: "새소식",
              // timer: "00:00:00",
              // bookmark: true,
              // sticker: "<em>오늘만 이 가격!!</em>",
              title: "<em>따뜻한 26평!</em> 홈스타일링 노하우만으로 완성",
              author: false,
              // options: true,
            }}
          />

          <ProfileComponent>
            {/* <div className="box_metadata"></div> */}
          </ProfileComponent>
        </div>

        <div className="read_contents">
          <div className="metadata">
            <HgroupComponent
              attribute={{
                level: "strong",
                title: "상세정보",
                invisible: true,
              }}
            />
            <div className="box_metadata">
              <ul className="list_metadata">
                <li className="item_metadata">
                  <span className="icon_common">공간</span>
                  <span className="text_metadata">아파트</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">평수</span>
                  <span className="text_metadata">34평</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">작업</span>
                  <span className="text_metadata">반셀프</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">분야</span>
                  <span className="text_metadata">부분공사</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">가족형태</span>
                  <span className="text_metadata">취학 자녀가 있는 집</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">스타일</span>
                  <span className="text_metadata">내추럴</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">기간</span>
                  <span className="text_metadata">3주</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">예산</span>
                  <span className="text_metadata">3,000만 원</span>
                </li>
                <li className="item_metadata">
                  <span className="icon_common">세부공사</span>
                  <span className="text_metadata">
                    주방 리모델링, 조명 시공, 중문, 가벽&amp;파티션
                  </span>
                </li>
              </ul>

              <button type="button" className="button_gravity">
                <span className="text_local">5개 접어두기</span>
              </button>
            </div>
          </div>

          <hr className="boundary" />

          <div className="content">
            내용입니다.
            <br />
            내용입니다.
          </div>

          <div className="comment" style={{ display: "none" }}>
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
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default ArticleReadPage;
