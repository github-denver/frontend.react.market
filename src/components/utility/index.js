import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationComponent from "@/components/navigation";

const StyledUtility = styled.div``;

const UtilityComponent = ({ attribute }) => {
  const { user, handleLogoutClick } = attribute;

  return (
    <>
      <StyledUtility>
        <Link to="/">오늘의 집</Link>

        <ul>
          {user ? (
            <>
              <li>
                <button type="button" onClick={handleLogoutClick}>
                  <span>로그아웃</span>
                </button>
              </li>
              <li>
                <Link to="/member/login">마이페이지</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/member/login">로그인</Link>
              </li>
              <li>
                <Link to="/member/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>

        <ul>
          <li>
            <button type="button">
              <span>커뮤니티</span>
            </button>

            <NavigationComponent />
          </li>
          <li>
            <button type="button">
              <span>쇼핑</span>
            </button>

            <ul>
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
          <li>
            <button type="button">
              <span>이사/시공/생활</span>
            </button>

            <ul>
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

        <ul>
          <li>
            <Link to="/">마이페이지</Link>
          </li>
          <li>
            <Link to="/">나의 쇼핑</Link>
          </li>
          <li>
            <Link to="/">북마크</Link>
          </li>
          <li>
            <Link to="/">알림</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/">사진 올리기</Link>
          </li>
          <li>
            <Link to="/">집들이 글쓰기</Link>
          </li>
          <li>
            <Link to="/">노하우 올리기</Link>
          </li>
          <li>
            <Link to="/">상품 후기</Link>
          </li>
          <li>
            <Link to="/">시공 전문가 후기</Link>
          </li>
          <li>
            <Link to="/">고객센터</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">전문가 신청</Link>
          </li>
          <li>
            <Link to="/">판매자 쇼핑</Link>
          </li>
        </ul>
      </StyledUtility>
    </>
  );
};

export default UtilityComponent;
