import styled from "styled-components";

const TooltipStyled = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    background: #E16B76;
    color: #fff;
    font-size: 13px;
    text-align: center;
    align-vertical: center;
    padding: 3px 20px;
    border-radius: 5px;
    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 8px 6px 0;
        border-color: #E16B76 transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -8px;
        left: calc(50% - 4px);
    }
`;

interface Props {
    text: string,
    top: number,
    left: number
}

export const ToolTip = ({text, top, left}: Props) => {
    return (
        <TooltipStyled>{text}</TooltipStyled>
    );
}