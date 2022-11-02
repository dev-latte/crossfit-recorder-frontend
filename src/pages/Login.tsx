import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

const InputWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    border-bottom: 1px solid #BBB9CE;
    padding: 5px 0;
    margin: 10px 0 0 0;
    label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        padding: 0 10px 0 0;
        svg {
            font-size: 20px;
        }
    }
    
    input {
        background: transparent;
        border: none;
        height: 100%;
        width: 240px;
        height: 25px;
        color: #BBB9CE;
        padding: 0 30px 0 0;
        text-align: center;
    }
`;

const SubmitStyled = styled.input`
    background: #2F2C3C;
    color: #BBB9CE;
    border: none;
    width: 300px;
    height: 50px;
    margin-top: 50px;
    cursor: pointer;
    &:hover{
        background: #E16B76;
        color: #fff;
        transition: .5s;
    }
`;

const ImgStyled = styled.img`
    width: 150px;
    height: 150px;
    border: 1px solid #fff;
    margin: 30px 0;
    object-fit: cover;
    border-radius: 50%;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: #fff;
        font-size: 35px;
    }
    p {
        font-size: 13px;
    }
    a {
        color: #E16B76;
    }
`;


const Login = () => {
    const [value, setValue] = useState({email: "", password: ""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const copy = Object.assign(value);
        copy[event.target.name] = event.target.value;
        setValue(copy);
    }
    
    const handleSubmit = (event: React.FormEvent) => {
        console.log("submit");
        event.preventDefault();
    }

    return (
        <>
            <InfoContainer>
                <h1>Login</h1>
                <p>Please fill the input below here</p>
            </InfoContainer>
            <FormWrap onSubmit={handleSubmit}>
                <ImgStyled src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile" />
                <InputWrap>
                    <label htmlFor="email"><AiOutlineMail/></label>
                    <input type="text" id="email" name="email" onChange={handleChange}  placeholder="이메일 주소"/>
                </InputWrap>
                <InputWrap>
                    <label htmlFor="password"><AiOutlineLock/></label>
                    <input type="password" id="password" name="password" onChange={handleChange}  placeholder="비밀번호"/>            
                </InputWrap>
                <SubmitStyled type="submit" value="Log in"/>
            </FormWrap>
            <InfoContainer>
                <Link to="#"><p>Forgot your password?</p></Link>
                <p>Don't have an account? <Link to="#">Create one</Link></p>
            </InfoContainer>
        </>

    );
}

export default Login;