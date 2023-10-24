import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, formInitial } from '@/modules/form';
import Form from '@/components/form/register';
import { userRegister, errorInitial } from '@/modules/user';
import { idCheck, nameCheck, emailCheck } from '@/library/gateway/auth';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const [duplicateChecks, setDuplicateChecks] = useState({
    idCheck: false,
    nameCheck: false,
    emailCheck: false
  });

  const { user, message, error, formData } = useSelector(
    ({ form, user }) => ({
      formData: form.register,
      user: user.user?.user2,
      message: user.auth?.message,
      error: user.error
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitRegister = (event) => {
    event.preventDefault();

    const { id, name, password, passwordConfirm, email } = formData;

    if (![id, name, password, passwordConfirm].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!/^[A-Za-z0-9-._]{4,8}$/.test(id)) {
      setErrorMessage('아이디는 알파벳 소·대문자, 숫자, - . _만 입력 가능하고 4자리 이상 8자리 이하로 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!/^[가-힣A-Za-z0-9]{2,6}$/.test(id)) {
      setErrorMessage('닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리 이하로 입력해 주세요.');

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

    if (password !== passwordConfirm) {
      setErrorMessage('패스워드가 일치하지 않습니다.');

      setVisibleLayer(true);

      return;
    }

    if (!duplicateChecks.idCheck || !duplicateChecks.nameCheck || !duplicateChecks.emailCheck) {
      setErrorMessage('중복검사를 진행해 주세요.');

      setVisibleLayer(true);

      return;
    }

    dispatch(userRegister({ id, name, password, email }));

    // console.log('로그인 화면으로 이동합니다.');
    navigate('/member/login');
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(errorInitial());
  };

  const handleDuplicateCheck = async (type, checkFunction, fieldName, labelName) => {
    const { [fieldName]: fieldValue } = formData;

    if (![fieldValue].every(Boolean)) {
      setErrorMessage(`${labelName}을(를) 입력해 주세요.`);

      setVisibleLayer(true);

      return;
    }

    if (fieldName === 'id') {
      if (/^[A-Za-z0-9-._]{4,8}$/.test(fieldValue)) {
      } else {
        setErrorMessage('아이디는 알파벳 소·대문자, 숫자, - . _만 입력 가능하고 4자리 이상 8자리 이하로 입력해 주세요.');

        setVisibleLayer(true);

        return;
      }
    }

    if (fieldName === 'name') {
      if (/^[가-힣A-Za-z0-9]{2,6}$/.test(fieldValue)) {
      } else {
        setErrorMessage('닉네임은 한글과 알파벳, 숫자만 입력 가능하고 2자리 이상 6자리 이하로 입력해 주세요.');

        setVisibleLayer(true);

        return;
      }
    }

    const result = await checkFunction({ [fieldName]: fieldValue });

    if (result.data.length > 0) {
      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: false }));

      setErrorMessage(`사용 불가능한 ${labelName}입니다.`);

      setVisibleLayer(true);
    } else {
      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: true }));

      setErrorMessage(`사용 가능한 ${labelName}입니다.`);

      setVisibleLayer(true);
    }
  };

  useEffect(() => {
    // console.log('회원가입 양식을 초기화합니다.');

    dispatch(formInitial());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        setErrorMessage('이미 가입된 아이디입니다.');

        setVisibleLayer(true);
      } else {
        setErrorMessage(`에러가 발생하였습니다.`);

        setVisibleLayer(true);
      }
    } else {
      if (user) {
        // console.log('메인 화면으로 이동합니다.');

        navigate('/');
      }

      /*
      if (message) {
        // console.log('로그인 화면으로 이동합니다.');

        navigate('/member/login');
      }
      */
    }

    return () => {
      // console.log('unmount: register');

      dispatch(formInitial());
    };
  }, [dispatch, navigate, user, message, error]);

  return <Form formData={formData} errorMessage={errorMessage} onSubmitRegister={handleSubmitRegister} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} onIdCheck={() => handleDuplicateCheck('idCheck', idCheck, 'id', '아이디')} onNameCheck={() => handleDuplicateCheck('nameCheck', nameCheck, 'name', '닉네임')} onEmailCheck={() => handleDuplicateCheck('emailCheck', emailCheck, 'email', '이메일')} />;
};

export default Register;
