import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const AirplaneImg = styled.img`
    width: 30px;
    height: 30px;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }

    ${(props: any) => css`
        transform: rotate(${props.track}deg);
    `}
`;

export const Label = styled.div`
    color: #FFF;
    background-color: #000;
    opacity: 0.5;
    border-radius: 25px;
    padding: 10px;
    visibility: hidden;

    ${Container}:hover & {
        visibility: visible;
    }
`;