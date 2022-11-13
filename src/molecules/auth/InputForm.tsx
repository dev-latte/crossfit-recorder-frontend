import styled from "styled-components";
import { IconLabel } from "../../atoms/auth/IconLabel";
import { Input } from "../../atoms/auth/Input";

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  border-bottom: 1px solid #bbb9ce;
  padding: 5px 0;
  margin: 10px 0 0 0;
  &:focus-within {
    border-bottom: 1px solid #e16b76;
    transition: 0.5s;
  }
`;

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly htmlFor?: string;
  readonly icon?: any;
  readonly type?: string;
  readonly id?: string;
  readonly name?: string;
  readonly placeholder?: string;
}

export const InputForm = ({
  onChange,
  htmlFor,
  icon,
  type,
  id,
  name,
  placeholder,
}: Props) => {
  return (
    <InputWrap>
      <IconLabel htmlFor={htmlFor} icon={icon} />
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrap>
  );
};
