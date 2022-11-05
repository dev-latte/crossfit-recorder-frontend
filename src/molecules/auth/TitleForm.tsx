import styled from "styled-components";

const StyledTitleForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {    color: #fff;
        font-size: 35px;
    }
    p {
        font-size: 13px;
    }
`;

interface Props {
    title?: string;
    description: [string];
}

export const TitleForm = ({ title, description}: Props) => {
    return (
        <StyledTitleForm>
            <h1>{title}</h1>
            { description && description.map((el, index) => <p key={index}>{el}</p>) }
        </StyledTitleForm>

    );
}