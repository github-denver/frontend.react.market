import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changeField, changeThumbnail, initialForm } from '@/modules/form';
import Write from '@/components/board/write';
import { boardRead } from '@/modules/board/read';
import { initialRead } from '@/modules/board/read';

const BoardWrite = ({ attributes }) => {
  const { category } = attributes || {};

  const [board, setBoard] = useState(false);

  const { form, user, read, subject, contents, thumbnail, error, loading } = useSelector(
    ({ form, user, boardRead, loading }) => ({
      form: form.boardWrite,
      user: user.user?.user2,
      read: boardRead.data?.result[0],
      subject: form.boardWrite?.subject,
      contents: form.boardWrite?.contents,
      thumbnail: form.boardWrite?.thumbnail,
      error: boardRead.error,
      loading: loading['board/read']
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
    if (!user) {
      // navigate(`/`);
    }

    if (number !== 'write' && !board) {
      setBoard(true);

      dispatch(boardRead({ category, number }));
    }

    return () => {
      console.log('boardWrite/write 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.');

      dispatch(initialForm());
      dispatch(initialRead());
    };
  }, [dispatch, navigate, category, number, user, board]);

  return (
    <Write
      attributes={{
        formData: form,
        user,
        read,
        error,
        category,
        subject,
        contents,
        thumbnail,
        field,
        upload,
        loading,
        owner: read?.id
      }}
    />
  );
};

export default BoardWrite;
