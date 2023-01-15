import React, { useCallback, useEffect } from "react";
import Button from "components/common/button/Button";
import TextButton from "components/common/button/TextButton";
import Input from "../common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/auth/styles/SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import useUser from "lib/hooks/useUser";
import useSignIn from "./hooks/useSingIn";

function SignIn() {
  const navigation = useNavigate();
  const emailState = useInput({ validator: emailValidtor });
  const passwordState = useInput({ validator: passwordValidtor });
  const { setToken } = useUser();
  const {
    mutate: signInMutation,
    isSuccess: isSignInSuccess,
    data: useInfo,
  } = useSignIn();

  useEffect(() => {
    if (isSignInSuccess && useInfo?.data.token) {
      setToken(useInfo?.data.token);
      moveToMain();
    }
  }, [isSignInSuccess, useInfo?.data]);

  const signInHandler = async () => {
    signInMutation({
      email: emailState.enteredValue,
      password: passwordState.enteredValue,
    });
  };

  const moveToMain = useCallback(() => {
    navigation("/", { replace: true });
  }, []);
  const moveToSignUp = useCallback(() => {
    navigation("register");
  }, []);

  return (
    <div className={styled.signInContainer}>
      <form className={styled.signInForm}>
        <div>
          <Input
            label="이메일"
            name="email"
            onChange={emailState.changeValue}
            value={emailState.enteredValue}
            onFocus={emailState.focusedValue}
          />
          <Input
            type="password"
            label="비밀번호"
            name="password"
            onChange={passwordState.changeValue}
            onFocus={passwordState.changeValue}
            value={passwordState.enteredValue}
          />
          <TextButton
            title="회원가입"
            onPress={moveToSignUp}
            styled={styled.signUpBtn}
          />
        </div>
        <Button
          disabled={passwordState.isInValid || emailState.isInValid}
          title="로그인"
          onPress={signInHandler}
        />
      </form>
    </div>
  );
}

export default SignIn;
