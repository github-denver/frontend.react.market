import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import HeaderContainer from "@/components/common/header";
// import { signout } from "@/modules/auth";
// import { logout } from "@/modules/user";
import { login } from "@/modules/auth";

const HeaderWrapper = (props) => {
  const { attribute } = props;

  const minimal = attribute ? attribute.minimal : false;

  // const { user } = useSelector(({ user }) => {
  //   const profile = {};

  //   if (user.user !== null) {
  //     const result =
  //       typeof user.user === "string" ? JSON.parse(user.user) : user.user;

  //     profile.user = result.user2;
  //   }

  //   return {
  //     user: profile.user,
  //   };
  // }, shallowEqual);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(signout("login"));
    // dispatch(login("login"));

    dispatch(login("login"));
  };

  return (
    <>
      {/* <HeaderContainer attribute={{ user, handleLogout, minimal }} />; */}
    </>
  );
};

export default HeaderWrapper;
