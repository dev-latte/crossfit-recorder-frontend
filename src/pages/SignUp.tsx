import { useState } from "react";
import { AiFillLock, AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DescriptionForm } from "../molecules/auth/DescriptionForm";
import { FormContainer } from "../organisms/auth/FormContainer";
import { InputForm } from "../molecules/auth/InputForm";
import { TitleForm } from "../molecules/auth/TitleForm";
import { AuthCard } from "../templates/auth/AuthCard";
import styled from "styled-components";

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

const SignUp = () => {
    const [value, setValue] = useState({email: "", password: "", name: "", confirmPassword: ""});
    const [warning, setWarning] = useState({ email: false, password: false })

    return (
        <Background>
        <AuthCard>
            <TitleForm title="Create Account" description={["Please fill the input below here"]} />
            <FormContainer value={value} setValue={setValue} label="Sign Up" warning={warning}>
                <InputForm value={value} setValue={setValue} htmlFor="email" icon={<AiOutlineMail/>} type="text" id="email" name="email" placeholder="이메일 주소" />                
                <InputForm value={value} setValue={setValue} htmlFor="name" icon={<AiOutlineUser/>} type="text" id="name" name="name" placeholder="이름" />
                <InputForm value={value} setValue={setValue} htmlFor="password" icon={<AiOutlineLock/>} type="password" id="password" name="password" placeholder="비밀번호" />
                <InputForm value={value} setValue={setValue} htmlFor="confirm-password" icon={<AiFillLock/>} type="password" id="confirm-password" name="confirmPassword"  placeholder="비밀번호 확인" />
            </FormContainer>
            <DescriptionForm>
                <p>Already Have a account? <Link to="/">Sign in</Link></p>
            </DescriptionForm>
        </AuthCard>
        </Background>

    );
}

export default SignUp;