import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Half from '@/unit/half/standard';
import { MdClose } from 'react-icons/md';
import Button from '@/unit/button/standard';
import Accordion from '@/unit/menu/accordion/standard';
import { SlHome, SlArrowDown, SlHandbag, SlWrench } from 'react-icons/sl';
import Dimmed from '@/unit/dimmed/standard';
import Text from '@/unit/text/standard';
import { TbChefHat } from 'react-icons/tb';
import { LuHome } from 'react-icons/lu';

const StyledLinkThird = styled(Link)`
  display: inline-block;
  padding: 0.95rem 0.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledItemThird = styled.li`
  display: inline-block;
  margin: 0.4rem 0 0 0.4rem;
  vertical-align: middle;
`;

const StyledListThird = styled.ul`
  overflow: auto;
  margin: -0.4rem 0 0 -0.4rem;
  padding: 2rem 0;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
  white-space: nowrap;
`;

const StyledLinkSecond = styled(Link)`
  display: inline-block;
  padding: 0.95rem 1.4rem;
  vertical-align: middle;

  .text_local {
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: middle;
  }
`;

const StyledItemSecond = styled.li`
  margin-top: 0.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledListSecond = styled.ul`
  padding: 2rem 0;
  /* border-top: 0.1rem solid #eee; */
  border-bottom: 0.1rem solid #eee;

  & + ${StyledListThird} {
    border-top: 0 none;
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

const StyledClose = styled.button`
  display: inline-block;
  border: 0 none;
  background-color: transparent;
  vertical-align: middle;

  svg {
    display: block;
    color: #000;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 2.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  vertical-align: middle;
  text-align: center;
`;

const StyledText = styled(Text)`
  margin: 1rem 0 0;
  font-weight: 400;
`;

const StyledLogo = styled.h1`
  display: block;
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
  z-index: 100;
  width: 100%;
  text-align: left;
  -webkit-transition: left 0.4s;
  -moz-transition: left 0.4s;
  -o-transition: left 0.4s;
  transition: left 0.4s;

  ${({ $visible }) => css`
    left: ${$visible ? 0 : '-100%'};
  `}
`;

const Utility = ({ attributes }) => {
  const { user, visible, handleVisible, handleLogout } = attributes || {};

  return (
    <StyledUtility $visible={visible}>
      <StyledInner>
        <StyledLogo>
          <Half
            attributes={{
              first: (
                <StyledLink to="/">
                  <span className="ir_wa">오늘의 식사</span>
                </StyledLink>
              ),
              second: (
                <StyledClose type="button" onClick={handleVisible}>
                  <MdClose size={24} />
                  <span className="screen_out">주메뉴 닫기</span>
                </StyledClose>
              )
            }}
          />
        </StyledLogo>

        {user?.name && <StyledText attributes={{ text: user.name }} />}

        <StyledListGravity>
          {user ? (
            <>
              <StyledItemGravity>
                <Button attributes={{ type: 'button', event: handleLogout }}>
                  <span className="text_local">로그아웃</span>
                </Button>
              </StyledItemGravity>

              <StyledItemGravity>
                <Button attributes={{ type: 'link', href: '/member/follow', fill: true }}>
                  <span className="text_local">마이페이지</span>
                </Button>
              </StyledItemGravity>
            </>
          ) : (
            <>
              <StyledItemGravity>
                <Button attributes={{ type: 'link', href: '/member/login' }}>
                  <span className="text_local">로그인</span>
                </Button>
              </StyledItemGravity>

              <StyledItemGravity>
                <Button attributes={{ type: 'link', href: '/member/register', fill: true }}>
                  <span className="text_local">회원가입</span>
                </Button>
              </StyledItemGravity>
            </>
          )}
        </StyledListGravity>

        <Accordion
          items={[
            {
              icon: <LuHome size={24} />,
              title: '홈',
              category: ['/'],
              to: '/',
              arrow: null,
              subItems: []
            },
            {
              icon: <TbChefHat size={24} />,
              title: '레시피',
              category: ['stew', 'noodle', 'curry'],
              arrow: <SlArrowDown size={12} />,
              subItems: [
                {
                  icon: null,
                  link: '찌개',
                  to: '/board/stew/list/1',
                  arrow: null
                },
                {
                  icon: null,
                  link: '면',
                  to: '/board/noodle/list/1',
                  arrow: null
                },
                {
                  icon: null,
                  link: '카레',
                  to: '/board/curry/list/1',
                  arrow: null
                }
                // {
                //   icon: null,
                //   link: '스테이크',
                //   to: '/board/steak/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '수프',
                //   to: '/board/soup/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '샐러드',
                //   to: '/board/salad/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '빵',
                //   to: '/board/baking/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '햄버거',
                //   to: '/board/burger/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '피자',
                //   to: '/board/pizza/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '케이크',
                //   to: '/board/cake/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '디저트',
                //   to: '/board/dessert/list/1',
                //   arrow: null
                // },
                // {
                //   icon: null,
                //   link: '음료수',
                //   to: '/board/drink/list/1',
                //   arrow: null
                // }
              ]
            }
          ]}
          closeOthersOnClick={true}
        />

        <StyledListSecond>
          {/* <StyledItemSecond>
            <StyledLinkSecond to="/member/follow">
              <span className="text_local">마이페이지</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}

          <StyledItemSecond>
            <StyledLinkSecond to="/board/write">
              <span className="text_local">레시피 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond>

          {/* <StyledItemSecond>
            <StyledLinkSecond to="/board/baking/write">
              <span className="text_local">케이크 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}

          {/* <StyledItemSecond>
            <StyledLinkSecond to="/board/popular/write">
              <span className="text_local">요리 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}

          {/* <StyledItemSecond>
            <StyledLinkSecond to="/board/salad/write">
              <span className="text_local">샐러드 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}

          {/* <StyledItemSecond>
            <StyledLinkSecond to="/board/dessert/write">
              <span className="text_local">디저트 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}

          {/* <StyledItemSecond>
            <StyledLinkSecond to="/board/spicy/write">
              <span className="text_local">매운 요리 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond>

          <StyledItemSecond>
            <StyledLinkSecond to="/board/soup/write">
              <span className="text_local">국물요리 올리기</span>
            </StyledLinkSecond>
          </StyledItemSecond> */}
        </StyledListSecond>

        {/* {user && (
          <StyledListThird>
            <StyledItemThird>
              <StyledLinkThird to="/">
                <span className="text_local">로그아웃</span>
              </StyledLinkThird>
            </StyledItemThird>
          </StyledListThird>
        )} */}
      </StyledInner>

      <Dimmed attributes={{ visible }} />
    </StyledUtility>
  );
};

export default Utility;
