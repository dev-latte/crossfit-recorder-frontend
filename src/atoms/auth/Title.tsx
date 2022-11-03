import styled from "styled-components";

const StyledH1 = styled.h1`

`;

type Props = {
    children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ children }) => {
    return (
        <StyledH1>{ children }</StyledH1>
    );
}