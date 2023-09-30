import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initialForm } from '@/modules/form';
import Form from '@/components/form/profile';
import { userProfileModify, initialError } from '@/modules/user';
import Cookies from 'js-cookie';
import { nameCheck, emailCheck } from '@/library/gateway/auth';

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const [duplicateChecks, setDuplicateChecks] = useState({
    nameCheck: true,
    emailCheck: true
  });

  const [fakeFields, setFakeFields] = useState({
    nameField: true,
    emailField: true
  });

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

    console.log('id: ', id);
    console.log('name: ', name);
    console.log('password: ', password);
    console.log('passwordConfirm: ', passwordConfirm);
    console.log('email: ', email);

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

    if (!duplicateChecks.nameCheck || !duplicateChecks.emailCheck) {
      setErrorMessage('중복검사를 진행해 주세요.');

      setVisibleLayer(true);

      return;
    }

    // dispatch(userProfileModify({ id, name, password, email }));
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);

    dispatch(initialError());
  };

  const handleDuplicateCheck = async (type, checkFunction, fieldName, labelName) => {
    const { [fieldName]: fieldValue } = formData;

    if (![fieldValue].every(Boolean)) {
      setErrorMessage(`${labelName}을(를) 입력해 주세요.`);

      setVisibleLayer(true);

      return;
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

  const handleClickFakeField = (type) => {
    setDuplicateChecks((prevChecks) => ({ ...prevChecks, [`${type}Check`]: false }));
    setFakeFields((prevFields) => ({ ...prevFields, [`${type}Field`]: false }));
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

  return <Form formData={formData} errorMessage={errorMessage} user={user} error={error} loading={loading} onSubmitProfileModify={handleSubmitProfileModify} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} onNameCheck={() => handleDuplicateCheck('nameCheck', nameCheck, 'name', '닉네임')} onEmailCheck={() => handleDuplicateCheck('emailCheck', emailCheck, 'email', '이메일')} fakeFields={fakeFields} onClickFakeField={handleClickFakeField} />;
};

export default Profile;
