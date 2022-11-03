import styled from "styled-components";

const StyledImg = styled.img`
    width: 150px;
    height: 150px;
    margin: 30px 0;
    object-fit: cover;
    border-radius: 50%;
`;

interface Props {
    src?: string;
    alt?: string;
}

export const Image = ({ src, alt } : Props) => {
    return (
        <StyledImg src={src} alt={alt}/>
    );
}