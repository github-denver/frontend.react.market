import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlHome, SlArrowDown, SlHandbag, SlWrench } from "react-icons/sl";
import NavigationComponent from "@/components/navigation";
import { MdClose } from "react-icons/md";

const StyledDimmed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  ${(porps) =>
    porps.$visible
      ? css`
          display: block;
          opacity: 0.5;
        `
      : css`
          display: none;
          opacity: 0;
          pointer-events: none;
        `}
  transition: opacity 0.4s;
`;

const StyledLinkHorizontal = styled(Link)`
  display: inline-block;
  padding: 0.95rem 0.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledItemHorizontal = styled.li`
  display: inline-block;
  margin: 0.4rem 0 0 0.4rem;
  vertical-align: middle;
`;

const StyledListHorizontal = styled.ul`
  overflow: auto;
  margin: -0.4rem 0 0 -0.4rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
  white-space: nowrap;
`;

const StyledLinkMenu = styled(Link)`
  display: inline-block;
  padding: 0.95rem 1.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledItemMenu = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListMenu = styled.ul`
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;

  & + ${StyledListHorizontal} {
    border-top: 0 none;
  }
`;

const StyledButtonService = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0.8rem 4rem 0.8rem 1.4rem;
  border: 0 none;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f7f9fa;
  }

  svg:first-child {
    display: inline-block;
    vertical-align: middle;
  }

  svg:first-child + .text_local {
    margin-left: 0.8rem;
  }

  .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.6rem;
    vertical-align: middle;
  }

  .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
  }
`;

const StyledItemService = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListService = styled.ul`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;

  & + ${StyledListMenu} {
    .list_menu {
      margin-top: -0.1rem;
    }
  }
`;

const StyledLinkGravity = styled(Link)`
  display: block;
  width: 100%;
  padding: 1.4rem 0;
  border: 0.1rem solid #35c5f0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  ${(props) =>
    props.$fill
      ? css`
          background-color: #35c5f0;

          .text_local {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
        `};
  color: #35c5f0;
  line-height: 1;
  text-align: center;

  .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledButtonGravity = styled.button`
  display: block;
  width: 100%;
  padding: 1.4rem 0;
  border: 0.1rem solid #35c5f0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  ${(props) =>
    props.$fill
      ? css`
          background-color: #35c5f0;

          .text_local {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
        `};
  color: #35c5f0;
  line-height: 1;
  text-align: center;

  .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledButtonClose = styled.button`
  display: inline-block;
  border: 0 none;
  background-color: transparent;
  vertical-align: middle;

  svg {
    display: block;
  }
`;

const StyledItemGravity = styled.li`
  display: inline-block;
  width: 50%;
  padding-left: 0.8rem;
  box-sizing: border-box;
  vertical-align: middle;
`;

const StyledListGravity = styled.ul`
  margin: 2rem 0 0 -0.8rem;
`;

const StyledOuterHalf = styled.div`
  width: 100%;
`;

const StyledInnerHalf = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
  vertical-align: middle;

  &:first-child {
    text-align: left;
  }
`;

const StyledLogotype = styled.h1`
  display: block;
`;

const StyledLogotypeLink = styled(Link)`
  display: inline-block;
  width: 7.4rem;
  height: 2.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  vertical-align: middle;
  text-align: center;
`;

const StyledInner = styled.div`
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
`;

const StyledUtility = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  ${(porps) => {
    return css`
      left: ${porps.$visible ? 0 : "-100%"};
    `;
  }}
  z-index: 100;
  width: 100%;
  text-align: left;
  -webkit-transition: left 0.4s;
  -moz-transition: left 0.4s;
  -o-transition: left 0.4s;
  transition: left 0.4s;
`;

const UtilityComponent = ({ attribute }) => {
  const { user, handleLogoutClick, visible, handleUtilityVisible } = attribute;

  return (
    <StyledUtility $visible={visible}>
      <StyledInner>
        <StyledLogotype>
          <StyledOuterHalf>
            <StyledInnerHalf>
              <StyledLogotypeLink to="/">
                <span className="ir_wa">오늘의 집</span>
              </StyledLogotypeLink>
            </StyledInnerHalf>

            <StyledInnerHalf>
              <StyledButtonClose type="button" onClick={handleUtilityVisible}>
                <MdClose size={24} />
                <span className="screen_out">주메뉴 닫기</span>
              </StyledButtonClose>
            </StyledInnerHalf>
          </StyledOuterHalf>
        </StyledLogotype>

        <StyledListGravity>
          {user ? (
            <>
              <StyledItemGravity>
                <StyledButtonGravity type="button" onClick={handleLogoutClick}>
                  <span className="text_local">로그아웃</span>
                </StyledButtonGravity>
              </StyledItemGravity>
              <StyledItemGravity>
                <StyledLinkGravity to="/member/profile" $fill={true}>
                  <span className="text_local">마이페이지</span>
                </StyledLinkGravity>
              </StyledItemGravity>
            </>
          ) : (
            <>
              <StyledItemGravity>
                <StyledLinkGravity to="/member/login">
                  <span className="text_local">로그인</span>
                </StyledLinkGravity>
              </StyledItemGravity>
              <StyledItemGravity>
                <StyledLinkGravity to="/member/register" $fill={true}>
                  <span className="text_local">회원가입</span>
                </StyledLinkGravity>
              </StyledItemGravity>
            </>
          )}
        </StyledListGravity>

        <StyledListService>
          <StyledItemService>
            <StyledButtonService>
              <SlHome size={24} />
              <span className="text_local">커뮤니티</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

            <NavigationComponent
              attribute={{
                type: "vertical",
              }}
            />
          </StyledItemService>
          <StyledItemService>
            <StyledButtonService>
              <SlHandbag size={24} />
              <span className="text_local">쇼핑</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

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
          </StyledItemService>
          <StyledItemService>
            <StyledButtonService>
              <SlWrench size={24} />
              <span className="text_local">이사/시공/생활</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

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
          </StyledItemService>
        </StyledListService>

        <StyledListMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">마이페이지</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">나의 쇼핑</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">북마크</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">알림</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">이벤트</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">사진 올리기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">집들이 글쓰기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">노하우 올리기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">상품 후기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">시공 전문가 후기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/">
              <span className="text_local">고객센터</span>
            </StyledLinkMenu>
          </StyledItemMenu>
        </StyledListMenu>

        <StyledListHorizontal>
          <StyledItemHorizontal>
            <StyledLinkHorizontal to="/">
              <span className="text_local">전문가 신청</span>
            </StyledLinkHorizontal>
          </StyledItemHorizontal>
          <StyledItemHorizontal>
            <StyledLinkHorizontal to="/">
              <span className="text_local">판매자 쇼핑</span>
            </StyledLinkHorizontal>
          </StyledItemHorizontal>
          <StyledItemHorizontal>
            <StyledLinkHorizontal to="/">
              <span className="text_local">로그아웃</span>
            </StyledLinkHorizontal>
          </StyledItemHorizontal>
        </StyledListHorizontal>
      </StyledInner>

      <StyledDimmed $visible={visible} />
    </StyledUtility>
  );
};

export default UtilityComponent;
