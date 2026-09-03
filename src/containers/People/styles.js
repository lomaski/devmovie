import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    display: flex; /* Alinha a foto e os textos lado a lado */
    gap: 40px;     /* Dá um espaço entre a foto e as informações */
    margin-top: 20px;
    padding: 40px;
    color: #fff;
    min-height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column; /* Em telas menores, a foto fica em cima e o texto embaixo */
        align-items: center;
        text-align: center;
    }
`;

export const Coven = styled.div`
    img {
        width: 300px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    }
`;

export const Info = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
        font-size: 2.5rem;
        margin: 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: #bbbbbb;
    }
`;

