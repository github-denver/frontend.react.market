import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import HeaderComponent from "@/components/header";
import { singout } from "@/modules/auth";
import { logout } from "@/modules/user";

const HeaderContainer = (props) => {
  const { attribute } = props;

  const minimal = attribute?.minimal;

  const { user } = useSelector(
    ({ user }) => ({
      user: user.user?.user2,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(singout());
    dispatch(logout());
  };

  return <HeaderComponent attribute={{ minimal, user, handleLogoutClick }} />;
};

export default HeaderContainer;
