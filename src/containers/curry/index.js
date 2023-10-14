import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { curry, curryInitial } from '@/modules/curry';
import FlickingList from '@/components/flicking/list';

const Curry = ({ attributes }) => {
  const { flicking, grid, square, category } = attributes || {};

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, curry, loading }) => ({
      user: user.user?.user2,
      list: curry.data?.list,
      pagination: curry.data?.pagination,
      error: curry.error,
      loading: loading['CURRY']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const location = useLocation();

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0];

  const test = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-2)[0];

  if (typeof number === 'undefined' || number === 'list' || number === 'read' || test === 'read') {
    number = 1;
  }

  useEffect(() => {
    dispatch(curry({ category, number, select: prefixed.select, keyword: prefixed.keyword }));

    return () => {
      console.log('unmount: curry/list');

      dispatch(curryInitial());
    };
  }, [dispatch, location.pathname, category, number, prefixed.select, prefixed.keyword]);

  return (
    <FlickingList
      attributes={{
        flicking,
        grid,
        square,
        // panelsPerView: 1,
        category,
        user,
        list,
        pagination,
        error,
        loading,
        select: prefixed.select,
        keyword: prefixed.keyword
      }}
    />
  );
};

export default Curry;
