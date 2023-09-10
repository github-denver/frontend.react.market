import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoginComponent from "@/components/form/login";
import { login } from "@/modules/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userCheck } from "@/modules/user";
import Cookies from "js-cookie";
import { formChangeField, initialLoginForm } from "@/modules/form";
import { boardWrite } from "../../modules/board/write";
import { styled } from "styled-components";
import ButtonStandardUnit from "@/unit/button/standard";
import HalfUnit from "@/unit/half";

const StyledPublish = styled.div`
  .gravity_actionSocial {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

const PublishComponent = ({ attribute }) => {
  const { className, owner, publish, cancel } = attribute || {};

  return (
    <StyledPublish className={className}>
      <HalfUnit
        attribute={{
          firstUnit: (
            <ButtonStandardUnit
              attribute={{
                type: "button",
                event: publish,
                fill: true,
              }}
            >
              <span className="text_local">{owner ? "수정" : "등록"}</span>
            </ButtonStandardUnit>
          ),
          secondUnit: (
            <ButtonStandardUnit
              attribute={{
                type: "button",
                event: cancel,
              }}
            >
              <span className="text_local">취소</span>
            </ButtonStandardUnit>
          ),
        }}
      />
    </StyledPublish>
  );
};

export default PublishComponent;
