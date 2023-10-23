import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { changeField, formInitial } from '@/modules/form';
import Form from '@/components/form/passwordModify';
import { errorInitial } from '@/modules/user';
import { userPasswordModify } from '@/library/gateway/auth';

const PasswordModify = () => {
  const { token } = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const { error, formData } = useSelector(
    ({ form, user }) => ({
      formData: form.passwordModify,
      error: user.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordModify = async (event) => {
    event.preventDefault();

    const { password, passwordConfirm } = formData;

    if (![password, passwordConfirm].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!password.trim()) {
      setErrorMessage('패스워드를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,12}$/.test(password)) {
      setErrorMessage('패스워드는 알파벳 소문자, 숫자, 특수문자를 하나 이상 포함하고 6자리 이상 12자리 이하로 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!passwordConfirm.trim()) {
      setErrorMessage('패스워드 확인을 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage('패스워드가 일치하지 않습니다.');

      setVisibleLayer(true);

      return;
    }

    try {
      const result = await userPasswordModify({ token, password, passwordConfirm });

      setErrorMessage(`${result.data.message}`);

      setVisibleLayer(true);
    } catch (error) {
      setErrorMessage(`${error}`);

      setVisibleLayer(true);
    }
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'passwordModify', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(errorInitial());
  };

  useEffect(() => {
    console.log('패스워드 재설정 양식을 초기화합니다.');

    dispatch(formInitial());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      if (error) {
        setErrorMessage(error);

        setVisibleLayer(true);
      }
    }

    return () => {
      console.log('unmount: passwordModify');

      dispatch(formInitial());
    };
  }, [dispatch, error]);

  return <Form formData={formData} errorMessage={errorMessage} onPasswordModify={handlePasswordModify} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} />;
};

export default PasswordModify;
