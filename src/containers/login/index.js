import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, formInitial } from '@/modules/form';
import Form from '@/components/form/login';
import { userCheck, userLogin, errorInitial } from '@/modules/user';
import Cookies from 'js-cookie';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { user, accessToken, error, formData } = useSelector(
    ({ form, user }) => ({
      formData: form.login,
      user: user.user?.user2,
      accessToken: user.auth?.accessToken,
      error: user.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    const { id, password } = formData;

    if (!id.trim()) {
      setErrorMessage('아이디를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!password.trim()) {
      setErrorMessage('패스워드를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    dispatch(userLogin({ id, password }));
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(errorInitial());
  };

  useEffect(() => {
    console.log('로그인 양식을 초기화합니다.');

    dispatch(formInitial());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      setErrorMessage(`${error} 로그인에 실패했습니다.`);

      setVisibleLayer(true);
    } else if (accessToken) {
      console.log('로그인에 성공했습니다.');

      dispatch(userCheck(accessToken));
    }
  }, [dispatch, accessToken, error]);

  useEffect(() => {
    if (user) {
      console.log('사용자 확인에 성공했습니다. 메인 화면으로 이동합니다.');

      navigate('/');

      try {
        localStorage.setItem('user', JSON.stringify(user));

        Cookies.set('accessToken', accessToken);
      } catch (error) {
        console.error(error);
      }
    }

    return () => {
      console.log('unmount: login');

      dispatch(formInitial());
    };
  }, [dispatch, navigate, user, accessToken]);

  return <Form formData={formData} errorMessage={errorMessage} onSubmitLogin={handleSubmitLogin} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default Login;
