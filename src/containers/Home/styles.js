import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.$image});
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 

    /* Ajuste para telas menores não cortarem o topo */
    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
        padding-top: 140px; /* Dá espaço para o Header que ficou maior no mobile */
        padding-bottom: 40px;
    }

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

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    max-width: 1500px;
    padding: 0 20px;
    box-sizing: border-box;

    /* 👇 EMPILHA OS ELEMENTOS NO MOBILE */
    @media (max-width: 768px) {
        flex-direction: column-reverse; /* Coloca o pôster em cima e o texto embaixo */
        gap: 30px;
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

    /* 👇 Ajusta o bloco de texto para ocupar a largura total no mobile */
    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: 700;
        margin: 0; 
        text-align: left; 

        /* 👇 Reduz o título gigante para caber na tela do celular */
        @media (max-width: 768px) {
            font-size: 2.5rem;
            text-align: center; /* Centraliza para harmonizar no mobile */
        }
    }

    p {
        font-size: 20px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
        line-height: 1.5; 
        text-align: left; 

        /* 👇 Melhora a leitura do parágrafo no celular */
        @media (max-width: 768px) {
            font-size: 16px;
            text-align: center;
            margin-top: 15px;
        }
    }
`;

export const Porter = styled.div`
    z-index: 2; 
    display: flex;
    justify-content: center;

    img {
        width: 400px;
        max-width: 100%; /* 👇 Impede a imagem de estourar a tela */
        border-radius: 30px;
        margin-top: 100px;

        /* 👇 Ajusta o pôster para tamanhos de celular */
        @media (max-width: 768px) {
            width: 260px;
            margin-top: 0;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); /* Efeito de sombra legal */
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin: 30px 0; /* Removido margem lateral para não quebrar alinhamento */

    /* 👇 Centraliza os botões no mobile */
    @media (max-width: 768px) {
        justify-content: center;
        margin: 20px 0 0 0;
    }
`;
