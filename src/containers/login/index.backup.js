import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaperLoginWrapper from "@/components/paper/login";
import { check } from "@/modules/user";
import Cookies from "js-cookie";
import { changeField, login } from "@/modules/auth";
import { initializeForm } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const LoginContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { form, accessToken, error, user } = useSelector(
    ({ authorization, user }) => {
      const data = {};

      if (user.user !== null) {
        data.user = user.user.user2;
      }

      if (
        typeof authorization.authorization !== "undefined" &&
        authorization.authorization !== null
      ) {
        data.token = authorization.authorization.accessToken;
      }

      return {
        form: authorization.login,
        accessToken: data.token,
        error: authorization.error,
        user: data.user,
      };
    }
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;

    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const { id, password } = form;

    dispatch(login({ id, password }));
  };

  useEffect(() => {
    console.log("initializeForm");
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    // 로그인 실패
    if (error) {
      console.error(error);

      setErrorMessage("로그인에 실패했습니다.");

      return;
    }

    // 로그인 성공
    console.log("!!accessToken: ", !!accessToken);
    if (!!accessToken) {
      console.log("로그인 성공");
      dispatch(check(accessToken));
    }
  }, [error, accessToken, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('navigate("/")');
      navigate("/");

      try {
        const data = {
          user: {
            id: user.id,
            name: user.name,
          },
        };

        localStorage.setItem("user", JSON.stringify(data));

        Cookies.set("accessToken", accessToken);
      } catch (error) {
        console.error(error);
      }
    }
  }, [navigate, accessToken, user]);

  return (
    <PaperLoginWrapper
      formType="login"
      form={form}
      onChange={handleChange}
      onSubmit={handleLogin}
      errorMessage={errorMessage}
    />
  );
};

export default LoginContainer;
