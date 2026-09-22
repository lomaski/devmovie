import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    display: flex; /* Alinha a foto e os textos lado a lado */
    gap: 40px;     /* Dá um espaço entre a foto e as informações */
    margin-top: 20px;
    padding: 40px;
    color: #fff;
    min-height: 100vh;
    box-sizing: border-box; /* Garante que os paddings não empurrem a tela */

    @media (max-width: 768px) {
        flex-direction: column; /* Em telas menores, a foto fica em cima e o texto embaixo */
        align-items: center;
        text-align: center;
        padding: 140px 20px 40px 20px; /* 👇 Dá espaço para o Header no mobile e reduz as laterais */
        margin-top: 0;
    }
`;

export const Coven = styled.div`
    display: flex;
    justify-content: center;
    height: 300px;

    img {
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);

        @media (max-width: 768px) {
            width: 220px; /* 👇 Reduz um pouquinho a foto no celular para sobrar mais espaço para o texto */
        }
    }
`;

export const Info = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%; /* 👇 Ocupa todo o espaço disponível no mobile */

    h2 {
        font-size: 2.5rem;
        margin: 0;

        @media (max-width: 768px) {
            font-size: 2rem; /* 👇 Título ligeiramente menor no celular */
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: #bbbbbb;
        text-align: left; /* 👇 Mantém o texto da biografia alinhado à esquerda para melhor leitura, mesmo com o container centralizado */

        @media (max-width: 768px) {
            font-size: 0.95rem;
        }
    }
`;
