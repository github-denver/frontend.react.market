import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStandardUnit from '@/unit/button/standard'
import HalfUnit from '@/unit/half'

import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const StyledDate = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #666;
`

const StyledAuthor = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.4rem;
  color: #222;
`

const StyledBox = styled.p`
  display: inline-block;
  padding: 0 1.2rem;
  vertical-align: middle;
`

const StyledImage = styled.img`
  display: inline-block;
  overflow: hidden;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 100%;
  vertical-align: middle;
`

const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
`

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
`

const ProfileStandardUnit = ({ attribute }) => {
  const { className, visible, author, date } = attribute || {}

  return (
    <StyledProfile className={className}>
      <HalfUnit
        attribute={{
          firstUnit: (
            <StyledLink to="/">
              <StyledImage src="/profile.png" alt="" />

              <StyledBox>
                {visible?.author && <StyledAuthor>{author}</StyledAuthor>}
                {visible?.date && <StyledDate>{moment(date).format('YYYY-MM-DD')}</StyledDate>}
              </StyledBox>
            </StyledLink>
          ),
          secondUnit: (
            <ButtonStandardUnit
              attribute={{
                className: 'button_follow',
                type: 'button',
                fill: true,
                size: 'small'
              }}>
              <span className="text_local">팔로우</span>
            </ButtonStandardUnit>
          )
        }}
      />
    </StyledProfile>
  )
}

export default ProfileStandardUnit
