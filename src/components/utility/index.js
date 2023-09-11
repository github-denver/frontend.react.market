import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SlHome, SlArrowDown, SlHandbag, SlWrench } from 'react-icons/sl'
import NavigationComponent from '@/components/navigation'
import { MdClose } from 'react-icons/md'
import DimmedUnit from '@/unit/dimmed'
import HalfUnit from '@/unit/half'
import ButtonStandardUnit from '@/unit/button/standard'
import AccordionMenu from '@/unit/menu/accordion'

const StyledButtonDepth = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0.8rem 4rem 0.8rem 4.6rem;
  border: 0 none;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    /* background-color: #f7f9fa; */
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
    /* font-weight: 500; */
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .text_local + svg {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    z-index: 1;
    margin-top: -0.6rem;
  }
`

const StyledLinkDepth = styled(Link)`
  display: block;
  padding: 0.95rem 4rem 0.95rem 4.6rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;

  &:hover,
  &:focus {
    /* font-weight: 500; */
    /* background-color: #f7f9fa; */
  }
`

const StyledItemDepth = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`

const StyledListDepth = styled.ul`
  /* display: none; */
  margin-top: 0.4rem;

  & & {
    padding-left: 1rem;
  }
`

const StyledLinkHorizontal = styled(Link)`
  display: inline-block;
  padding: 0.95rem 0.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`

const StyledItemHorizontal = styled.li`
  display: inline-block;
  margin: 0.4rem 0 0 0.4rem;
  vertical-align: middle;
`

const StyledListHorizontal = styled.ul`
  overflow: auto;
  margin: -0.4rem 0 0 -0.4rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
  white-space: nowrap;
`

const StyledLinkMenu = styled(Link)`
  display: inline-block;
  padding: 0.95rem 1.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`

const StyledItemMenu = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`

const StyledListMenu = styled.ul`
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;

  & + ${StyledListHorizontal} {
    border-top: 0 none;
  }
`

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
    /* background-color: #f7f9fa; */
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
    font-weight: 500;
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
`

const StyledItemService = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`

const StyledListService = styled.ul`
  display: none;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;

  & + ${StyledListMenu} {
    .list_menu {
      margin-top: -0.1rem;
    }
  }
`

const StyledButtonClose = styled.button`
  display: inline-block;
  border: 0 none;
  background-color: transparent;
  vertical-align: middle;

  svg {
    display: block;
  }
`

const StyledItemGravity = styled.li`
  display: inline-block;
  width: 50%;
  padding-left: 0.8rem;
  box-sizing: border-box;
  vertical-align: middle;
`

const StyledListGravity = styled.ul`
  margin: 2rem 0 0 -0.8rem;
`

const StyledLogotype = styled.h1`
  display: block;
`

const StyledLogotypeLink = styled(Link)`
  display: inline-block;
  height: 2.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  vertical-align: middle;
  text-align: center;
`

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
`

const StyledUtility = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  ${(porps) => {
    return css`
      left: ${porps.$visible ? 0 : '-100%'};
    `
  }}
  z-index: 100;
  width: 100%;
  text-align: left;
  -webkit-transition: left 0.4s;
  -moz-transition: left 0.4s;
  -o-transition: left 0.4s;
  transition: left 0.4s;
`

const UtilityComponent = ({ attribute }) => {
  const { user, handleLogoutClick, visible, handleUtilityVisible } = attribute

  return (
    <StyledUtility $visible={visible}>
      <StyledInner>
        <StyledLogotype>
          <HalfUnit
            attribute={{
              firstUnit: (
                <StyledLogotypeLink to="/">
                  <span className="ir_wa">오늘의 식탁</span>
                </StyledLogotypeLink>
              ),
              secondUnit: (
                <StyledButtonClose type="button" onClick={handleUtilityVisible}>
                  <MdClose size={24} />
                  <span className="screen_out">주메뉴 닫기</span>
                </StyledButtonClose>
              )
            }}
          />
        </StyledLogotype>

        <StyledListGravity>
          {user ? (
            <>
              <StyledItemGravity>
                <ButtonStandardUnit attribute={{ type: 'button', event: handleLogoutClick }}>
                  <span className="text_local">로그아웃</span>
                </ButtonStandardUnit>
              </StyledItemGravity>
              <StyledItemGravity>
                <ButtonStandardUnit
                  attribute={{
                    type: 'link',
                    href: '/member/profile',
                    fill: true
                  }}>
                  <span className="text_local">마이페이지</span>
                </ButtonStandardUnit>
              </StyledItemGravity>
            </>
          ) : (
            <>
              <StyledItemGravity>
                <ButtonStandardUnit
                  attribute={{
                    type: 'link',
                    href: '/member/login'
                  }}>
                  <span className="text_local">로그인</span>
                </ButtonStandardUnit>
              </StyledItemGravity>
              <StyledItemGravity>
                <ButtonStandardUnit
                  attribute={{
                    type: 'link',
                    href: '/member/register',
                    fill: true
                  }}>
                  <span className="text_local">회원가입</span>
                </ButtonStandardUnit>
              </StyledItemGravity>
            </>
          )}
        </StyledListGravity>

        <AccordionMenu
          items={[
            {
              icon: <SlHome size={24} />,
              title: '커뮤니티',
              arrow: <SlArrowDown size={12} />,
              subItems: [
                {
                  icon: null,
                  link: '홈',
                  to: '/',
                  arrow: null
                },
                /*
                {
                  icon: null,
                  link: "추천",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "집들이",
                  arrow: null,
                },
                */
                {
                  icon: null,
                  link: '집사진',
                  to: '/board/talk/list/1',
                  arrow: null
                }
                /*
                {
                  icon: null,
                  link: "살림 수납",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "콜렉터블",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "홈스토랑",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "핫플레이스",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "육아",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "플랜테리어",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "반려동물",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "캠핑",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "취미",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "3D 인테리어",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "이벤트",
                  arrow: null,
                },
                */
              ]
            }
            /*
            {
              icon: <SlHandbag size={24} />,
              title: "쇼핑",
              arrow: <SlArrowDown size={12} />,
              subItems: [
                {
                  icon: null,
                  link: "홈",
                  arrow: null,
                },
                {
                  className: "item_children",
                  icon: null,
                  title: "카테고리",
                  arrow: <SlArrowDown size={12} />,
                  subItems: [
                    {
                      icon: null,
                      link: "가구",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "패브릭",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "가전·디지털",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "주방용품",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "식품",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "데코·식물",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "조명",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "수납·정리",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "생활용품",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "생필품",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "유아·아동",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "반려동물",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "캠핑·레저",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "공구·DIY",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "인테리어 시공",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "렌탈",
                      arrow: null,
                    },
                    {
                      icon: null,
                      link: "장보기",
                      arrow: null,
                    },
                  ],
                },
                {
                  icon: null,
                  link: "베스트",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "오늘의 딜",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "리퍼 마켓",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "오!시즌 위크",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "빠른 배송",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "오!쇼룸",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "프리미엄",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "기획전",
                  arrow: null,
                },
              ],
            },
            */

            /*
            {
              icon: <SlWrench size={24} />,
              title: "이사/시공/생활",
              arrow: <SlArrowDown size={12} />,
              subItems: [
                {
                  icon: null,
                  link: "홈",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "주거공간 시공",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "상업공간 시공",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "아파트 시공사례",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "건자재",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "설치 수리",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "이사",
                  arrow: null,
                },
                {
                  icon: null,
                  link: "임장 체크리스트",
                  arrow: null,
                },
              ],
            },
            */
          ]}
          closeOthersOnClick={true}
        />

        <StyledListService>
          <StyledItemService>
            <StyledButtonService>
              <SlHome size={24} />
              <span className="text_local">커뮤니티</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

            <NavigationComponent
              attribute={{
                type: 'vertical'
              }}
            />
          </StyledItemService>
          <StyledItemService>
            <StyledButtonService>
              <SlHandbag size={24} />
              <span className="text_local">쇼핑</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

            <StyledListDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">홈</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledButtonDepth>
                  <span className="text_local">카테고리</span>
                  <SlArrowDown size={12} />
                </StyledButtonDepth>
                <StyledListDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">가구</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">패브릭</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">가전·디지털</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">주방용품</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">식품</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">데코·식물</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">조명</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">수납·정리</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">생활용품</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">생필품</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">유아·아동</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">반려동물</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">캠핑·레저</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">공구·DIY</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">인테리어 시공</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">렌탈</StyledLinkDepth>
                  </StyledItemDepth>
                  <StyledItemDepth>
                    <StyledLinkDepth to="/">장보기</StyledLinkDepth>
                  </StyledItemDepth>
                </StyledListDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">베스트</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">오늘의 딜</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">리퍼 마켓</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">오!시즌 위크</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">빠른 배송</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">오!쇼룸</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">프리미엄</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">기획전</StyledLinkDepth>
              </StyledItemDepth>
            </StyledListDepth>
          </StyledItemService>
          <StyledItemService>
            <StyledButtonService>
              <SlWrench size={24} />
              <span className="text_local">이사/시공/생활</span>
              <SlArrowDown size={12} />
            </StyledButtonService>

            <StyledListDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">홈</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">주거공간 시공</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">상업공간 시공</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">아파트 시공사례</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">건자재</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">설치 수리</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">이사</StyledLinkDepth>
              </StyledItemDepth>
              <StyledItemDepth>
                <StyledLinkDepth to="/">임장 체크리스트</StyledLinkDepth>
              </StyledItemDepth>
            </StyledListDepth>
          </StyledItemService>
        </StyledListService>

        <StyledListMenu>
          <StyledItemMenu>
            <StyledLinkMenu to="/member/profile">
              <span className="text_local">마이페이지</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          {/* <StyledItemMenu>
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
          </StyledItemMenu> */}
          <StyledItemMenu>
            <StyledLinkMenu to="/board/talk/write">
              <span className="text_local">사진 올리기</span>
            </StyledLinkMenu>
          </StyledItemMenu>
          {/* <StyledItemMenu>
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
          </StyledItemMenu> */}
        </StyledListMenu>

        <StyledListHorizontal>
          {/* <StyledItemHorizontal>
            <StyledLinkHorizontal to="/">
              <span className="text_local">전문가 신청</span>
            </StyledLinkHorizontal>
          </StyledItemHorizontal>
          <StyledItemHorizontal>
            <StyledLinkHorizontal to="/">
              <span className="text_local">판매자 쇼핑</span>
            </StyledLinkHorizontal>
          </StyledItemHorizontal> */}
          {user && (
            <StyledItemHorizontal>
              <StyledLinkHorizontal to="/">
                <span className="text_local">로그아웃</span>
              </StyledLinkHorizontal>
            </StyledItemHorizontal>
          )}
        </StyledListHorizontal>
      </StyledInner>

      <DimmedUnit attribute={{ visible }} />
    </StyledUtility>
  )
}

export default UtilityComponent
