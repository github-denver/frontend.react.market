import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ProfileStandardUnit from "@/unit/profile";
import TextStandardUnit from "@/unit/text/standard";
import ThumbnailComponent from "@/components/thumbnail";
import ActionSocialUnit from "@/unit/action/social";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import PublishContainer from "../../../containers/publish";
import ViewFinderUnit from "../../../unit/viewFinder";

const StyledArticle = styled.div`
  .gravity_actionSocial {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

const ArticleWriteComponent = ({ children, attribute }) => {
  const {
    category,
    write,
    read,
    error,
    loading,
    subject,
    contents,
    thumbnail,
    field,
    upload,
  } = attribute || {};

  const quillElement = useRef(null); // quill div element
  const quillInstance = useRef(null); // quill instance

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 입력해 주세요.",
      modules: {
        // toolbar: []
      },
    });

    // quill에 text-change 이벤트 핸들러를 등록합니다.
    const quill = quillInstance.current;

    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        field({ key: "contents", value: quill.root.innerHTML });
      }
    });
  }, [field]);

  const mounted = useRef(false);

  useEffect(() => {
    if (read && !mounted.current) {
      mounted.current = true;

      quillInstance.current.root.innerHTML =
        read && typeof read !== "undefined" ? read.content : contents;
    }
  }, [contents, read]);

  const onChangeSubject = (event) => {
    field({ key: "subject", value: event.target.value });
  };

  const onChangeThumbnail = (event) => {
    let files = null;
    let preview = null;

    if (window.FileReader) {
      // 이미지 파일만 통과합니다.
      if (!event.target.files[0].type.match(/image\//)) return;

      // 읽기
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      files = event.target.files[0];

      // 읽은 후
      reader.onload = (event) => {
        preview = event.target.result;

        const formData = new FormData();
        formData.append("files", files);
        formData.append("preview", preview);

        upload({
          key: "thumbnail",
          value: {
            files: formData.get("files"),
            preview: formData.get("preview"),
          },
        });
      };
    } else {
    }
  };

  return (
    <>
      <ViewFinderUnit attribute={{ className: "", src: thumbnail?.preview }} />

      <input type="text" name="subject" onChange={onChangeSubject} />
      <div ref={quillElement} />
      <input type="file" name="thumbnail" onChange={onChangeThumbnail} />
      <PublishContainer attribute={{ category }} />
    </>
  );
};

export default ArticleWriteComponent;
