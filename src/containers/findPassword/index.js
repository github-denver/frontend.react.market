import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { changeField, initialForm } from '@/modules/form';
import Form from '@/components/form/findPassword';
import { emailCheck, sendEmail } from '@/library/gateway/auth';

const FindPassword = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visibleLayer, setVisibleLayer] = useState(false);

  const [duplicateChecks, setDuplicateChecks] = useState({
    emailCheck: false
  });

  const { error, formData } = useSelector(
    ({ form }) => ({
      formData: form.modifyPassword,
      error: null
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleSendEmail = async (event) => {
    event.preventDefault();

    const { email } = formData;

    if (![email].every(Boolean)) {
      setErrorMessage('필수 정보를 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!duplicateChecks.emailCheck) {
      setErrorMessage('이메일 확인을 진행해 주세요.');

      setVisibleLayer(true);

      return;
    }

    if (!email.trim()) {
      setErrorMessage('이메일을 입력해 주세요.');

      setVisibleLayer(true);

      return;
    }

    try {
      const result = await sendEmail({ email });
      console.log('(containers → findPassword → 2) result: ', result);

      setErrorMessage('메일이 발송되었습니다.');

      setVisibleLayer(true);
    } catch (error) {
      setErrorMessage(`메일이 발송이 실패되었습니다. ${error}`);

      setVisibleLayer(true);
    }
  };

  const handleChangeField = (event) => {
    const { value, name } = event.target;

    dispatch(changeField({ form: 'modifyPassword', key: name, value }));
  };

  const handleCloseLayer = () => {
    setVisibleLayer(false);
  };

  const handleDuplicateCheck = async (type, checkFunction, fieldName, labelName) => {
    const { [fieldName]: fieldValue } = formData;

    if (![fieldValue].every(Boolean)) {
      setErrorMessage(`${labelName}을(를) 입력해 주세요.`);

      setVisibleLayer(true);

      return;
    }

    const result = await checkFunction({ [fieldName]: fieldValue });

    if (result.data.length === 0) {
      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: false }));

      // setErrorMessage(`사용 불가능한 ${labelName}입니다.`);

      setErrorMessage(`${labelName}이(가) 존재하지 않습니다.`);

      setVisibleLayer(true);
    } else {
      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: true }));

      // setErrorMessage(`사용 가능한 ${labelName}입니다.`);

      setErrorMessage(`${labelName}이(가) 확인되었습니다.`);

      setVisibleLayer(true);
    }
  };

  useEffect(() => {
    console.log('이메일 인증 양식을 초기화합니다.');

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
      console.log('unmount: findPassword');

      dispatch(initialForm());
    };
  }, [dispatch, error]);

  return <Form formData={formData} errorMessage={errorMessage} onSendEmail={handleSendEmail} onChangeField={handleChangeField} onCloseLayer={handleCloseLayer} visibleLayer={visibleLayer} onEmailCheck={() => handleDuplicateCheck('emailCheck', emailCheck, 'email', '이메일')} />;
};

export default FindPassword;
