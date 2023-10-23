import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { post, postInitial } from '@/modules/board/view';
import Read from '@/components/board/view';
import { postDelete } from '@/library/gateway/board';
import { follow, unfollow } from '@/library/gateway/board';
import { following } from '@/modules/follow';
import { commentList, commentInitial } from '@/modules/comment';
import { changeField } from '@/modules/form';
import { commentWrite } from '@/modules/comment';
import { commentRemove } from '@/library/gateway/comment';
import { commentModify } from '@/library/gateway/comment';
import { formInitial } from '@/modules/form';

const Containers = ({ attributes }) => {
  const { category } = attributes || {};

  const [commentModifyVisible, setCommentModifyVisible] = useState(null);

  const { user, read, followings, comment, error, loading, formData } = useSelector(
    ({ form, user, post, follow, comment, loading }) => ({
      formData: form,
      user: user.user?.user2,
      read: post.data?.result[0],
      followings: follow.following?.result,
      comment: comment.data?.result,
      error: post.error,
      loading: loading['POST']
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
      await postDelete({ category, number });

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
    const { postId, parentCommentId, category } = payload;

    const { content } = formData.comment;

    dispatch(commentWrite({ postId, parentCommentId, category, content }));

    dispatch(commentList({ postId: read.number, category }));

    dispatch(formInitial());
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

      dispatch(commentList({ postId: read.number, category }));

      setCommentModifyVisible(() => null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentRemove = async (payload) => {
    const { commentId } = payload;

    try {
      await commentRemove({ commentId });

      dispatch(commentList({ postId: read.number, category }));
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
    dispatch(formInitial());
    dispatch(post({ category, number }));
    dispatch(commentList({ postId: number, category }));

    return () => {
      console.log('unmount: board/view');

      dispatch(postInitial());
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

export default Containers;
