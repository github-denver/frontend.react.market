import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Publish from '@/components/publish';
import { boardModify } from '@/modules/board/modify';
import { boardWrite } from '@/modules/board/write';
import { initialError } from '@/modules/user';

const Wrapper = ({ className, attributes }) => {
  const { category, owner } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

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
    console.group('const publish = () => { .. }');
    const subjectValue = !subject ? read.subject : subject;
    const contentValue = !contents ? read.contents : contents;

    const formData = new FormData();
    formData.append('category', category);
    formData.append('subject', subjectValue);
    formData.append('content', contentValue);
    formData.append('tags', JSON.stringify(tags));

    if (thumbnail) {
      formData.append('thumbnail', thumbnail.files);
    }

    if (owner) {
      dispatch(boardModify({ category, number, payload: formData }));

      navigate(`/board/${category}/read/${number}`);
    } else {
      dispatch(boardWrite({ category, payload: formData }));

      navigate(`/board/${category}/list/1`);
    }
    console.groupEnd();
  };

  const cancel = () => {
    navigate(`/board/${category}/list/1`);
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(initialError());
  };

  useEffect(() => {
    if (data) {
      navigate(`/board/${data.service}/read/${data.number}`);
    }

    if (error) {
      console.error(error);
    }
  }, [navigate, data, error]);

  return <Publish className={className} attributes={{ publish, cancel, owner: !!owner }} errorMessage={errorMessage} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default Wrapper;
