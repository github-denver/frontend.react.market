import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Half from '@/unit/half/standard';
import Button from '@/unit/button/standard';

import moment from 'moment';
import 'moment/locale/ko';
import { shallowEqual, useSelector } from 'react-redux';

moment.locale('ko');

const StyledDate = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #000;
`;

const StyledAuthor = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #000;
`;

const StyledBox = styled.div`
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

  .half_profile {
    display: inline-block;
    margin-left: 0;
    vertical-align: middle;
  }

  .half_profile + .button_follow {
    margin-left: 1.2rem;
  }

  .button_follow {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Profile = ({ className, attributes }) => {
  const { visible, userNumber, href, author, date, event, followings } = attributes || {};

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
      <Half
        attributes={{
          first: (
            <StyledLink to="">
              {href ? <StyledImage src={`/uploads/${href}`} alt="" /> : <StyledImage src="/images/default_picture.png" alt="" />}

              <StyledBox>
                {visible?.author && <StyledAuthor>{author}</StyledAuthor>}
                {visible?.date && <StyledDate>{moment(date).format('YYYY-MM-DD')}</StyledDate>}
              </StyledBox>
            </StyledLink>
          ),
          second: (
            <>
              {visible?.follow && user?.userNumber !== userNumber && (
                <Button
                  attributes={{
                    type: 'button',
                    size: 'small',
                    fill: !follow,
                    event: () => onEvent()
                  }}>
                  <span className="text_local">{follow ? '팔로잉' : '팔로우'}</span>
                </Button>
              )}
            </>
          )
        }}
      />
    </StyledProfile>
  );
};

export default Profile;
