import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/auth/Button";
import { Image } from "../../atoms/auth/Image";
import { Warning } from "../../atoms/auth/Warning";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

interface Props {
    label?: string;
    value: object;
    setValue: Function;
    warning: object;
    disabled: boolean;
    children: React.ReactNode;
}

export const FormContainer = ({ value, setValue, label, warning, disabled, children }: Props) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        if(label === "Log in") {

        }

        console.log(value);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Image src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Web site Logo" />
            {children}
            <Warning text={ !warning ? "이메일 형식을 확인해주세요." : ""}/>
            <Button type="submit" label={label} disabled={disabled} margin="auto"/>
        </StyledForm>
    );   
}