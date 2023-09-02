import React from "react";
import styled from "styled-components";
import ProfileStandardUnit from "@/unit/profile";
import TextStandardUnit from "@/unit/text/standard";
import ThumbnailComponent from "@/components/thumbnail";

const StyledArticle = styled.div``;

const ArticleListComponent = ({ children, attribute }) => {
  const { user, category, list, pagination, error, loading, select, keyword } =
    attribute || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log("존재하지 않는 데이터입니다.");

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log("에러가 발생했습니다.");

    return <p>에러가 발생했습니다.</p>;
  }

  if (loading || !list) {
    console.log("읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.");

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  if (!list) {
    console.log("목록이 존재하지 않습니다.");

    return <p>목록이 존재하지 않습니다.</p>;
  }

  return (
    <>
      {list.map((currentValue, index) => (
        <StyledArticle key={index}>
          <ProfileStandardUnit
            attribute={{
              className: "group_profile",
              visible: {
                author: true,
                date: true,
              },
              author: currentValue.name,
              date: currentValue.regdate,
            }}
          />

          <TextStandardUnit
            attribute={{
              className: "text_profile_content",
              text: currentValue.content,
            }}
          />

          <ThumbnailComponent
            attribute={{
              className: "group_profile_thumbnail",
              src: currentValue.thumbnail,
              radius: false,
              bar: true,
              href: `/board/${currentValue.category}/read/${currentValue.number}`,
            }}
          />

          <hr className="boundary" />
        </StyledArticle>
      ))}
    </>
  );
};

export default ArticleListComponent;
