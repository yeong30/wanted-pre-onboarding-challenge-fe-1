import React from "react";
import { getStorage } from "lib/utils/storageUtil";
import { Navigate } from "react-router-dom";

const WithAuth = (WrappedComponent: any, message?: string) => (props: any) => {
  const token = getStorage("token");
  if (!token) {
    return <Navigate to="/auth" />;
  }

  return <WrappedComponent {...props} />;
};

export default WithAuth;
