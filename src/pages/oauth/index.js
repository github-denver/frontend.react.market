import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import OauthContainer from "@/containers/oauth";

const OauthPage = () => {
  return (
    <>
      <HeaderContainer attribute={{ minimal: true }} />

      <section className="container">
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <OauthContainer />
      </section>

      <footer className="footer_minimal">
        <small className="text_copyright_minimal">
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default OauthPage;
