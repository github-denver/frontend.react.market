import React from "react";
import styled from "styled-components";
import ProfileStandardUnit from "@/unit/profile/standard";
import TextStandardUnit from "@/unit/text/standard";
import ThumbnailComponent from "@/components/thumbnail";
import ActionSocialUnit from "@/unit/action/social";
import HalfUnit from "@/unit/half";
import ArticleUtilityStandard from "@/unit/article/utility/standard";
import ButtonStandardUnit from "@/unit/button/standard";
import ProfileSignatureUnit from "@/unit/profile/signature";

const StyledArticle = styled.div`
  /* .gravity_actionSocial {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  } */

  .half_article {
    padding: 1.2rem;
  }
`;

const ArticleReadComponent = ({ children, attribute }) => {
  const { category, read, error, loading } = attribute || {};

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log("존재하지 않는 데이터입니다.");

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log("에러가 발생했습니다.");

    return <p>에러가 발생했습니다.</p>;
  }

  if (loading || !read) {
    console.log("읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.");

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  if (!read) {
    console.log("목록이 존재하지 않습니다.");

    return <p>목록이 존재하지 않습니다.</p>;
  }

  return (
    <>
      {read.map((currentValue, index) => (
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

          <hr className="boundary" />

          <ThumbnailComponent
            attribute={{
              className: "group_profile_thumbnail",
              src: currentValue.thumbnail,
              radius: false,
            }}
          />

          <TextStandardUnit
            attribute={{
              className: "text_profile_content",
              text: currentValue.content,
            }}
          />

          {/* <ArticleUtilityStandard /> */}

          {/* <ActionSocialUnit attribute={{ className: "gravity_actionSocial" }} /> */}

          {/* <hr className="boundary" />

          <HalfUnit
            attribute={{
              className: "half_article",
              firstUnit: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                    fill: true,
                  }}
                >
                  <span className="text_local">수정</span>
                </ButtonStandardUnit>
              ),
              secondUnit: (
                <ButtonStandardUnit
                  attribute={{
                    type: "button",
                  }}
                >
                  <span className="text_local">삭제</span>
                </ButtonStandardUnit>
              ),
            }}
          /> */}

          {/* <hr className="boundary" /> */}

          <hr className="thin" />

          <ProfileSignatureUnit
            attribute={{
              className: "group_profile",
              author: currentValue.name,
              message: "currentValue.message",
            }}
          />

          <hr className="boundary" />
        </StyledArticle>
      ))}
    </>
  );
};

export default ArticleReadComponent;
