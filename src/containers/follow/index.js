import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Component from '@/components/follow';
import { following, follower } from '../../modules/follow';
import { useNavigate } from 'react-router-dom';

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
        const { userNumber } = user;

        dispatch(following({ following_id: userNumber }));
        dispatch(follower({ follower_id: userNumber }));
      }
    }

    return () => {
      console.log('follow 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.');
    };
  }, [dispatch, navigate, user, accessToken, error]);

  return <Component attributes={{ user, followings, followers, error, loadingFollowing, loadingFollower }} />;
};

export default Follow;
