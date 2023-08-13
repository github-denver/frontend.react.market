import React from "react";
import HgroupComponent from "@/components/hgroup";
import RegisterContainer from "@/containers/register";

const RegisterPage = () => {
  return (
    <>
      <section>
        <HgroupComponent attribute={{ title: "본문 영역", invisible: true }} />
        <RegisterContainer />
      </section>
    </>
  );
};

export default RegisterPage;
