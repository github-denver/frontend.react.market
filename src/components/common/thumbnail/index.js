import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div``;

const ThumbnailWrapper = (props) => {
  return (
    <Thumbnail>
      <img src="/sample.jpg" alt="" />

      <div>
        <span>1</span>
        <span>라벨</span>
        <span>홍길동</span>
        <button type="button">북마크</button>
        <button type="button">좋아요</button>
      </div>
    </Thumbnail>
  );
};

export default ThumbnailWrapper;
