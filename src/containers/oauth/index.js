import React, { useEffect, useState } from "react";
import OauthFormComponent from "@/components/form/oauth";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { formChangeField, initialOauthForm } from "@/modules/form";
import { oauth } from "@/modules/auth";

const OauthContainer = () => {
  const { token } = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  const { formData, accessToken, error, user } = useSelector(
    ({ form, auth, user }) => ({
      formData: form.oauth,
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

    dispatch(formChangeField({ form: "oauth", key: name, value }));
  };

  const handleOauthSubmit = (event) => {
    event.preventDefault();

    const { password, passwordConfirm } = formData;

    if (!password.trim()) {
      setErrorMessage("패스워드를 입력해 주세요.");
      return;
    }

    if (!passwordConfirm.trim()) {
      setErrorMessage("패스워드 확인을 입력해 주세요.");
      return;
    }

    dispatch(oauth({ token, password, passwordConfirm }));
  };

  const handleLayerClose = () => {
    setErrorMessage(null);
  };

  useEffect(() => {
    console.log("패스워드 재설정 양식을 초기화합니다.");

    dispatch(initialOauthForm());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);

      if (error) {
        setErrorMessage(error);
      }
    }

    return () => {
      console.log(
        "언마운트 될 때 리덕스에서 패스워드 재설정 데이터를 삭제합니다."
      );
      dispatch(initialOauthForm());
    };
  }, [dispatch, error]);

  return (
    <OauthFormComponent
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onOauthSubmit={handleOauthSubmit}
      onLayerClose={handleLayerClose}
    />
  );
};

export default OauthContainer;
