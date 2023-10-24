import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import moment from 'moment';
import 'moment/locale/ko';
import { shallowEqual, useSelector } from 'react-redux';

moment.locale('ko');

const StyledMessage = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #000;
`;

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #000;
  border: 0 none;
  background-color: transparent;
  vertical-align: middle;
`;

const StyledDot = styled.span`
  display: inline-block;
  padding: 0 0.6rem;
  color: #000;
  vertical-align: middle;
`;

const StyledBox = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #000;
`;

const StyledInner = styled.p`
  display: inline-block;
  padding: 0 1.2rem;
  vertical-align: middle;
`;

const StyledImage = styled.img`
  display: inline-block;
  overflow: hidden;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 100%;
  vertical-align: middle;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
`;

const StyledProfile = styled.div`
  display: block;
  padding: 1.2rem;
`;

const Profile = ({ className, attributes }) => {
  const { userNumber, author, message, event, followings } = attributes || {};

  const [follow, setFollow] = useState(false);

  const { user } = useSelector(({ user }) => ({ user: user.user?.user2 }), shallowEqual);

  useEffect(() => {
    setFollow(() => followings?.some((currentValue, index) => currentValue.userNumber === userNumber));
  }, [followings, userNumber]);

  const onEvent = () => {
    if (!user) {
      event[0](); // login
    } else {
      if (!follow) {
        event[1](userNumber); // follow
      } else {
        event[2](userNumber); // unfollow
      }
    }
  };

  return (
    <StyledProfile className={className}>
      <StyledLink to="">
        <StyledImage src="/images/default_picture.png" alt="" />
      </StyledLink>

      <StyledInner>
        <StyledBox>
          <StyledLink to="">
            <span className="text_local">{author}</span>
          </StyledLink>

          {user?.userNumber !== userNumber && (
            <>
              <StyledDot aria-hidden="true">·</StyledDot>

              <StyledButton type="button" onClick={() => onEvent()}>
                <span className="text_local">{follow ? '팔로잉' : '팔로우'}</span>
              </StyledButton>
            </>
          )}
        </StyledBox>

        <StyledMessage>{message}</StyledMessage>
      </StyledInner>
    </StyledProfile>
  );
};

export default Profile;
