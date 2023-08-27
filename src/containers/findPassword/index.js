import React, { useEffect, useState } from "react";
import FindPasswordComponent from "@/components/form/findPassword";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { formChangeField, initialOauthForm } from "@/modules/form";
import { oauth } from "@/modules/auth";
import { sendEmail } from "@/library/gateway/auth";

const FindPasswordContainer = () => {
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

  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    dispatch(formChangeField({ form: "oauth", key: name, value }));
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();

    const { email } = formData;

    if (!email.trim()) {
      setErrorMessage("이메일을 입력해 주세요.");
      return;
    }

    const result = await sendEmail({ email });
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
    <FindPasswordComponent
      formData={formData}
      errorMessage={errorMessage}
      onFieldChange={handleFieldChange}
      onLayerClose={handleLayerClose}
      onSendEmail={handleSendEmail}
    />
  );
};

export default FindPasswordContainer;
