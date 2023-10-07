import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeField, changeThumbnail, formInitial } from '@/modules/form';
import { post, postInitial } from '@/modules/board/view';
import Write from '@/components/board/write';

const Containers = ({ attributes }) => {
  const { category } = attributes || {};

  const [board, setBoard] = useState(false);

  const { user, form, read, loading } = useSelector(
    ({ form, user, post, loading }) => ({
      user: user.user?.user2,
      form: form.postWrite,
      read: post.data?.result[0],
      loading: loading['POST']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const field = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);
  const upload = useCallback((payload) => dispatch(changeThumbnail(payload)), [dispatch]);

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0];

  if (number === 'list' || number === 'read') {
    number = 1;
  }

  useEffect(() => {
    if (!user) navigate(`/member/login`);

    if (number !== 'write' && !board) {
      setBoard(true);

      dispatch(post({ category, number }));
    }

    return () => {
      console.log('unmount: board/write');

      // dispatch(formInitial());
      // dispatch(postInitial());
    };
  }, [dispatch, navigate, category, board, user, number]);

  return (
    <Write
      attributes={{
        category,
        user,
        formData: form,
        field,
        upload,
        read,
        owner: read?.id
      }}
    />
  );
};

export default Containers;
