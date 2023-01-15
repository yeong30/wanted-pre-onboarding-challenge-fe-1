import React from "react";
import { signup } from "lib/api/auth";
import Button from "components/button/Button";
import Input from "components/common/input/Input";
import useInput from "lib/hooks/useInput";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import styled from "components/auth/styles/SignIn.module.css";

interface SignUpProps {
  onMoveSignIn: () => void;
}
function SignUp({ onMoveSignIn }: SignUpProps) {
  const emailState = useInput({ validator: emailValidtor });
  const passwordState = useInput({ validator: passwordValidtor });

  const signInHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = await signup({
      email: emailState.enteredValue,
      password: passwordState.enteredValue,
    });

    if (result.token) {
      onMoveSignIn();
    }
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
