import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Publish from '@/components/publish';
import { postModify } from '@/modules/board/modify';
import { postWrite } from '@/modules/board/write';
import { errorInitial } from '@/modules/user';
import { formInitial } from '@/modules/form';
import { postInitial } from '@/modules/board/view';

const Wrapper = ({ className, attributes }) => {
  // const { category, owner } = attributes || {};
  const { owner } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { read, category, level, time, subject, contents, thumbnail, tags, data, error } = useSelector(
    ({ form, post }) => ({
      read: post.data?.result[0],
      category: form.postWrite?.category,
      level: form.postWrite?.level,
      time: form.postWrite?.time,
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

  const publish = async () => {
    const categoryValue = !category ? read?.category : category;
    const levelValue = !level ? read?.level : level;
    const timeValue = /^(?:(?:[0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])|(?:[0-9]+)$/.test(time) ? time : read?.time;
    const subjectValue = !subject ? read?.subject : subject;
    const contentValue = !contents ? read?.contents : contents;

    if (![categoryValue, levelValue, timeValue, subjectValue, contentValue].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    const formData = new FormData();
    formData.append('category', categoryValue);
    formData.append('level', levelValue);
    formData.append('time', timeValue);
    formData.append('subject', subjectValue);
    formData.append('content', contentValue);

    if (thumbnail) formData.append('thumbnail', thumbnail.files);

    if (tags.length > 0) formData.append('tags', JSON.stringify(tags));

    if (owner) {
      await dispatch(postModify({ category: categoryValue, number, payload: formData }));

      navigate(`/board/${categoryValue}/read/${number}`);
    } else {
      await dispatch(postWrite({ category: categoryValue, payload: formData }));

      navigate(`/board/${categoryValue}/list/1`);
    }
  };

  const cancel = () => {
    navigate(`/board/${attributes.category}/list/1`);
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
