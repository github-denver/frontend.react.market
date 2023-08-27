import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RegisterComponent from "@/components/form/register";
import { register } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { formChangeField } from "@/modules/form";
import { initialRegisterForm } from "@/modules/form";
import { idCheck, nameCheck, emailCheck } from "@/library/gateway/auth";
import { sendEmail } from "@/library/gateway/auth";

const RegisterContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [duplicateChecks, setDuplicateChecks] = useState({
    idCheck: false,
    nameCheck: false,
    emailCheck: false,
  });

  const { formData, auth, error, user } = useSelector(
    ({ form, auth, user }) => ({
      formData: form.register,
      auth: auth.auth,
      error: auth.error,
      user: user.user,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    dispatch(formChangeField({ form: "register", key: name, value }));
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    const { id, name, password, passwordConfirm, email } = formData;

    if (![id, name, password, passwordConfirm].every(Boolean)) {
      setErrorMessage("필수 정보를 입력해 주세요.");

      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage("패스워드가 일치하지 않습니다.");

      return;
    }

    if (
      !duplicateChecks.idCheck ||
      !duplicateChecks.nameCheck ||
      !duplicateChecks.emailCheck
    ) {
      setErrorMessage("중복검사를 진행해 주세요.");

      return;
    }

    dispatch(register({ id, name, password, email }));
  };

  const handleDuplicateCheck = async (
    type,
    checkFunction,
    fieldName,
    labelName
  ) => {
    const { [fieldName]: fieldValue } = formData;

    if (![fieldValue].every(Boolean)) {
      setErrorMessage(`${labelName}을(를) 입력해 주세요.`);
      return;
    }

    const result = await checkFunction({ [fieldName]: fieldValue });

    if (result.data.length > 0) {
      setErrorMessage(`사용 불가능한 ${labelName}입니다.`);

      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: false }));
    } else {
      setErrorMessage(`사용 가능한 ${labelName}입니다.`);

      setDuplicateChecks((prevChecks) => ({ ...prevChecks, [type]: true }));
    }
  };

  const handleSendEmail = async () => {
    const { email } = formData;

    const result = await sendEmail({ email });
  };

  const handleLayerClose = () => {
    setErrorMessage(null);
  };

  useEffect(() => {
    console.log("회원가입 양식을 초기화합니다.");

    dispatch(initialRegisterForm());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        setErrorMessage("이미 가입된 아이디입니다.");
      } else {
        setErrorMessage(`에러가 발생하였습니다.`);
      }
    } else if (auth) {
      console.log("로그인 화면으로 이동합니다.");

      navigate("/member/login");
    } else if (user) {
      console.log("메인 화면으로 이동합니다.");

      navigate("/");
    }

    return () => {
      console.log("언마운트 될 때 리덕스에서 회원가입 데이터를 삭제합니다.");
      dispatch(initialRegisterForm());
    };
  }, [navigate, dispatch, auth, error, user]);

  return (
    <RegisterComponent
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onRegisterSubmit={handleRegisterSubmit}
      onIdCheck={() => handleDuplicateCheck("idCheck", idCheck, "id", "아이디")}
      onNameCheck={() =>
        handleDuplicateCheck("nameCheck", nameCheck, "name", "닉네임")
      }
      onEmailCheck={() =>
        handleDuplicateCheck("emailCheck", emailCheck, "email", "이메일")
      }
      onLayerClose={handleLayerClose}
      onSendEmail={handleSendEmail}
    />
  );
};

export default RegisterContainer;
