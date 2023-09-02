import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HgroupComponent from "@/components/hgroup";
import { SlArrowRight } from "react-icons/sl";

const StyledFooter = styled.footer`
  display: none;
  padding: 3rem 1.6rem;
  background-color: #f7f9fa;

  .list_help {
  }

  .item_help {
    display: inline-block;
    margin: 1.2rem 0 0 0.6rem;
    vertical-align: middle;
  }

  .item_help:first-child {
    display: block;
    margin: 0;
  }

  .item_help:first-child + .item_help {
    margin-left: 0;
  }

  .link_help {
    display: inline-block;
    font-size: 0;
    vertical-align: middle;

    .text_local {
      display: inline-block;
      font-weight: 700;
      font-size: 1.8rem;
      vertical-align: middle;
    }

    svg {
      display: inline-block;
      margin-left: 0.2rem;
      vertical-align: middle;
    }
  }

  .tel_help {
    display: block;
    font-weight: 500;
    font-size: 1.6rem;
  }

  .text_time {
    font-size: 1.4rem;
  }

  .list_hour {
    margin-top: 0.8rem;
    dt {
      float: left;
      font-weight: 700;
      font-size: 1.2rem;
    }
    dd {
      overflow: hidden;
      padding-left: 0.4rem;
      font-size: 1.2rem;
    }
  }
`;

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

        <ul className="list_help">
          <li className="item_help">
            <Link to="/" className="link_help">
              <span className="text_local">
                고객센터 <span className="screen_out">바로 가기</span>
              </span>
              <SlArrowRight size="10" />
            </Link>
          </li>
          <li className="item_help">
            <span className="screen_out">고객센터 전화번호</span>
            <Link to="tel:1670-0876" className="tel_help">
              1670-0876
            </Link>
          </li>
          <li className="item_help">
            <span className="screen_out">고객센터 운영시간</span>
            <span className="text_time">09:00~18:00</span>
          </li>
        </ul>

        <dl className="list_hour">
          <dt>평일</dt>
          <dd>모든 문의 상담 가능</dd>
          <dt>주말, 공휴일</dt>
          <dd>직접 배송, 이사/시공/수리 문의 상담 가능</dd>
        </dl>

        <ul className="list_counseling">
          <li className="item_counseling">
            <Link to="/" className="link_counseling">
              카카오톡 상담 (평일 09:00~18:00)
            </Link>
          </li>
          <li className="item_counseling">
            <Link to="/" className="link_counseling">
              이메일 문의
            </Link>
          </li>
        </ul>

        <HgroupComponent
          attribute={{
            level: "strong",
            title: "회사소개",
            invisible: true,
          }}
        />
        <ul className="list_company">
          <li className="item_company">
            <Link to="/" className="link_company">
              회사소개
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              채용정보
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              이용약관
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              개인정보처리 방침
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              공지사항
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              안전거래센터
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              입점 신청
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              제휴/광고문의
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              사업자 구매 회원
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              시공 파트너 안내
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              상품광고 소개
            </Link>
          </li>
          <li className="item_company">
            <Link to="/" className="link_company">
              고객의 소리
            </Link>
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
            <Link to="/">오늘의 식탁 유튜브</Link>
          </li>
          <li>
            <Link to="/">오늘의 식탁 인스타그램</Link>
          </li>
          <li>
            <Link to="/">오늘의 식탁 페이스북</Link>
          </li>
          <li>
            <Link to="/">오늘의 식탁 카카오 스토리</Link>
          </li>
          <li>
            <Link to="/">오늘의 식탁 네이버 포스트</Link>
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
