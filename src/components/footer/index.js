import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hgroup from '@/unit/hgroup/standard';
import { SlArrowRight } from 'react-icons/sl';
import Text from '@/unit/text/standard';
import Boundary from '@/unit/boundary/standard';

const StyledCopyright = styled.small`
  display: block;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  color: #182c2b;
`;

const StyledSocialLink = styled(Link)`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 100%;
  color: transparent;
  background-color: #182c2b;
`;

const StyledSocialItem = styled.li`
  display: inline-block;
  margin: 1.2rem 0 0 1.2rem;
  vertical-align: middle;
`;

const StyledSocial = styled.ul`
  margin: -1.2rem 0 0 -1.2rem;
  padding-top: 1.2rem;
`;

const StyledCompanyLink = styled(Link)`
  font-size: 1.2rem;
`;

const StyledCompanyItem = styled.li`
  display: inline-block;
  margin: 1.2rem 0 0 1.2rem;
  vertical-align: middle;
`;

const StyledCompany = styled.ul`
  margin: -1.2rem 0 0 -1.2rem;
`;

const StyledCompanyGroup = styled.div`
  margin-top: 2.4rem;
  padding-top: 2.4rem;
  border-top: 0.1rem solid #dadde0;
`;

const StyledCounselingLink = styled(Link)`
  display: block;
  padding: 0.35rem 0.8rem;
  border: 0.1rem solid #dadde0;
  font-size: 1.4rem;
`;

const StyledCounselingItem = styled.li`
  display: inline-block;
  margin-left: 1.2rem;
  vertical-align: middle;
`;

const StyledCounseling = styled.ul`
  margin: 1.2rem 0 0 -1.2rem;
`;

const StyledHourDescription = styled.dd`
  overflow: hidden;
  margin-top: 0.6rem;
  padding-left: 0.4rem;
  font-size: 1.2rem;
`;

const StyledHourTitle = styled.dt`
  float: left;
  margin-top: 0.6rem;
  font-weight: 500;
  font-size: 1.2rem;

  &:first-child,
  &:first-child + ${StyledHourDescription} {
    margin-top: 0;
  }
`;

const StyledHour = styled.ul`
  margin-top: 0.8rem;
`;

const StyledHelpTime = styled.span`
  font-size: 1.4rem;
`;

const StyledHelpTel = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 1.6rem;
`;

const StyledHelpText = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 1.8rem;
  vertical-align: middle;
`;

const StyledHelpLink = styled(Link)`
  display: inline-block;
  font-size: 0;
  vertical-align: middle;

  svg {
    display: inline-block;
    margin-left: 0.2rem;
    vertical-align: middle;
  }
`;

const StyledHelpItem = styled.li`
  display: inline-block;
  margin: 1.2rem 0 0 0.6rem;
  vertical-align: middle;

  &:first-child {
    display: block;
    margin: 0;
  }

  &:first-child + & {
    margin-left: 0;
  }
`;

const StyledHelp = styled.ul``;

const StyledText = styled(Text)`
  margin: 0;
  /* margin: 2.4rem 0 0; */
  /* padding: 2.4rem 0 0; */
  /* border-top: 0.1rem solid #dadde0; */
  font-size: 1.1rem;
  color: #182c2b;
`;

const StyledFooter = styled.footer`
  /* margin-top: 2.4rem; */
  padding: 3rem 1.6rem;

  small {
  }
`;

const Footer = ({ children, attributes }) => {
  return (
    <StyledFooter>
      <Hgroup attributes={{ title: '회사소개 및 이용안내', invisible: true }} />

      {/* <Hgroup
        attributes={{
          level: 'strong',
          title: '고객센터 전화번호 및 운영시간',
          invisible: true
        }}
      /> */}

      {/* <StyledHelp>
        <StyledHelpItem>
          <StyledHelpLink>
            <StyledHelpText>
              고객센터 <span className="screen_out">바로 가기</span>
            </StyledHelpText>
            <SlArrowRight size="10" />
          </StyledHelpLink>
        </StyledHelpItem>

        <StyledHelpItem>
          <span className="screen_out">고객센터 전화번호</span>
          <StyledHelpTel to="tel:1670-0876">1670-0876</StyledHelpTel>
        </StyledHelpItem>

        <StyledHelpItem>
          <span className="screen_out">고객센터 운영시간</span>
          <StyledHelpTime>09:00~18:00</StyledHelpTime>
        </StyledHelpItem>
      </StyledHelp> */}

      {/* <StyledHour>
        <StyledHourTitle>평일</StyledHourTitle>
        <StyledHourDescription>모든 문의 상담 가능</StyledHourDescription>
        <StyledHourTitle>주말, 공휴일</StyledHourTitle>
        <StyledHourDescription>직접 배송, 이사/시공/수리 문의 상담 가능</StyledHourDescription>
      </StyledHour> */}

      {/* <StyledCounseling>
        <StyledCounselingItem>
          <StyledCounselingLink to="/">카카오톡 상담 (평일 09:00~18:00)</StyledCounselingLink>
        </StyledCounselingItem>
        <StyledCounselingItem>
          <StyledCounselingLink to="/">이메일 문의</StyledCounselingLink>
        </StyledCounselingItem>
      </StyledCounseling> */}

      {/* <Hgroup
        attributes={{
          level: 'strong',
          title: '회사소개',
          invisible: true
        }}
      />
      <StyledCompanyGroup>
        <StyledCompany>
          <StyledCompanyItem>
            <StyledCompanyLink to="/">회사소개</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">채용정보</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">이용약관</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">개인정보처리 방침</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">공지사항</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">안전거래센터</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">입점 신청</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">제휴/광고문의</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">사업자 구매 회원</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">시공 파트너 안내</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">상품광고 소개</StyledCompanyLink>
          </StyledCompanyItem>

          <StyledCompanyItem>
            <StyledCompanyLink to="/">고객의 소리</StyledCompanyLink>
          </StyledCompanyItem>
        </StyledCompany>
      </StyledCompanyGroup> */}

      <Hgroup
        attributes={{
          level: 'strong',
          title: '이용안내',
          invisible: true
        }}
      />

      <StyledText
        attributes={{
          text: '오늘의 식탁은 포트폴리오 사이트입니다.'
        }}
      />

      {/* <Hgroup
        attributes={{
          level: 'strong',
          title: '소셜 네트워크 서비스',
          invisible: true
        }}
      />
      <StyledSocial>
        <StyledSocialItem>
          <StyledSocialLink to="/">오늘의 식탁 유튜브</StyledSocialLink>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialLink to="/">오늘의 식탁 인스타그램</StyledSocialLink>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialLink to="/">오늘의 식탁 페이스북</StyledSocialLink>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialLink to="/">오늘의 식탁 카카오 스토리</StyledSocialLink>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialLink to="/">오늘의 식탁 네이버 포스트</StyledSocialLink>
        </StyledSocialItem>
      </StyledSocial> */}

      {/* <StyledCopyright>Copyright 2024. 오늘의 식탁, Co., Ltd. All rights reserved.</StyledCopyright> */}
    </StyledFooter>
  );
};

export default Footer;
