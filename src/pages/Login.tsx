import { useState } from "react";
import { Link } from "react-router-dom";
import { DescriptionForm } from "../molecules/auth/DescriptionForm";
import { FormContainer } from "../organisms/auth/FormContainer";
import { InputForm } from "../molecules/auth/InputForm";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { TitleForm } from "../molecules/auth/TitleForm";
import { AuthCard } from "../templates/auth/AuthCard";
import styled from "styled-components";
import { ToolTip } from "../atoms/auth/ToolTip";

const Background = styled.div`
    background: #343343; 
    width: 100vw;
    min-height: 100vh;
    height: auto;
    color: #BBB9CE;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = () => {
    const [value, setValue] = useState({email: "", password: ""});
    const [warning, setWarning] = useState({email: false});

    return (
        <Background>
        <AuthCard>
            <TitleForm title="Login" description={["Please fill the input below here"]} />
            <FormContainer value={value} setValue={setValue} label="Log in" warning={warning}>
                <InputForm value={value} setValue={setValue} htmlFor="email" icon={<AiOutlineMail/>} type="text" id="email" name="email" placeholder="이메일 주소" warning={warning} setWarning={setWarning} />
                { !warning && <ToolTip text={"이메일 형식을 확인해주세요."} top={0} left={0}/> }

                <InputForm value={value} setValue={setValue} htmlFor="password" icon={<AiOutlineLock/>} type="password" id="password" name="password" placeholder="비밀번호" warning={warning} setWarning={() => {}}/>
            </FormContainer>
            <DescriptionForm>
                <Link to="#"><p>Forgot your password?</p></Link>
                <p>Don't have an account? <Link to="/signup">Create one</Link></p>
            </DescriptionForm>
        </AuthCard>
        </Background>

    );
}

export default Login;