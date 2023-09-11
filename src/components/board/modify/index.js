import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ProfileStandardUnit from "@/unit/profile/standard";
import TextStandardUnit from "@/unit/text/standard";
import ThumbnailUnit from "@/unit/thumbnail";
import ActionSocialUnit from "@/unit/action/social";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import PublishContainer from "@/containers/publish";
import ViewFinderUnit from "@/unit/viewFinder";
import FieldUnit from "@/unit/field";

const StyledArticleModify = styled.div`
  padding: 1.2rem;

  .field_subject,
  .editor_quill,
  .gravity_publish {
    margin-top: 1.2rem;
  }

  .editor_quill .ql-editor {
    height: 12rem;
  }
`;

const ArticleModifyComponent = ({ children, attribute }) => {
  const { category, read, subject, contents, thumbnail, field, upload, owner } =
    attribute || {};

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
      field({ key: "subject", value: read[0].subject });

      mounted.current = true;

      quillInstance.current.root.innerHTML =
        read && typeof read !== "undefined" ? read[0].content : contents;
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
    <StyledArticleModify>
      <ViewFinderUnit
        attribute={{
          url: read?.[0].thumbnail,
          src: thumbnail?.preview,
          event: onChangeThumbnail,
        }}
      />

      {read && typeof read !== "undefined" ? (
        <FieldUnit
          attribute={{
            className: "field_subject",
            standard: true,
            label: {
              htmlFor: "subject",
              text: "제목",
              flexible: true,
            },
            input: {
              type: "text",
              name: "subject",
              id: "subject",
              placeholder: "제목을 입력해 주세요.",
              event: onChangeSubject,
              defaultValue: read[0].subject,
              value: subject,
            },
          }}
        />
      ) : null}

      <div className="editor_quill">
        <div ref={quillElement} />
      </div>

      <PublishContainer
        attribute={{ className: "gravity_publish", category, proof: owner }}
      />
    </StyledArticleModify>
  );
};

export default ArticleModifyComponent;
