import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HgroupComponent from "@/components/hgroup";

const StyledFooter = styled.header``;

const FooterComponent = ({ children }) => {
  return (
    <>
      <StyledFooter>
        <HgroupComponent
          attribute={{ title: "회사소개 및 이용안내", invisible: true }}
        />

        <HgroupComponent
          attribute={{
            level: "strong",
            title: "고객센터 전화번호 및 운영시간",
            invisible: true,
          }}
        />

        <ul>
          <li>
            <Link to="/">
              <span>
                고객센터 <span>바로 가기</span>
              </span>
              <span></span>
            </Link>
          </li>
          <li>
            <span>고객센터 전화번호</span>
            <Link to="tel:1670-0876">1670-0876</Link>
          </li>
          <li>
            <span>고객센터 운영시간</span>
            <span>09:00~18:00</span>
          </li>
        </ul>

        <dl>
          <dt>평일</dt>
          <dd>모든 문의 상담 가능</dd>
          <dt>주말, 공휴일</dt>
          <dd>직접 배송, 이사/시공/수리 문의 상담 가능</dd>
        </dl>

        <ul>
          <li>
            <Link to="/">카카오톡 상담 (평일 09:00~18:00)</Link>
          </li>
          <li>
            <Link to="/">이메일 문의</Link>
          </li>
        </ul>

        <HgroupComponent
          attribute={{
            level: "strong",
            title: "회사소개",
            invisible: true,
          }}
        />
        <ul>
          <li>
            <Link to="/">회사소개</Link>
          </li>
          <li>
            <Link to="/">채용정보</Link>
          </li>
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리 방침</Link>
          </li>
          <li>
            <Link to="/">공지사항</Link>
          </li>
          <li>
            <Link to="/">안전거래센터</Link>
          </li>
          <li>
            <Link to="/">입점 신청</Link>
          </li>
          <li>
            <Link to="/">제휴/광고문의</Link>
          </li>
          <li>
            <Link to="/">사업자 구매 회원</Link>
          </li>
          <li>
            <Link to="/">시공 파트너 안내</Link>
          </li>
          <li>
            <Link to="/">상품광고 소개</Link>
          </li>
          <li>
            <Link to="/">고객의 소리</Link>
          </li>
        </ul>

        <button type="button">
          <span>버킷플레이스</span>
        </button>

        <ul>
          <li>대표이사 이승재</li>
          <li>
            <address>
              서울특별시 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층
            </address>
          </li>
          <li>
            사업자등록번호 119-86-91245 <Link to="/">사업자 정보 확인</Link>
          </li>
          <li>통신판매업 신고번호 제2018-서울서초-0580호</li>
        </ul>

        <HgroupComponent
          attribute={{
            level: "strong",
            title: "이용안내",
            invisible: true,
          }}
        />
        <p>
          고객님이 현금결제한 금액에 대해 우리은행과 채무 지급보증 계약을
          체결하여 안전거래를 보장하고 있습니다.
          <Link to="/">서비스 가입 사실 확인</Link>
        </p>

        <p>
          (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로 판매자가
          등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,
          (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을
          부담합니다.
        </p>

        <HgroupComponent
          attribute={{
            level: "strong",
            title: "소셜 네트워크 서비스",
            invisible: true,
          }}
        />
        <ul>
          <li>
            <Link to="/">오늘의 집 유튜브</Link>
          </li>
          <li>
            <Link to="/">오늘의 집 인스타그램</Link>
          </li>
          <li>
            <Link to="/">오늘의 집 페이스북</Link>
          </li>
          <li>
            <Link to="/">오늘의 집 카카오 스토리</Link>
          </li>
          <li>
            <Link to="/">오늘의 집 네이버 포스트</Link>
          </li>
        </ul>

        <small>
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
        </small>
      </StyledFooter>
    </>
  );
};

export default FooterComponent;
