import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ListStandardComponent from "../../../unit/list/standard";
// import ListStandardComponent from "../../list/standard";

const CardStandardComponent = ({ attribute }) => {
  const { error, loading, list } = attribute || {};

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

  return <ListStandardComponent attribute={{ error, loading, list }} />;
};

export default CardStandardComponent;
