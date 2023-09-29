import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { freshList, initialList } from '@/modules/fresh/list';
import FlickingList from '@/components/flicking/list';

const FreshList = ({ attributes }) => {
  const { flicking, grid, square, category } = attributes || {};

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, freshList, loading }) => ({
      user: user.user?.user2,
      list: freshList.data?.list,
      pagination: freshList.data?.pagination,
      error: freshList.error,
      loading: loading['fresh/list']
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
    dispatch(
      freshList({
        category,
        number,
        select: prefixed.select,
        keyword: prefixed.keyword
      })
    );

    return () => {
      console.log('unmount: fresh/list');

      dispatch(initialList());
    };
  }, [dispatch, location.pathname, category, number, prefixed.select, prefixed.keyword]);

  return (
    <FlickingList
      attributes={{
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

export default FreshList;
