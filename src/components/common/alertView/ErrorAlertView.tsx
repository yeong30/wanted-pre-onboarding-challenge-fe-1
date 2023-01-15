import React from "react";
import styled from "components/common/alertView/styles/Alert.common.module.css";
interface ErrorPageProps {
  error?: any;
}

function ErroView(props: ErrorPageProps) {
  const fallback = { detail: "오류가 발생하였습니다." };
  const { error = fallback } = props;
  return (
    <div className={styled.container}>
      <img
        alt="warning"
        className={styled["error-icon"]}
        src={require("assets/icon/warning.png")}
      />
      <span className={styled["error-message"]}>{error.detail}</span>
    </div>
  );
}
export default ErroView;
