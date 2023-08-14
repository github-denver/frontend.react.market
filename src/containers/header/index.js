import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import HeaderComponent from "@/components/header";
import { logout } from "@/modules/user";

const HeaderContainer = (props) => {
  const { attribute } = props;

  const minimal = attribute?.minimal;

  const { user } = useSelector((payload) => {
    const profile = payload.user; // let user

    let user = null;

    if (profile.user?.user2) {
      user = profile.user.user2;
    }

    return {
      user,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <HeaderComponent attribute={{ minimal, user, handleLogoutClick }} />
    </>
  );
};

export default HeaderContainer;
