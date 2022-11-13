import styled from "styled-components";

const StyledButton = styled.button<{ margin: string }>`
  background: #2f2c3c;
  color: #bbb9ce;
  border: none;
  width: 300px;
  height: 50px;
  margin: ${props => props.margin || "0px"};
  cursor: pointer;
  &:hover {
    background: #e16b76;
    color: #fff;
    transition: 0.5s;
  }
  &:disabled {
    background: #777;
    color: #ccc;
  }
`;

interface Props {
  readonly type?: any;
  readonly label?: string;
  readonly disabled?: boolean;
  readonly margin: string;
}

export const Button = ({ type, label, disabled, margin }: Props) => {
  return (
    <StyledButton type={type} disabled={disabled} margin={margin}>
      {label}
    </StyledButton>
  );
};
