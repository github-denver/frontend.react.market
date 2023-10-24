import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changeField, changeThumbnail, formInitial } from '@/modules/form';
import Write from '@/components/board/write';
import { post } from '@/modules/board/view';
import { postInitial } from '@/modules/board/view';

const Containers = ({ attributes }) => {
  const { category } = attributes || {};

  const [board, setBoard] = useState(false);

  const { form, user, read, subject, contents, thumbnail, error, loading } = useSelector(
    ({ form, user, post, loading }) => ({
      form: form.postWrite,
      user: user.user?.user2,
      read: post.data?.result[0],
      subject: form.postWrite?.subject,
      contents: form.postWrite?.contents,
      thumbnail: form.postWrite?.thumbnail,
      error: post.error,
      loading: loading['POST_WRITE']
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
    // if (!user) navigate(`/`);

    if (number !== 'write' && !board) {
      setBoard(true);

      dispatch(post({ category, number }));
    }

    return () => {
      // console.log('unmount: board/write');

      dispatch(formInitial());
      dispatch(postInitial());
    };
  }, [dispatch, navigate, category, number, user, board]);

  return (
    <Write
      attributes={{
        formData: form,
        user,
        error,
        category,
        subject,
        contents,
        thumbnail,
        field,
        upload,
        loading
      }}
    />
  );
};

export default Containers;
