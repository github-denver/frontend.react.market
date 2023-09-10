import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoginComponent from "@/components/form/login";
import { login } from "@/modules/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userCheck } from "@/modules/user";
import Cookies from "js-cookie";
import { formChangeField, initialLoginForm } from "@/modules/form";
import { boardWrite } from "../../modules/board/write";
import PublishComponent from "../../components/publish";
import { boardModify } from "../../modules/board/modify";

const PublishContainer = ({ attribute }) => {
  const { category, proof, className } = attribute || {};

  const [errorMessage, setErrorMessage] = useState(null);

  const { subject, contents, thumbnail, data, owner, error } = useSelector(
    ({ boardWrite, boardModify }) => {
      return {
        subject: boardWrite?.subject,
        contents: boardWrite?.contents,
        thumbnail: boardWrite?.thumbnail,
        data: boardWrite?.data,
        owner: proof,
        error: boardWrite?.error,
      };
    },
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const number = location.pathname.split("/").splice(-1)[0];

  const publish = () => {
    const formData = new FormData();

    formData.append("category", category);
    formData.append("subject", subject);
    formData.append("content", contents);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail.files);
    }

    if (owner) {
      dispatch(
        boardModify({
          category,
          number,
          payload: formData,
        })
      );

      navigate(`/board/${category}/read/${number}`);
    } else {
      dispatch(boardWrite({ category, payload: formData }));
    }
  };

  const cancel = () => {
    // navigate(-1);

    navigate(`/board/${attribute.category}/list/1`);
  };

  useEffect(() => {
    if (data) {
      navigate(`/board/${data.service}/read/${data.number}`);
    }

    if (error) {
      console.error(error);
    }
  }, [navigate, data, error]);

  return (
    <PublishComponent
      attribute={{ className, owner: !!owner, publish, cancel }}
    />
  );
};

export default PublishContainer;
