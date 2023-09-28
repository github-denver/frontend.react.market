import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const StyledMessage = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #666;
`;

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #fe4362;
  border: 0 none;
  background-color: transparent;
  vertical-align: middle;
`;

const StyledDot = styled.span`
  display: inline-block;
  padding: 0 0.6rem;
  color: #343434;
  vertical-align: middle;
`;

const StyledBox = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #222;
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
  const { author, message } = attributes || {};

  return (
    <StyledProfile className={className}>
      <StyledLink to="/">
        <StyledImage src="/images/default_picture.png" alt="" />
      </StyledLink>

      <StyledInner>
        <StyledBox>
          <StyledLink to="/">
            <span className="text_local">{author}</span>
          </StyledLink>

          <StyledDot aria-hidden="true">·</StyledDot>

          <StyledButton type="button">
            <span className="text_local">팔로우</span>
          </StyledButton>
        </StyledBox>

        <StyledMessage>{message}</StyledMessage>
      </StyledInner>
    </StyledProfile>
  );
};

export default Profile;
