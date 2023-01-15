import useUser from "lib/hooks/useUser";
import React, { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "../button/TextButton";
import styled from "./Layout.module.css";

interface LayourProps {
  children: ReactNode;
}
function Layout({ children }: LayourProps) {
  const { removeToken } = useUser();
  const navigate = useNavigate();

  const logouthandler = useCallback(() => {
    removeToken();
    navigate("/auth", { replace: true });
  }, []);
  const navigateHome = useCallback(() => {
    navigate("/", { replace: true });
  }, []);
  return (
    <div className={styled.layout}>
      <header className={styled.header}>
        <img
          onClick={navigateHome}
          alt="home"
          className={styled["todo-icon"]}
          src={require("assets/icon/todo-icon.png")}
        />
        <TextButton
          title="로그아웃"
          onPress={logouthandler}
          styled={styled["logout-btn"]}
        />
      </header>
      {children}
    </div>
  );
}
export default Layout;
