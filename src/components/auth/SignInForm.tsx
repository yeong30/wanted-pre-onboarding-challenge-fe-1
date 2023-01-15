import React from "react";
import Button from "components/button/Button";
import TextButton from "components/button/TextButton";
import Input from "../common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/auth/styles/SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import { login } from "lib/api/auth";
import useUser from "lib/hooks/useUser";

interface SignInProps {
  onMoveSignUp: () => void;
}
function SignIn({ onMoveSignUp }: SignInProps) {
  const navigation = useNavigate();
  const emailState = useInput({ validator: emailValidtor });
  const passwordState = useInput({ validator: passwordValidtor });
  const { setToken } = useUser();

  const signInHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = await login({
      email: emailState.enteredValue,
      password: passwordState.enteredValue,
    });

    if (result.token) {
      setToken(result.token);
    }
    moveToMain();
  };

  const moveToMain = () => {
    navigation("/");
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
            type="password"
            label="비밀번호"
            name="password"
            onChange={passwordState.changeValue}
            onFocus={passwordState.changeValue}
            value={passwordState.enteredValue}
          />
          <TextButton
            title="회원가입"
            onPress={onMoveSignUp}
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
