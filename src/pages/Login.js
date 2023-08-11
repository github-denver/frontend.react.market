import React from "react";
// import HeaderContainer from "@/containers/common/header";
import Hgroup from "@/components/common/hgroup";

import LoginContainer from "@/containers/login";

const LoginWrapper = () => {
  return (
    <>
      <section>
        <Hgroup attribute={{ title: "본문 영역", invisible: true }} />
        <LoginContainer />
      </section>
    </>
  );
};

export default LoginWrapper;
