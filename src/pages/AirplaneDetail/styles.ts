import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 20%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
`;

export const Header = styled.h1`
    
`;

export const Content = styled.div`
`;

export const AirplaneImg = styled.img`
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

export const BackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    outline: none;

    :hover {
        cursor: pointer;
    }
`;

export const NewImg = styled.img`
    width: 40px;
    height: 40px;
    
    :hover {
        cursor: pointer;
    }
`;

export const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 180px;
`;

export const ImgList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const AirplaneContent = styled.div`
    position: relative;
    width: 80%;
`;

export const DeleteButton = styled.button`
    position: absolute;
    right: 0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    outline: none;

    :hover {
        cursor: pointer;
    }
`;

export const ImgPlaceholder = styled.div`
    border: solid 1px #000;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;

`;