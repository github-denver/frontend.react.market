import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initialForm } from '@/modules/form';
import Form from '@/components/form/profile';
import { userProfileModify, initialError } from '@/modules/user';
import Cookies from 'js-cookie';

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { user, accessToken, error, loading, formData } = useSelector(
    ({ form, user, loading }) => ({
      formData: form.register,
      user: user.user?.user2,
      accessToken: user.auth?.accessToken,
      error: user.error,
      loading: loading['user/check']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitProfileModify = (event) => {
    event.preventDefault();

    let { id, name, password, passwordConfirm, email } = formData;

    if (id === '') id = user.id;
    if (name === '') name = user.name;
    if (email === '') email = user.email;

    if (password === '') {
      setErrorMessage('패스워드를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage('패스워드가 일치하지 않습니다.');

      setVisibleLayer(true);

      return;
    }

    dispatch(userProfileModify({ id, name, password, email }));
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(initialError());
  };

  useEffect(() => {
    console.log('회원정보 수정 양식을 초기화합니다.');

    dispatch(initialForm());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      console.log('회원정보 수정 양식에 접근할 때는 사용자 정보를 localStorage에 설정합니다.');

      try {
        localStorage.setItem('user', JSON.stringify(user));

        Cookies.set('accessToken', accessToken);
      } catch (error) {
        console.error(error);
      }
    }
  }, [user, accessToken]);

  useEffect(() => {
    if (error) {
      console.error(error);

      setErrorMessage(`에러가 발생하였습니다.`);

      setVisibleLayer(true);

      return;
    } else {
      if (!user && !accessToken) {
        console.log('로그인 화면으로 이동합니다.');

        navigate('/member/login');
      }
    }

    return () => {
      console.log('unmount: profile');
    };
  }, [navigate, user, accessToken, error]);

  return <Form formData={formData} errorMessage={errorMessage} user={user} error={error} loading={loading} onSubmitProfileModify={handleSubmitProfileModify} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default Profile;
