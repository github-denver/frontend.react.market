import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Component from '@/components/follow';
import { following, follower } from '@/modules/follow';
import { useNavigate } from 'react-router-dom';
import { follow, unfollow } from '../../library/gateway/board';

const Follow = ({ attributes }) => {
  const { category } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { user, accessToken, followings, followers, error, loadingFollowing, loadingFollower } = useSelector(
    ({ user, follow, loading }) => ({
      user: user.user?.user2,
      accessToken: user.auth?.accessToken,
      followings: follow.following?.result,
      followers: follow.follower?.result,
      error: follow.error,
      loadingFollowing: loading['follow/following'],
      loadingFollower: loading['follow/follower']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (error) {
      console.error(error);

      setErrorMessage(`에러가 발생하였습니다.`);

      setVisibleLayer(true);

      return;
    } else {
      if (!user && !accessToken) {
        console.log('로그인 화면으로 이동합니다.');

        navigate('/member/login');
      } else {
        dispatch(following());
        dispatch(follower());
      }
    }

    return () => {
      console.log('unmount: follow');
    };
  }, [dispatch, navigate, user, accessToken, error]);

  return <Component attributes={{ user, followings, followers, error, loadingFollowing, loadingFollower, handleUnfollow }} />;
};

export default Follow;
