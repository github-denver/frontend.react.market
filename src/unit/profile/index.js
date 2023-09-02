import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStandardUnit from "@/unit/button/standard";
import HalfUnit from "../half";

import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const StyledDateProfile = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #666;
`;

const StyledTextProfile = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.4rem;
  color: #222;
`;

const StyledInnerProfile = styled.p`
  display: inline-block;
  padding: 0 1.2rem;
  vertical-align: middle;
`;

const StyledImageProfile = styled.img`
  display: inline-block;
  overflow: hidden;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 100%;
  vertical-align: middle;
`;

const StyledLinkProfile = styled(Link)`
  display: inline-block;
  vertical-align: middle;
`;

const StyledStandardProfile = styled.div`
  display: block;
  padding: 1.2rem;
`;

const ProfileStandardUnit = ({ children, attribute }) => {
  const { className, visible, author, date } = attribute || {};

  return (
    <StyledStandardProfile className={className}>
      <HalfUnit
        attribute={{
          firstUnit: (
            <StyledLinkProfile to="/">
              <StyledImageProfile src="/profile.png" alt="" />

              <StyledInnerProfile>
                {visible?.author && (
                  <StyledTextProfile>{author}</StyledTextProfile>
                )}
                {visible?.date && (
                  <StyledDateProfile>
                    {moment(date).format("YYYY-MM-DD")}
                  </StyledDateProfile>
                )}
              </StyledInnerProfile>
            </StyledLinkProfile>
          ),
          secondUnit: (
            <ButtonStandardUnit
              attribute={{
                type: "button",
                fill: true,
                size: "small",
              }}
            >
              <span className="text_local">팔로우</span>
            </ButtonStandardUnit>
          ),
        }}
      />
    </StyledStandardProfile>
  );
};

export default ProfileStandardUnit;
