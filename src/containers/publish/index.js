import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Publish from '@/components/publish';
import { postModify } from '@/modules/board/modify';
import { postWrite } from '@/modules/board/write';
import { errorInitial } from '@/modules/user';
import { formInitial } from '@/modules/form';
import { postInitial } from '@/modules/board/view';

const Wrapper = ({ className, attributes }) => {
  const { category, owner } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { read, subject, contents, thumbnail, tags, data, error } = useSelector(
    ({ form, post }) => ({
      read: post.data?.result[0],
      subject: form.postWrite?.subject,
      contents: form.postWrite?.contents,
      thumbnail: form.postWrite?.thumbnail,
      tags: form.postWrite?.tags,
      error: form.postWrite?.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const number = location.pathname.split('/').splice(-1)[0];

  const publish = () => {
    const subjectValue = !subject ? read.subject : subject;
    const contentValue = !contents ? read.contents : contents;

    const formData = new FormData();
    formData.append('category', category);
    formData.append('subject', subjectValue);
    formData.append('content', contentValue);
    formData.append('tags', JSON.stringify(tags));

    if (thumbnail) formData.append('thumbnail', thumbnail.files);

    if (owner) {
      console.log('postModify({ .. }) 호출');

      dispatch(postModify({ category, number, payload: formData }));

      navigate(`/board/${category}/read/${number}`);
    } else {
      console.log('postWrite({ .. }) 호출');

      dispatch(postWrite({ category, payload: formData }));

      navigate(`/board/${category}/list/1`);
    }
  };

  const cancel = () => {
    navigate(`/board/${category}/list/1`);
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(errorInitial());
  };

  useEffect(() => {
    if (data) navigate(`/board/${data.service}/read/${data.number}`);

    if (error) console.error(error);

    return () => {
      console.log('unmount: publish');

      dispatch(formInitial());
      dispatch(postInitial());
    };
  }, [dispatch, navigate, data, error]);

  return <Publish className={className} attributes={{ publish, cancel, owner: !!owner }} errorMessage={errorMessage} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default Wrapper;
