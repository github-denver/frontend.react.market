import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { boardList, initialList } from '@/modules/board/list';
import List from '@/components/board/list';

const BoardList = ({ attributes }) => {
  const { category } = attributes || {};

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, boardList, loading }) => ({
      user: user.user?.user2,
      list: boardList.data?.list,
      pagination: boardList.data?.pagination,
      error: boardList.error,
      loading: loading['board/list']
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
      boardList({
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

export default BoardList;
