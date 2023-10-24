import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { baking, bakingInitial } from '@/modules/baking';
import FlickingList from '@/components/flicking/list';

const Baking = ({ attributes }) => {
  const { flicking, grid, square, category } = attributes || {};

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, baking, loading }) => ({
      user: user.user?.user2,
      list: baking.data?.list,
      pagination: baking.data?.pagination,
      error: baking.error,
      loading: loading['BAKINGS']
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
    dispatch(baking({ category, number, select: prefixed.select, keyword: prefixed.keyword }));

    return () => {
      // console.log('unmount: baking/list');

      dispatch(bakingInitial());
    };
  }, [dispatch, location.pathname, category, number, prefixed.select, prefixed.keyword]);

  return (
    <FlickingList
      attributes={{
        flicking,
        grid,
        square,
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

export default Baking;
