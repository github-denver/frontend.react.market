import React, { useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeField, changeThumbnail, formInitial } from '@/modules/form';
import { post, postInitial } from '@/modules/board/view';
import Write from '@/components/board/write';
import Quill from 'quill';
import { postWriteInitial } from '@/modules/board/write';

const Containers = ({ attributes }) => {
  const { category } = attributes || {};

  const [board, setBoard] = useState(false);

  const [fakeFields, setFakeFields] = useState({
    categoryField: true,
    levelField: true,
    hourField: true,
    minuteField: true,
    secondField: true
  });

  const [cookingTime, setCookingTime] = useState({
    hour: '00',
    minute: '00',
    second: '00'
  });

  const [hour, setHour] = useState([]);
  const [minute, setMinute] = useState([]);
  const [second, setSecond] = useState([]);

  const { user, form, recipesForm, error, loading } = useSelector(
    ({ form, user, post, loading }) => ({
      user: user.user?.user2,
      form: form.postWrite,
      recipesForm: form.recipesWrite,
      error: post.error,
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

  const handleClickFakeField = (type) => {
    setFakeFields((prevFields) => ({ ...prevFields, [`${type}Field`]: false }));
  };

  const handleChangeSubject = (event) => {
    field({ form: 'postWrite', key: 'subject', value: event.target.value });
  };

  const handleChangeThumbnail = (event, payload) => {
    const { formType, idx } = payload;

    let files = null;
    let preview = null;

    if (window.FileReader) {
      // 이미지 파일만 통과합니다.
      if (event.target.files.length === 0) {
        upload({
          form: formType,
          key: 'thumbnail',
          value: {
            files: null,
            preview: null
          },
          idx
        });

        return;
      }

      if (!event.target.files[0].type.match(/image\//)) return;

      // 읽기
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      files = event.target.files[0];

      // 읽은 후
      reader.onload = (event) => {
        preview = event.target.result;

        const formData = new FormData();
        formData.append('files', files);
        formData.append('preview', preview);

        upload({
          form: formType,
          key: 'thumbnail',
          value: {
            files: formData.get('files'),
            preview: formData.get('preview')
          },
          idx
        });
      };
    } else {
    }
  };

  const handleChangeSelect = (payload, event) => {
    const { key } = payload;

    const value = event.target.options[event.target.selectedIndex].value;

    if (key === 'category') {
      field({ form: 'postWrite', key, value });
    } else {
      setCookingTime((prevState) => ({ ...prevState, [key]: value }));
    }
  };

  const handleChangeChoice = (event) => {
    field({ form: 'postWrite', key: 'level', value: event.target.value });
  };

  useEffect(() => {
    field({ form: 'postWrite', key: 'time', value: `${cookingTime.hour}:${cookingTime.minute}:${cookingTime.second}` });
  }, [field, cookingTime.hour, cookingTime.minute, cookingTime.second]);

  useEffect(() => {
    let _hour = [];

    for (let i = 0; i <= 24; i++) {
      if (i >= 0 && i < 10) {
        _hour.push('0' + i);
      } else {
        _hour.push(i);
      }
    }

    setHour(_hour);

    let _minute = [];
    for (let i = 0; i <= 12; i++) {
      let gap = 5 * i;

      if (gap >= 0 && gap < 10) {
        _minute.push('0' + gap);
      } else {
        _minute.push(gap.toString());
      }
    }

    setMinute(_minute);

    let _second = [];
    for (let i = 0; i <= 12; i++) {
      let gap = 5 * i;

      if (gap >= 0 && gap < 10) {
        _second.push('0' + gap);
      } else {
        _second.push(gap.toString());
      }
    }

    setSecond(_second);
  }, []);

  useEffect(() => {
    if (!user) navigate(`/member/login`);

    return () => {
      // console.log('unmount: board/modify');
    };
  }, [dispatch, navigate, category, board, user]);

  return (
    <>
      <Write
        attributes={{
          category,
          user,
          formData: form,
          recipesFormData: recipesForm,
          field,
          upload,
          error,
          loading,
          fakeFields,
          onChangeSubject: handleChangeSubject,
          onChangeThumbnail: handleChangeThumbnail,
          onClickFakeField: handleClickFakeField,
          onChangeSelect: handleChangeSelect,
          onChangeChoice: handleChangeChoice,
          hour,
          minute,
          second
        }}
      />
    </>
  );
};

export default Containers;
