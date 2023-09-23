import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hgroup from '@/unit/hgroup/standard';
import { SlArrowRight } from 'react-icons/sl';
import Text from '@/unit/text/standard';

const StyledText = styled(Text)`
  margin-top: 2.4rem;
  padding: 2.4rem 0 0;
  border-top: 0.1rem solid #dadde0;
  font-size: 1.1rem;
  color: #828c94;
`;

const StyledFooter = styled.footer`
  margin-top: 2.4rem;
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
      font-weight: 500;
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
      margin-top: 0.6rem;
      font-weight: 500;
      font-size: 1.2rem;
    }

    dt:first-child,
    dt:first-child + dd {
      margin-top: 0;
    }

    dd {
      overflow: hidden;
      margin-top: 0.6rem;
      padding-left: 0.4rem;
      font-size: 1.2rem;
    }
  }

  .list_counseling {
    margin: 1.2rem 0 0 -1.2rem;
  }

  .item_counseling {
    display: inline-block;
    margin-left: 1.2rem;
    vertical-align: middle;
  }

  .link_counseling {
    display: block;
    padding: 0.35rem 0.8rem;
    border: 0.1rem solid #dadde0;
    font-size: 1.4rem;
  }

  .group_company {
    margin-top: 2.4rem;
    padding-top: 2.4rem;
    border-top: 0.1rem solid #dadde0;
  }

  .list_company {
    margin: -1.2rem 0 0 -1.2rem;
  }

  .item_company {
    display: inline-block;
    margin: 1.2rem 0 0 1.2rem;
    vertical-align: middle;
  }

  .link_company {
    font-size: 1.2rem;
  }

  .list_social {
    margin: -1.2rem 0 0 -1.2rem;
    padding-top: 1.2rem;

    li {
      display: inline-block;
      margin: 1.2rem 0 0 1.2rem;
      vertical-align: middle;

      .link_social {
        display: block;
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 100%;
        color: transparent;
        background-color: #828c94;
      }
    }
  }

  small {
    display: block;
    margin-top: 1.2rem;
    font-size: 1.1rem;
    color: #828c94;
  }
`;

const Footer = ({ children, attributes }) => {
  return (
    <StyledFooter>
      <Hgroup attributes={{ title: '회사소개 및 이용안내', invisible: true }} />

      <Hgroup
        attributes={{
          level: 'strong',
          title: '고객센터 전화번호 및 운영시간',
          invisible: true
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

      <Hgroup
        attributes={{
          level: 'strong',
          title: '회사소개',
          invisible: true
        }}
      />
      <div className="group_company">
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
      </div>

      <Hgroup
        attributes={{
          level: 'strong',
          title: '이용안내',
          invisible: true
        }}
      />

      <StyledText
        attributes={{
          text: '오늘의 식탁은 링크 제공 사이트입니다. 이 웹 사이트에는 음악, 비디오, 멀티미디어 파일을 저장하지 않습니다. 또한 이 사이트에서 제공되는 콘텐츠는 링크 된 콘텐츠이므로 저작권, 적법성, 정확성, 규정 준수 또는 기타 측면에 대해 오늘의 식탁은 책임이 없습니다. 저작권 등 법적 문제가 있는 경우 적절한 미디어 파일 소유자 또는 호스팅 업체에 문의해 주세요. '
        }}
      />

      <Hgroup
        attributes={{
          level: 'strong',
          title: '소셜 네트워크 서비스',
          invisible: true
        }}
      />
      <ul className="list_social">
        <li>
          <Link to="/" className="link_social">
            오늘의 식탁 유튜브
          </Link>
        </li>
        <li>
          <Link to="/" className="link_social">
            오늘의 식탁 인스타그램
          </Link>
        </li>
        <li>
          <Link to="/" className="link_social">
            오늘의 식탁 페이스북
          </Link>
        </li>
        <li>
          <Link to="/" className="link_social">
            오늘의 식탁 카카오 스토리
          </Link>
        </li>
        <li>
          <Link to="/" className="link_social">
            오늘의 식탁 네이버 포스트
          </Link>
        </li>
      </ul>

      <small>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</small>
    </StyledFooter>
  );
};

export default Footer;
