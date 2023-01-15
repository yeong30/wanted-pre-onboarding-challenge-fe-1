import React from "react";
import styled from "components/common/alertView/styles/Alert.common.module.css";

function EmptyView() {
  return (
    <div className={styled.container}>
      <img
        alt="warning"
        className={styled["error-icon"]}
        src={require("assets/icon/box-icon.png")}
      />
      <span className={styled["error-message"]}>목록이 비었습니다!</span>
    </div>
  );
}
export default EmptyView;
