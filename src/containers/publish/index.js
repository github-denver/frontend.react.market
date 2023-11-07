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
  const { type, owner, fakeFields } = attributes || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { read, category, level, time, subject, contents, thumbnail, tags, data, error, contents2, thumbnail2, error2 } = useSelector(({ form, post }) => {
    const test = type === 'modify' ? form.postModify : form.postWrite;
    const test2 = type === 'modify' ? form.recipesModify : form.recipesWrite;

    return {
      read: post.data?.result[0],
      category: test?.category,
      level: test?.level,
      time: test?.time,
      subject: test?.subject,
      contents: test?.contents,
      thumbnail: test?.thumbnail,
      tags: test?.tags,
      error: test?.error,

      contents2: test2?.contents,
      thumbnail2: test2?.thumbnail,
      error2: test2?.error
    };
  }, shallowEqual);

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
    const thumbnailValue = !thumbnail ? read?.thumbnail : thumbnail.files;
    console.log('1. thumbnailValue: ', thumbnailValue);

    const contentValue2 = !contents2 ? read?.contents : contents2;
    console.log('1. contentValue2: ', contentValue2);

    const recipeValue = !thumbnail2 ? read?.thumbnail : thumbnail2;
    console.log('1. recipeValue: ', recipeValue);

    const formData = new FormData();
    formData.append('category', categoryValue);
    formData.append('level', levelValue);
    formData.append('time', timeValue);
    formData.append('subject', subjectValue);
    formData.append('content', contentValue);
    formData.append('thumbnail', thumbnailValue);
    console.log("1. formData.get('thumbnail'): ", formData.get('thumbnail'));

    if (!fakeFields?.subjectField && !subject) {
      setErrorMessage('제목을 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (![categoryValue, levelValue, timeValue, subjectValue, contentValue].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (type !== 'modify' && ![thumbnailValue].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (tags?.length > 0) formData.append('tags', JSON.stringify(tags));

    // if (recipeValue?.length > 0) {}

    console.log('2. contentValue2?.length: ', contentValue2?.length);
    console.log('2. recipeValue?.length: ', recipeValue?.length);
    const asyncForEachFuc = async () => {
      for (const [index, value] of contentValue2.entries()) {
        console.log('2. value: ', value);

        await formData.append('content2', value);
      }

      for (const [index, value] of recipeValue.entries()) {
        console.log('2. value: ', value);

        await formData.append('recipe', value.files);
      }
    };

    asyncForEachFuc().then(async () => {
      console.log("3. formData.get('thumbnail'): ", formData.get('thumbnail'));
      console.log("3. formData.get('recipe'): ", formData.get('recipe'));

      if (owner) {
        await dispatch(postModify({ category: categoryValue, number, payload: formData }));

        navigate(`/board/${categoryValue}/read/${number}`);
      } else {
        await dispatch(postWrite({ category: categoryValue, payload: formData }));

        navigate(`/board/${categoryValue}/list/1`);
      }
    });
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

    console.log('error: ', error);
    if (error) console.error(error);

    console.log('error2: ', error2);
    if (error2) console.error(error2);

    return () => {
      // console.log('unmount: publish');

      dispatch(formInitial());
      dispatch(postInitial());
    };
  }, [dispatch, navigate, data, error, error2]);

  return <Publish className={className} attributes={{ publish, cancel, owner: !!owner }} errorMessage={errorMessage} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default Wrapper;
