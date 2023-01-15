import useUser from "lib/hooks/useUser";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "../button/TextButton";
import styled from "./Layout.module.css";

interface LayourProps {
  children: ReactNode;
}
function Layout({ children }: LayourProps) {
  const { removeToken } = useUser();
  const navigate = useNavigate();

  const logouthandler = () => {
    removeToken();
    navigate("/auth", { replace: true });
  };
  const navigateHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={styled.layout}>
      <header className={styled.header}>
        <TextButton
          title="Todo"
          onPress={navigateHome}
          styled={styled["logout-btn"]}
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
