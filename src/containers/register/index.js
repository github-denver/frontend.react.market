import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormRegisterComponent from "@/components/form/register";
import { register } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { formChangeField } from "@/modules/form";
import { initialRegisterForm } from "@/modules/form";

const RegisterContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, accessToken, error } = useSelector(({ form, auth }) => {
    let accessToken = null;

    if (auth.auth?.accessToken) {
      accessToken = auth.auth.accessToken;
    }

    return {
      formData: form.register,
      accessToken,
      error: auth.error,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    dispatch(formChangeField({ form: "register", key: name, value }));
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    const { id, name, password, passwordConfirm } = formData;

    if ([id, name, password, passwordConfirm].includes("")) {
      setErrorMessage("필수 정보를 입력해 주세요!");

      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage("패스워드가 일치하지 않아요!");

      return;
    }

    dispatch(register({ id, name, password }));
  };

  useEffect(() => {
    console.log("회원가입 양식을 초기화합니다.");
    dispatch(initialRegisterForm());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      if (error.response.status === 400) {
        setErrorMessage("이미 가입된 아이디입니다.");

        return;
      }

      setErrorMessage(`에러가 발생하였습니다.`);

      return;
    }

    if (accessToken) {
      console.log("회원가입에 성공했습니다.");

      navigate("/member/login");

      return () => {
        // 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.
        dispatch(initialRegisterForm());
      };
    }
  }, [navigate, dispatch, accessToken, error]);

  return (
    <FormRegisterComponent
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onRegisterSubmit={handleRegisterSubmit}
    />
  );
};

export default RegisterContainer;
