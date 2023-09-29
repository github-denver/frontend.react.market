import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userLogout } from '@/modules/user';
import Header from '@/components/header';
import { initialFollow } from '@/modules/follow';

const Wrapper = ({ attributes }) => {
  const minimal = attributes?.minimal;

  const { user } = useSelector(({ user }) => ({ user: user.user?.user2 }), shallowEqual);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(initialFollow());
  };

  return <Header attributes={{ minimal, user, handleLogout }} />;
};

export default Wrapper;
