import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { changeField, initialForm } from '@/modules/form';
import Form from '@/components/form/modifyPassword';
import { initialError } from '@/modules/user';
import { userModifyPassword } from '../../library/gateway/auth';

const ModifyPassword = () => {
  const { token } = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);
  const [visibleLayerMessage, setVisibleLayerMessage] = useState(null);

  const { error, formData } = useSelector(
    ({ form, user }) => ({
      formData: form.modifyPassword,
      error: user.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModifyPassword = async (event) => {
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
      const result = await userModifyPassword({ token, password, passwordConfirm });

      setErrorMessage(`${result.data.message}`);

      setVisibleLayer(true);
    } catch (error) {
      setErrorMessage(`${error}`);

      setVisibleLayer(true);
    }
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'modifyPassword', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(initialError());
  };

  useEffect(() => {
    console.log('패스워드 재설정 양식을 초기화합니다.');

    dispatch(initialForm());
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
      console.log('언마운트 될 때 리덕스에서 패스워드 재설정 양식을 초기화합니다.');

      dispatch(initialForm());
    };
  }, [dispatch, error]);

  return <Form formData={formData} errorMessage={errorMessage} onModifyPassword={handleModifyPassword} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} visibleLayerMessage={visibleLayerMessage} />;
};

export default ModifyPassword;
