import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoginFormComponent from "@/components/form/login";
import { login } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { userCheck } from "@/modules/user";
import Cookies from "js-cookie";
import { formChangeField } from "@/modules/form";
import { initialLoginForm } from "@/modules/form";

const LoginContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, accessToken, error, user } = useSelector(
    ({ form, auth, user }) => {
      let accessToken = null;
      let savedUser = null;

      if (auth.auth?.accessToken) {
        accessToken = auth.auth.accessToken;
      }

      if (user.user?.user2) {
        savedUser = user.user.user2;
      }

      return {
        formData: form.login,
        accessToken,
        error: auth.error,
        user: savedUser,
      };
    },
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    dispatch(formChangeField({ form: "login", key: name, value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const { id, password } = formData;

    dispatch(login({ id, password }));
  };

  useEffect(() => {
    console.log("로그인 양식을 초기화합니다.");
    dispatch(initialLoginForm());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      setErrorMessage(`${error} 로그인에 실패했습니다.`);

      return;
    }

    if (accessToken) {
      console.log("로그인에 성공했습니다.");

      dispatch(userCheck(accessToken));
    }
  }, [dispatch, accessToken, error]);

  useEffect(() => {
    console.log("user: ", user);
    console.log("typeof user: ", typeof user);
    if (user) {
      // 사용자 확인에 성공했습니다.

      console.log("메인 화면으로 이동합니다.");

      navigate("/");

      try {
        localStorage.setItem("user", JSON.stringify(user));

        Cookies.set("accessToken", accessToken);
      } catch (error) {
        console.error(error);
      }
    }
  }, [navigate, accessToken, user]);

  return (
    <LoginFormComponent
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onLoginSubmit={handleLoginSubmit}
    />
  );
};

export default LoginContainer;
