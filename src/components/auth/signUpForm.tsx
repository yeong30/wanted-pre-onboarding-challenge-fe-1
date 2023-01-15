import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/common/button/Button";
import Input from "components/common/input/Input";
import styled from "components/auth/styles/SignIn.module.css";
import useInput from "lib/hooks/useInput";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import useSignUp from "./hooks/useSignUp";

function SignUp() {
  const navigation = useNavigate();
  const emailState = useInput({ validator: emailValidtor });
  const passwordState = useInput({ validator: passwordValidtor });
  const { mutate: signUpMutation, isSuccess: isSignUpSuccess } = useSignUp();

  useEffect(() => {
    if (isSignUpSuccess) {
      alert("가입에 성공하였습니다!");
      navigation("/auth");
    }
  }, [isSignUpSuccess]);

  const signInHandler = () => {
    signUpMutation({
      email: emailState.enteredValue,
      password: passwordState.enteredValue,
    });
  };

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
            label="비밀번호"
            name="password"
            type="password"
            onChange={passwordState.changeValue}
            onFocus={passwordState.changeValue}
            value={passwordState.enteredValue}
          />
        </div>
        <Button
          title="회원가입"
          disabled={passwordState.isInValid || emailState.isInValid}
          onPress={signInHandler}
        />
      </form>
    </div>
  );
}

export default SignUp;
