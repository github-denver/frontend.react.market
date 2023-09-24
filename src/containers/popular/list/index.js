import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { popularList, initialList } from '@/modules/popular/list';
import List from '@/components/card/list';

const PopularList = ({ attributes }) => {
  const { horizon, category } = attributes || {};

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, popularList, loading }) => ({
      user: user.user?.user2,
      list: popularList.data?.list,
      pagination: popularList.data?.pagination,
      error: popularList.error,
      loading: loading['popular/list']
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
      popularList({
        category,
        number,
        select: prefixed.select,
        keyword: prefixed.keyword
      })
    );

    return () => {
      console.log('board/list 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.');

      dispatch(initialList());
    };
  }, [dispatch, location.pathname, category, number, prefixed.select, prefixed.keyword]);

  return (
    <List
      attributes={{
        horizon,
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

export default PopularList;
