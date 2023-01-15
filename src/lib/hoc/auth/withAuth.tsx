import { getStorage } from "lib/utils/storageUtil";
import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent: any) => {
  const token = getStorage("token");
  if (!token) {
    return (props: any) => <Navigate to="/auth" replace />;
  }

  return (props: any) => <WrappedComponent {...props} />;
};

export default withAuth;
