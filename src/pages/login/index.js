import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import LoginContainer from "@/containers/login";

const LoginPage = () => {
  return (
    <>
      <HeaderContainer attribute={{ minimal: true }} />

      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <LoginContainer />
      </section>

      <footer>
        <small>
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default LoginPage;
