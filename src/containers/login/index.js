import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoginFormComponent from "@/components/form/login";
import { login } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { userCheck } from "@/modules/user";
import Cookies from "js-cookie";
import { formChangeField, initialLoginForm } from "@/modules/form";

const LoginContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, accessToken, error, user } = useSelector(
    ({ form, auth, user }) => ({
      formData: form.login,
      accessToken: auth.auth?.accessToken,
      error: auth.error,
      user: user.user?.user2,
    }),
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

    if (!id.trim()) {
      setErrorMessage("아이디를 입력해 주세요.");
      return;
    }

    if (!password.trim()) {
      setErrorMessage("패스워드를 입력해 주세요.");
      return;
    }

    dispatch(login({ id, password }));
  };

  const handleLayerClose = () => {
    setErrorMessage(null);
  };

  useEffect(() => {
    console.log("로그인 양식을 초기화합니다.");

    dispatch(initialLoginForm());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      setErrorMessage(`${error} 로그인에 실패했습니다.`);
    } else if (accessToken) {
      console.log("로그인에 성공했습니다.");

      dispatch(userCheck(accessToken));
    }
  }, [dispatch, accessToken, error]);

  useEffect(() => {
    if (user) {
      console.log("사용자 확인에 성공했습니다. 메인 화면으로 이동합니다.");

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
      onLayerClose={handleLayerClose}
    />
  );
};

export default LoginContainer;
