import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlHome, SlArrowDown, SlHandbag, SlWrench } from "react-icons/sl";
import NavigationComponent from "@/components/navigation";

const StyledUtility = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  text-align: left;

  .inner_utility {
    overflow: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    max-width: 27rem;
    padding: 2.6rem 1.6rem;
    box-sizing: border-box;
    background-color: #fff;
  }

  .title_common {
    display: inline-block;
    vertical-align: middle;
  }
  .title_common .link_common {
    display: block;
    width: 7.4rem;
    height: 2.6rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;
  }

  .list_gravity {
    margin: 2rem 0 0 -0.8rem;
  }

  .list_gravity .item_gravity {
    display: inline-block;
    width: 50%;
    padding-left: 0.8rem;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .list_gravity .button_gravity {
    display: block;
    padding: 1.4rem 0;
    border: 0.1rem solid #35c5f0;
    border-radius: 0.4rem;
    background-color: #fff;
    color: #35c5f0;
    line-height: 1;
    text-align: center;
  }

  .list_gravity .button_gravity .text_locallocal {
    display: inline-block;
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .list_gravity .button_gravity.fill {
    background-color: #35c5f0;
  }

  .list_gravity .button_gravity.fill .text_locallocal {
    color: #fff;
  }

  .list_service {
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
  }

  .list_service .item_service {
    margin-top: 0.4rem;
  }

  .list_service .item_service:first-child {
    margin-top: 0;
  }

  .list_service .button_service {
    display: block;
    position: relative;
    width: 100%;
    padding: 0.8rem 4rem 0.8rem 1.4rem;
    border: 0 none;
    box-sizing: border-box;
    background-color: transparent;
    text-align: left;
    cursor: pointer;
  }

  .list_service .button_service svg:first-child {
    display: inline-block;
    vertical-align: middle;
  }

  .list_service .button_service svg:first-child + .text_local {
    margin-left: 0.8rem;
  }

  .list_service .button_service .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.6rem;
    vertical-align: middle;
  }

  .list_service .button_service .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
  }

  .list_service + .list_menu {
    margin-top: -0.1rem;
  }

  .list_menu {
    padding: 2rem 0;
    border-top: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
  }

  .list_menu .item_menu {
    margin-top: 0.4rem;
  }

  .list_menu .item_menu:first-child {
    margin-top: 0;
  }

  .list_menu .link_menu {
    display: inline-block;
    padding: 0.95rem 1.4rem;
    vertical-align: middle;
  }

  .list_menu .link_menu .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .list_menu + .list_horizontal {
    border-top: 0 none;
  }

  .list_horizontal {
    overflow: auto;
    margin: -0.4rem 0 0 -0.4rem;
    padding: 2rem 0;
    border-top: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
    white-space: nowrap;
  }

  .list_horizontal .item_horizontal {
    display: inline-block;
    margin: 0.4rem 0 0 0.4rem;
    vertical-align: middle;
  }

  .list_horizontal .link_horizontal {
    display: inline-block;
    padding: 0.95rem 0.4rem;
    vertical-align: middle;
  }

  .list_horizontal .link_horizontal .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .dimmed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #000;
    opacity: 0.5;
  }
`;

const UtilityComponent = ({ attribute }) => {
  const { user, handleLogoutClick } = attribute;

  return (
    <>
      <StyledUtility>
        <div className="inner_utility">
          <strong className="title_common">
            <Link to="/" className="link_common">
              <span className="ir_wa">오늘의 집</span>
            </Link>
          </strong>

          <ul className="list_gravity">
            {user ? (
              <>
                <li className="item_gravity">
                  <button
                    type="button"
                    className="button_gravity"
                    onClick={handleLogoutClick}
                  >
                    <span className="text_locallocal">로그아웃</span>
                  </button>
                </li>
                <li className="item_gravity">
                  <Link to="/member/login" className="button_gravity">
                    <span className="text_locallocal">마이페이지</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="item_gravity">
                  <Link to="/member/login" className="button_gravity">
                    <span className="text_locallocal">로그인</span>
                  </Link>
                </li>
                <li className="item_gravity">
                  <Link to="/member/register" className="button_gravity fill">
                    <span className="text_locallocal">회원가입</span>
                  </Link>
                </li>
              </>
            )}
          </ul>

          <ul className="list_service">
            <li className="item_service">
              <button type="button" className="button_service">
                <SlHome size={24} />
                <span className="text_local">커뮤니티</span>
                <SlArrowDown size={12} />
              </button>

              {/* <NavigationComponent /> */}
            </li>
            <li className="item_service">
              <button type="button" className="button_service">
                <SlHandbag size={24} />
                <span className="text_local">쇼핑</span>
                <SlArrowDown size={12} />
              </button>

              <ul style={{ display: "none" }}>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <button type="button">
                    <span>카테고리</span>
                  </button>
                  <ul>
                    <li>
                      <Link to="/">가구</Link>
                    </li>
                    <li>
                      <Link to="/">패브릭</Link>
                    </li>
                    <li>
                      <Link to="/">가전·디지털</Link>
                    </li>
                    <li>
                      <Link to="/">주방용품</Link>
                    </li>
                    <li>
                      <Link to="/">식품</Link>
                    </li>
                    <li>
                      <Link to="/">데코·식물</Link>
                    </li>
                    <li>
                      <Link to="/">조명</Link>
                    </li>
                    <li>
                      <Link to="/">수납·정리</Link>
                    </li>
                    <li>
                      <Link to="/">생활용품</Link>
                    </li>
                    <li>
                      <Link to="/">생필품</Link>
                    </li>
                    <li>
                      <Link to="/">유아·아동</Link>
                    </li>
                    <li>
                      <Link to="/">반려동물</Link>
                    </li>
                    <li>
                      <Link to="/">캠핑·레저</Link>
                    </li>
                    <li>
                      <Link to="/">공구·DIY</Link>
                    </li>
                    <li>
                      <Link to="/">인테리어 시공</Link>
                    </li>
                    <li>
                      <Link to="/">렌탈</Link>
                    </li>
                    <li>
                      <Link to="/">장보기</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">베스트</Link>
                </li>
                <li>
                  <Link to="/">오늘의 딜</Link>
                </li>
                <li>
                  <Link to="/">리퍼 마켓</Link>
                </li>
                <li>
                  <Link to="/">오!시즌 위크</Link>
                </li>
                <li>
                  <Link to="/">빠른 배송</Link>
                </li>
                <li>
                  <Link to="/">오!쇼룸</Link>
                </li>
                <li>
                  <Link to="/">프리미엄</Link>
                </li>
                <li>
                  <Link to="/">기획전</Link>
                </li>
              </ul>
            </li>
            <li className="item_service">
              <button type="button" className="button_service">
                <SlWrench size={24} />
                <span className="text_local">이사/시공/생활</span>
                <SlArrowDown size={12} />
              </button>

              <ul style={{ display: "none" }}>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/">주거공간 시공</Link>
                </li>
                <li>
                  <Link to="/">상업공간 시공</Link>
                </li>
                <li>
                  <Link to="/">아파트 시공사례</Link>
                </li>
                <li>
                  <Link to="/">건자재</Link>
                </li>
                <li>
                  <Link to="/">설치 수리</Link>
                </li>
                <li>
                  <Link to="/">이사</Link>
                </li>
                <li>
                  <Link to="/">임장 체크리스트</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="list_menu">
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">마이페이지</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">나의 쇼핑</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">북마크</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">알림</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">이벤트</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">사진 올리기</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">집들이 글쓰기</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">노하우 올리기</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">상품 후기</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">시공 전문가 후기</span>
              </Link>
            </li>
            <li className="item_menu">
              <Link to="/" className="link_menu">
                <span className="text_local">고객센터</span>
              </Link>
            </li>
          </ul>

          <ul className="list_horizontal">
            <li className="item_horizontal">
              <Link to="/" className="link_horizontal">
                <span className="text_local">전문가 신청</span>
              </Link>
            </li>
            <li className="item_horizontal">
              <Link to="/" className="link_horizontal">
                <span className="text_local">판매자 쇼핑</span>
              </Link>
            </li>
            <li className="item_horizontal">
              <Link to="/" className="link_horizontal">
                <span className="text_local">로그아웃</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* inner_utility */}

        <div className="dimmed"></div>
      </StyledUtility>
    </>
  );
};

export default UtilityComponent;
