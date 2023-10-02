import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { boardRead, initialRead } from '@/modules/board/read';
import Read from '@/components/board/read';
import { boardRemove } from '@/library/gateway/board';
import { follow, unfollow } from '@/library/gateway/board';
import { following } from '@/modules/follow';
import { commentList } from '@/modules/comment';
import { changeField } from '@/modules/form';
import { commentWrite } from '@/modules/comment';
import { commentRemove } from '@/library/gateway/comment';
import { commentModify } from '../../../library/gateway/comment';

const BoardRead = ({ attributes }) => {
  const { category } = attributes || {};

  const [commentModifyVisible, setCommentModifyVisible] = useState(null);

  const { user, read, followings, comment, error, loading, formData } = useSelector(
    ({ form, user, boardRead, follow, comment, loading }) => ({
      formData: form,
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

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'comment', key: name, value }));
  };

  const handleCommentSubmit = (payload) => {
    const { postId, parentCommentId } = payload;

    const { content } = formData.comment;

    dispatch(commentWrite({ postId, parentCommentId, content }));
    dispatch(commentList({ postId: read.number }));
  };

  const handleCommentModifyVisible = (payload) => {
    const { commentId } = payload;

    setCommentModifyVisible(() => commentId);
  };

  const handleCommentModify = async (payload) => {
    const { commentId } = payload;

    const { modifyContent } = formData.comment;

    try {
      await commentModify({ commentId, modifyContent });

      dispatch(commentList({ postId: read.number }));

      setCommentModifyVisible(() => null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentRemove = async (payload) => {
    const { commentId } = payload;

    try {
      await commentRemove({ commentId });

      dispatch(commentList({ postId: read.number }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user && read) {
      dispatch(following());
    }
  }, [dispatch, user, read]);

  useEffect(() => {
    dispatch(boardRead({ category, number }));

    dispatch(commentList({ postId: number }));

    return () => {
      console.log('unmount: board/read');

      dispatch(initialRead());
    };
  }, [dispatch, location.pathname, category, number]);

  return (
    <Read
      attributes={{
        category,
        formData,
        user,
        number,
        read,
        error,
        loading,
        onChangeField: handleChangeField,
        owner,
        edit,
        remove,
        handleLogin,
        handleFollow,
        handleUnfollow,
        followings,
        comment,
        handleCommentSubmit,
        handleCommentModifyVisible,
        commentModifyVisible,
        handleCommentModify,
        handleCommentRemove
      }}
    />
  );
};

export default BoardRead;
