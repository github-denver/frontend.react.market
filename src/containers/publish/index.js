import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Publish from '@/components/publish';
import { boardModify } from '@/modules/board/modify';
import { boardWrite } from '@/modules/board/write';

const Wrapper = ({ className, attributes }) => {
  const { category, owner } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const { read, subject, contents, thumbnail, tags, data, error } = useSelector(
    ({ form, boardRead }) => ({
      read: boardRead.data?.result[0],
      subject: form.boardWrite?.subject,
      contents: form.boardWrite?.contents,
      thumbnail: form.boardWrite?.thumbnail,
      tags: form.boardWrite?.tags,
      error: form.boardWrite?.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const number = location.pathname.split('/').splice(-1)[0];

  const publish = () => {
    const formData = new FormData();

    formData.append('category', category);
    if (!subject) {
      formData.append('subject', read.subject);
    } else {
      formData.append('subject', subject);
    }
    if (!contents) {
      formData.append('content', read.content);
    } else {
      formData.append('content', contents);
    }
    formData.append('tags', JSON.stringify(tags));

    if (thumbnail) formData.append('thumbnail', thumbnail.files);

    if (owner) {
      dispatch(boardModify({ category, number, payload: formData }));

      navigate(`/board/${category}/read/${number}`);
    } else {
      dispatch(boardWrite({ category, payload: formData }));
    }
  };

  const cancel = () => {
    navigate(`/board/${category}/list/1`);
  };

  useEffect(() => {
    if (data) {
      navigate(`/board/${data.service}/read/${data.number}`);
    }

    if (error) {
      console.error(error);
    }
  }, [navigate, data, error]);

  return <Publish className={className} attributes={{ publish, cancel, owner: !!owner }} />;
};

export default Wrapper;
