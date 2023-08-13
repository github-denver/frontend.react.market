import React from "react";
import HgroupComponent from "@/components/hgroup";
import LoginContainer from "@/containers/login";

const LoginPage = () => {
  return (
    <>
      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <LoginContainer />
      </section>
    </>
  );
};

export default LoginPage;
