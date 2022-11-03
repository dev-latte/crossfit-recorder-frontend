import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 13px;
    }
`;

type Props = {
    children: React.ReactNode;
}

export const DescriptionForm: React.FC<Props> = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    );
}