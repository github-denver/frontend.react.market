import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import FindPasswordContainer from "@/containers/findPassword";

const FindPasswordPage = () => {
  return (
    <>
      <HeaderContainer attribute={{ minimal: true }} />

      <section className="container">
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <FindPasswordContainer />
      </section>

      <footer className="footer_minimal">
        <small className="text_copyright_minimal">
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default FindPasswordPage;
