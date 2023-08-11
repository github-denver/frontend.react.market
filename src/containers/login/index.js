import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PaperLoginWrapper from "@/components/paper/login";
import { login } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { userCheck } from "@/modules/user";
import Cookies from "js-cookie";
import { formChangeField } from "@/modules/form";

const LoginContainer = (props) => {
  console.group("10. const LoginContainer = (props) => { .. }");
  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, accessToken, error, user } = useSelector((payload) => {
    console.group(
      "5, 8, 9, 11, 13, 15, 17, 18. const { form, accessToken, error } = useSelector(({ auth, user }) => { .. }, shallowEqual)"
    );
    const formData = payload.form;
    console.log("formData: ", formData);

    const auth = payload.auth; // let accessToken
    console.log("auth: ", auth);

    const profile = payload.user; // let user
    console.log("profile: ", profile);

    let accessToken = null;
    let user = null;

    console.log("auth.auth?.accessToken: ", auth.auth?.accessToken);
    if (auth.auth?.accessToken) {
      accessToken = auth.auth.accessToken;
    }

    console.log("profile.user?.user2: ", profile.user?.user2);
    if (profile.user?.user2) {
      user = profile.user.user2;
    }

    console.groupEnd();

    return {
      formData: formData.login,
      accessToken,
      error: auth.error,
      user,
    };
  }, shallowEqual);
  console.log("formData: ", formData);
  console.log("accessToken: ", accessToken);
  console.log("error: ", error);
  console.log("user: ", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    console.group("const handleFieldChange = (event) => { .. }");
    console.log("event: ", event);

    const { value, name } = event.target;
    console.log("value: ", value);
    console.log("name: ", name);
    console.groupEnd();

    dispatch(formChangeField({ form: "login", key: name, value }));
  };

  const handleLoginSubmit = (event) => {
    console.group("const handleLoginSubmit = (event) => { .. }");
    console.log("event: ", event);
    console.groupEnd();

    event.preventDefault();

    const { id, password } = formData;
    console.log("id: ", id);
    console.log("password: ", password);

    dispatch(login({ id, password }));
  };

  useEffect(() => {
    console.log("로그인 양식을 초기화합니다.");
    // dispatch();
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
    if (user) {
      console.log("사용자 확인에 성공했습니다.");

      navigate("/");

      try {
        localStorage.setItem("user", JSON.stringify(user));

        Cookies.set("accessToken", accessToken);
      } catch (error) {
        console.error(error);
      }
    }
  }, [navigate, accessToken, user]);
  console.groupEnd();

  return (
    <PaperLoginWrapper
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onLoginSubmit={handleLoginSubmit}
    />
  );
};

export default LoginContainer;
