import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProfile = styled.div`
  .group_profile {
    margin: 1.6rem 1.2rem 0;
  }

  .link_profile {
    display: inline-block;
    vertical-align: middle;
  }

  .link_profile .thumbnail_profile {
    display: inline-block;
    overflow: hidden;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 100%;
    vertical-align: middle;
  }

  .link_profile .box_local {
    display: inline-block;
    margin-left: 1.2rem;
    vertical-align: middle;
  }

  .link_profile .text_author {
    display: block;
    font-weight: 700;
    font-size: 1.2rem;
    color: #222;
  }
  .link_profile .text_date {
    display: block;
    font-size: 1.2rem;
    color: #666;
  }

  .button_gravity {
    display: inline-block;
    padding: 1.4rem;
    border: 0.1rem solid #35c5f0;
    border-radius: 0.4rem;
    box-sizing: border-box;
    background-color: #fff;
    color: #35c5f0;
    line-height: 1;
    vertical-align: middle;
  }

  .button_gravity .text_local {
    display: inline-block;
    font-weight: 700;
    font-size: 1.4rem;
    vertical-align: middle;
  }

  .button_gravity.fill {
    background-color: #35c5f0;
  }

  .button_gravity.fill .text_local {
    color: #fff;
  }
`;

const ProfileComponent = ({ attribute, children }) => {
  return (
    <>
      <StyledProfile>
        <div className="group_profile">
          <div className="outer_half">
            <div className="inner_half">
              <Link to="/" className="link_profile">
                <img src="/profile.png" alt="" className="thumbnail_profile" />
                <span className="box_local">
                  <span className="text_author">홍길동</span>
                  <span className="text_date">9999-99-99</span>
                </span>
              </Link>
            </div>

            <div className="inner_half">
              <button type="button" className="button_gravity fill">
                <span className="text_local">팔로우</span>
              </button>
            </div>
          </div>
        </div>

        {children && <div>{children}</div>}
      </StyledProfile>
    </>
  );
};

export default ProfileComponent;
