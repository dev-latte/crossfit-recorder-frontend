import styled from "styled-components";
import { IconLabel } from "../../atoms/auth/IconLabel";
import { Input } from "../../atoms/auth/Input";

const InputWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    border-bottom: 1px solid #BBB9CE;
    padding: 5px 0;
    margin: 10px 0 0 0;
    &:focus-within {
        border-bottom: 1px solid #E16B76;
        transition: .5s;
    }
`;

interface Props {
    value: object;
    setValue: Function;
    readonly htmlFor?: string;
    readonly icon?: any;
    readonly type?: string;
    readonly id?: string;
    readonly name?: string;
    readonly placeholder?: string;
}

export const InputForm = ({ value, setValue, htmlFor, icon, type, id, name, placeholder } : Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const copy = Object.assign(value);
        copy[event.target.name] = event.target.value;
        setValue(copy);
    }

    return (
        <InputWrap>
            <IconLabel htmlFor={htmlFor} icon={icon} />
            <Input type={type} id={id} name={name} onChange={handleChange} placeholder={placeholder}/>
        </InputWrap>
    );
}