import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { boardList, initialList } from '@/modules/board/list';
import List from '@/components/board/list';
import { follow, unfollow } from '@/library/gateway/board';
import { following } from '@/modules/follow';

const BoardList = ({ attributes }) => {
  const { category } = attributes || {};

  const { user, list, pagination, followings, error, loading } = useSelector(
    ({ user, boardList, follow, loading }) => ({
      user: user.user?.user2,
      list: boardList.data?.list,
      pagination: boardList.data?.pagination,
      followings: follow.following?.result,
      error: boardList.error,
      loading: loading['board/list']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleLogin = () => {
    navigate(`/member/login`);
  };

  const handleFollow = async (userNumber) => {
    try {
      /*
       * @param following_id 상대방 식별자
       */
      const following_id = userNumber;

      await follow({ following_id });

      dispatch(following());
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (userNumber) => {
    try {
      /*
       * @param following_id 상대방 식별자
       */
      const following_id = userNumber;

      await unfollow({ following_id });

      dispatch(following());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) dispatch(following());
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(boardList({ category, number, select: prefixed.select, keyword: prefixed.keyword }));

    return () => {
      console.log('unmount: board/list');

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
        keyword: prefixed.keyword,
        handleLogin,
        handleFollow,
        handleUnfollow,
        followings
      }}
    />
  );
};

export default BoardList;
