import React, { useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header';

const Containers = ({ attributes }) => {
  const minimal = attributes?.minimal;

  const [visible, setVisible] = useState(false);

  const { user } = useSelector(
    ({ user }) => ({
      user: user.user?.user2
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleVisible = useCallback(
    (event) => {
      event.preventDefault();

      if (!visible) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    [visible]
  );

  const handleLogout = () => {};

  return (
    <Header
      attributes={{
        minimal,
        user,
        visible,
        onVisible: handleVisible,
        onLogout: handleLogout
      }}
    />
  );
};

export default Containers;
