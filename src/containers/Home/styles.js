import styled from "styled-components";

export const Background = styled.div`
    /* ALTERADO: Adicionado o $ antes de image */
    background-image: url(${props => props.$image});
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1; 
    }
`;

export const Info = styled.div`
    color: #fff;
    z-index: 2; 
    position: relative; 
    text-align: center; 
    width: 50%; 
    padding: 30px; 
    margin: 10% 0;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        margin: 0; 
        text-align: left; 
    }

    p {
        font-size: 20px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
        line-height: 1.5; 
        text-align: left; 
    }
`;

export const Container = styled.section`
    display: flex;
    align-items: space-around;
    justify-content: center;
    height: 100%;
    max-width: 1500px;
`;

export const Porter = styled.div`
    z-index: 2; 
    img {
        width: 400px;
        border-radius: 30px;
        margin-top: 100px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin: 30px;
`;
