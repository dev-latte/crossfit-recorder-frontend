import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/auth/Button";
import { Image } from "../../atoms/auth/Image";

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
    children: React.ReactNode;
}

export const FormContainer = ({ value, setValue, label, warning, children }: Props) => {
    const handleSubmit = (event: React.FormEvent) => {
        console.log(value);
        event.preventDefault();
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Image src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Web site Logo" />
            {children}
            <Button type="submit" label={label} disabled={!warning}/>
        </StyledForm>
    );   
}