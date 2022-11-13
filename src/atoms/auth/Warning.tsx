import styled from "styled-components";

const WarningTextStyled = styled.p`
  font-size: 13px;
  color: #e16b76;
  padding: 5px 0;
  height: 34px;
`;

interface Props {
  text: string;
}

export const Warning = ({ text }: Props) => {
  return <WarningTextStyled>{text}</WarningTextStyled>;
};
