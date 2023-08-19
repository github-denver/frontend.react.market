import React from "react";
import HeaderContainer from "@/containers/header";
import HgroupComponent from "@/components/hgroup";
import ProfileContainer from "@/containers/profile";

const ProfilePage = () => {
  return (
    <>
      <HeaderContainer attribute={{ minimal: true }} />

      <section className="container">
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <ProfileContainer />
      </section>

      <footer className="footer_minimal">
        <small className="text_copyright_minimal">
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default ProfilePage;
