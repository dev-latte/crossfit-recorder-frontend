import styled from "styled-components";

const StyledLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    padding: 0 10px 0 0;
    svg {
        font-size: 20px;
    }
`;

interface Props {
    readonly htmlFor?: string;
    readonly icon?: any;
}

export const IconLabel = ({ htmlFor, icon }: Props) => {
    return (
        <StyledLabel htmlFor={htmlFor}>{icon}</StyledLabel>
    )
}