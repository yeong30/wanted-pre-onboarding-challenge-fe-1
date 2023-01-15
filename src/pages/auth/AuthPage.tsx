import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "lib/hooks/useUser";
import SignIn from "components/auth/SignInForm";
import SignUp from "components/auth/signUpForm";

function AuthPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const { isLogined } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogined()) {
      navigate("/");
    }
  }, []);

  const moveToSignUp = () => {
    setIsSignUpMode(true);
  };
  const moveToSignIn = () => {
    setIsSignUpMode(false);
  };

  if (isSignUpMode) {
    return <SignUp onMoveSignIn={moveToSignIn} />;
  }

  return <SignIn onMoveSignUp={moveToSignUp} />;
}

export default AuthPage;
