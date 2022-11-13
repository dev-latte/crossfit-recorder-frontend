import { useState } from "react";
import { Link } from "react-router-dom";
import { DescriptionForm } from "../molecules/auth/DescriptionForm";
import { TitleForm } from "../molecules/auth/TitleForm";
import { AuthCard } from "../templates/auth/AuthCard";
import { LoginForm } from "../organisms/auth/LoginForm";
import { Image } from "../atoms/auth/Image";
import { Warning } from "../atoms/auth/Warning";
import { Button } from "../atoms/auth/Button";
import styled from "styled-components";

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

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [warning, setWarning] = useState(false);
  const [disabled, setDisabled] = useState(true);

  return (
    <Background>
      <AuthCard>
        <TitleForm
          title="Login"
          description={["Please fill the input below here"]}
        />
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
            console.log(value);
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Web site Logo"
          />
          <LoginForm
            value={value}
            setValue={setValue}
            setWarning={setWarning}
            setDisabled={setDisabled}
          />
          <Warning text={warning ? "이메일 형식을 확인해주세요." : ""} />
          <Button
            type="submit"
            label="Login"
            disabled={disabled}
            margin="auto"
          />
        </StyledForm>
        <DescriptionForm>
          <Link to="#">
            <p>Forgot your password?</p>
          </Link>
          <p>
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        </DescriptionForm>
      </AuthCard>
    </Background>
  );
};

export default Login;
