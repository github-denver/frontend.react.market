import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProfile = styled.div``;

const ProfileComponent = ({ attribute, children }) => {
  return (
    <>
      <StyledProfile>
        <div>
          <Link to="/">
            <img src="/profile.png" alt="" />
            <span>홍길동</span>
            <span>9999-99-99</span>
          </Link>

          <button type="button">
            <span>팔로우</span>
          </button>
        </div>

        {children && <div>{children}</div>}
      </StyledProfile>
    </>
  );
};

export default ProfileComponent;
