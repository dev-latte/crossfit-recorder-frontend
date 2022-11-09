import styled from "styled-components";

const WarningTextStyled = styled.p`
    font-size: 13px;
    color: #E16B76;
    padding: 15px 0;
    height: 54px;
`;

interface Props {
    text: string;
}

export const Warning = ({ text } : Props) => {
    return (
        <WarningTextStyled>{text}</WarningTextStyled>
    );
}