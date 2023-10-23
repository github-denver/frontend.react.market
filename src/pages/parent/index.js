import React from 'react';
import Child from '../child';
import { Outlet } from 'react-router';

const Parent = (props) => {
  return (
    <>
      <p>Parent</p>
      <Outlet />
    </>
  );
};

export default Parent;
