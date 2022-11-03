import styled from "styled-components";

const StyledInput = styled.input`
    height: 100%;
    width: 240px;
    height: 25px;
    color: #BBB9CE;
    padding: 0 30px 0 0;
    text-align: center;
`;

interface Props {
    readonly type?: string;
    readonly id?: string;
    readonly name?: string;
    readonly placeholder?: string;
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, id, name, placeholder, onChange }: Props) => {
    return (
        <StyledInput type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} autoComplete="off"/>
    )
}