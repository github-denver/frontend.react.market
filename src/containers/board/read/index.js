import qs from 'qs';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { boardRead, initialRead } from '@/modules/board/read';
import Read from '@/components/board/read';
import { boardRemove } from '@/library/gateway/board';
import { follow, unfollow } from '@/library/gateway/board';
import { following } from '@/modules/follow';
import { commentList } from '@/modules/comment';

const BoardRead = ({ attributes }) => {
  const { category } = attributes || {};

  const { user, read, followings, comment, error, loading } = useSelector(
    ({ user, boardRead, follow, comment, loading }) => ({
      user: user.user?.user2,
      read: boardRead.data?.result[0],
      followings: follow.following?.result,
      comment: comment.data?.result,
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

  const owner = (() => {
    return (user && user.id) === (read && read.id);
  })();

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
    if (read?.number) dispatch(commentList({ postId: read.number }));
  }, [dispatch, read]);

  useEffect(() => {
    dispatch(boardRead({ category, number }));

    return () => {
      console.log('unmount: board/read');

      dispatch(initialRead());
    };
  }, [dispatch, location.pathname, category, number]);

  return (
    <Read
      attributes={{
        category,
        user,
        number,
        read,
        error,
        loading,
        owner,
        edit,
        remove,
        handleLogin,
        handleFollow,
        handleUnfollow,
        followings,
        comment
      }}
    />
  );
};

export default BoardRead;
