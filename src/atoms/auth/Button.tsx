import styled from "styled-components";

const StyledButton = styled.button`
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

interface Props {
    readonly type?: any;
    readonly label?: string;
}

export const Button = ({ type, label }: Props) => {
    return (
        <StyledButton type={type}>{label}</StyledButton>
    );
}