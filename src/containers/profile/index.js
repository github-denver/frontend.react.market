import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormProfileComponent from "@/components/form/profile";
import { profile } from "@/modules/auth";
import { useNavigate } from "react-router-dom";
import { formChangeField } from "@/modules/form";
// import { initialRegisterForm } from "@/modules/form";

const ProfileContainer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { loading, formData, accessToken, error, user } = useSelector(
    ({ loading, form, auth, user }) => {
      let accessToken = null;
      let savedUser = null;

      if (auth.auth?.accessToken) {
        accessToken = auth.auth.accessToken;
      }

      if (user.user?.user2) {
        savedUser = user.user.user2;
      }

      return {
        formData: form.register,
        accessToken,
        error: auth.error,
        user: savedUser,
        loading: loading["user/check"],
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

  const handleModifySubmit = (event) => {
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

    dispatch(profile({ id: user.id, name, password, email }));
  };

  useEffect(() => {
    if (error) {
      console.error(error);

      setErrorMessage(`에러가 발생하였습니다.`);

      return;
    }

    if (!user && !accessToken) {
      navigate("/member/login");
    }

    return () => {
      console.log("언 마운트 될 때 리덕스에서 데이터를 삭제합니다.");
    };
  }, [navigate, accessToken, error, user]);

  return (
    <FormProfileComponent
      loading={loading}
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onModifySubmit={handleModifySubmit}
      user={user}
    />
  );
};

export default ProfileContainer;
