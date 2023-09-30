import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Half from '@/unit/half/standard';
import Hgroup from '@/unit/hgroup/standard';
import Boundary from '@/unit/boundary/standard';
import Thin from '@/unit/thin/standard';
import Button from '@/unit/button/standard';

const StyledFollowerText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
  font-weight: 500;
  font-size: 1.4rem;
  vertical-align: middle;
`;

const StyledFollowerImage = styled.img`
  display: inline-block;
  width: 3.6rem;
  height: 3.6rem;
  vertical-align: middle;
`;

const StyledFollowerItem = styled.li``;

const StyledFollowerList = styled.ul`
  padding: 0 1.6rem 1.6rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.6rem;
  border: 0.1rem solid #fe4362;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  line-height: 1;
  color: #fe4362;
  vertical-align: middle;
`;

const StyledText = styled.span`
  display: inline-block;
  margin-left: 0.4rem;
  padding-left: 0.4rem;
  font-size: 1.2rem;
  color: #828c94;
  vertical-align: middle;

  &:first-child {
    margin-left: 0;
    padding-left: 0;
  }
`;

const StyledInnerBox = styled.div`
  margin-top: 0.2rem;

  & + ${StyledLink} {
    margin-top: 0.8rem;
  }
`;

const StyledAuthor = styled.strong`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  color: #222;
`;

const StyledBox = styled.div`
  display: inline-block;
  padding-left: 1.2rem;
  vertical-align: top;
`;

const StyledImage = styled.img`
  display: inline-block;
  overflow: hidden;
  width: 8.4rem;
  height: 8.4rem;
  border-radius: 100%;
  vertical-align: middle;
`;

const StyledProfile = styled.div`
  padding: 1.6rem;
`;

const Follow = ({ attributes }) => {
  const { user, followings, followers, error, loadingFollowing, loadingFollower, handleUnfollow } = attributes || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 데이터입니다.');

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log('에러가 발생했습니다.');

    return <p>에러가 발생했습니다.</p>;
  }

  if (loadingFollowing || loadingFollower) {
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.');

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  return (
    <>
      <StyledProfile>
        <StyledImage src="/images/default_picture.png" alt="" />
        <StyledBox>
          <StyledAuthor>{user?.name}</StyledAuthor>

          <StyledInnerBox>
            <StyledText>팔로워 0</StyledText>
            <StyledText>팔로잉 0</StyledText>
          </StyledInnerBox>

          <StyledLink to="/member/profile">개인정보 수정</StyledLink>
        </StyledBox>
      </StyledProfile>

      <Boundary />

      <Thin />

      <Hgroup attributes={{ title: '팔로잉' }} />
      <StyledFollowerList>
        {followings?.map((currentValue, index) => (
          <StyledFollowerItem key={index}>
            <Half
              attributes={{
                first: (
                  <>
                    <StyledFollowerImage src="/images/default_picture.png" alt="" />
                    <StyledFollowerText>{currentValue.name}</StyledFollowerText>
                  </>
                ),
                second: (
                  <Button
                    attributes={{
                      type: 'button',
                      size: 'small',
                      event: () => handleUnfollow(currentValue.userNumber)
                    }}>
                    <span className="text_local">팔로잉</span>
                  </Button>
                )
              }}
            />
          </StyledFollowerItem>
        ))}
      </StyledFollowerList>

      <Thin />

      <Hgroup attributes={{ title: '팔로워' }} />
      <StyledFollowerList>
        {followers?.map((currentValue, index) => (
          <StyledFollowerItem key={index}>
            <Half
              attributes={{
                first: (
                  <>
                    <StyledFollowerImage src="/images/default_picture.png" alt="" />
                    <StyledFollowerText>{currentValue.name}</StyledFollowerText>
                  </>
                ),
                second: null
              }}
            />
          </StyledFollowerItem>
        ))}
      </StyledFollowerList>
    </>
  );
};

export default Follow;
