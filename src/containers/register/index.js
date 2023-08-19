import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormRegisterComponent from "@/components/form/register";
import { register } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { formChangeField } from "@/modules/form";
import { initialRegisterForm } from "@/modules/form";

const RegisterContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, auth, error, user } = useSelector(
    ({ form, auth, user }) => {
      return {
        formData: form.register,
        auth: auth.auth,
        error: auth.error,
        user: user.user,
      };
    },
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

    if ([id, name, password, passwordConfirm].includes("")) {
      setErrorMessage("필수 정보를 입력해 주세요!");

      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage("패스워드가 일치하지 않아요!");

      return;
    }

    dispatch(register({ id, name, password, email }));
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

    console.log("auth: ", auth);
    console.log("typeof auth: ", typeof auth);
    if (auth) {
      console.log("로그인 화면으로 이동합니다.");

      navigate("/member/login");

      return () => {
        // 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.
        console.log(
          "로그인 화면으로 이동 전에 언 마운트 될 때 리덕스에서 회원가입 데이터를 삭제합니다."
        );
        dispatch(initialRegisterForm());
      };
    }

    console.log("user: ", user);
    console.log("typeof user: ", typeof user);
    if (user) {
      // 사용자 확인에 성공했습니다.

      console.log("메인 화면으로 이동합니다.");

      navigate("/");

      return () => {
        // 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.
        console.log(
          "메인 화면으로 이동 전에 언 마운트 될 때 리덕스에서 회원가입 데이터를 삭제합니다."
        );
        dispatch(initialRegisterForm());
      };
    }
  }, [navigate, dispatch, auth, error, user]);

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
