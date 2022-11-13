import { useState } from "react";
import { Link } from "react-router-dom";
import { DescriptionForm } from "../molecules/auth/DescriptionForm";
import { TitleForm } from "../molecules/auth/TitleForm";
import { AuthCard } from "../templates/auth/AuthCard";
import styled from "styled-components";
import { SignUpForm } from "../organisms/auth/SignUpForm";
import { Button } from "../atoms/auth/Button";
import { Warning } from "../atoms/auth/Warning";
import { Image } from "../atoms/auth/Image";

const Background = styled.div`
  background: #343343;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  color: #bbb9ce;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const SignUp = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [warning, setWarning] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false,
  });
  const [disabled, setDisabled] = useState(true);

  return (
    <Background>
      <AuthCard>
        <TitleForm
          title="Create Account"
          description={["Please fill the input below here"]}
        />
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Web site Logo"
          />
          <SignUpForm
            value={value}
            setValue={setValue}
            warning={warning}
            setWarning={setWarning}
            setDisabled={setDisabled}
          />
          <Warning
            text={
              warning["email"]
                ? "이메일 형식을 확인해주세요."
                : warning["name"]
                ? "이름을 입력해주세요."
                : warning["password"]
                ? "비밀번호는 영어, 특수문자, 숫자가 포함된 8~16자리로 구성해주세요."
                : warning["confirmPassword"]
                ? "비밀번호가 일치하지 않습니다."
                : ""
            }
          />
          <Button
            type="submit"
            label="Sign Up"
            disabled={disabled}
            margin="auto"
          />
        </StyledForm>
        <DescriptionForm>
          <p>
            Already Have a account? <Link to="/">Sign in</Link>
          </p>
        </DescriptionForm>
      </AuthCard>
    </Background>
  );
};

export default SignUp;
