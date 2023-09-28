import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { boardRead, initialRead } from '@/modules/board/read';
import Read from '@/components/board/read';
import { boardRemove } from '@/library/gateway/board';

const BoardRead = ({ attributes }) => {
  const { category } = attributes || {};

  const { user, read, error, loading } = useSelector(
    ({ user, boardRead, loading }) => ({
      user: user.user?.user2,
      read: boardRead.data?.result[0],
      error: boardRead.error,
      loading: loading['board/read']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0];

  if (number === 'list' || number === 'read') {
    number = 1;
  }

  const edit = () => {
    navigate(`/board/${category}/modify/${read.number}`);
  };

  const remove = async () => {
    try {
      await boardRemove({ category, number });

      navigate(`/board/${category}/list/1`);
    } catch (error) {
      console.error(error);
    }
  };

  const follows = async (id) => {
    try {
      await follows(id);
    } catch (error) {
      console.error(error);
    }
  };

  const owner = (() => {
    return (user && user.id) === (read && read.id);
  })();

  useEffect(() => {
    dispatch(boardRead({ category, number }));

    return () => {
      console.log('board/read 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.');

      dispatch(initialRead());
    };
  }, [dispatch, location.pathname, category, number]);

  return (
    <Read
      attributes={{
        category,
        number,
        read,
        error,
        loading,
        owner,
        edit,
        remove,
        follows
      }}
    />
  );
};

export default BoardRead;
