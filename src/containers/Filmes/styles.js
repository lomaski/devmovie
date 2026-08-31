import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin-top: 50px;
    width: 100%;
`;

export const Data = styled.div`
    h3 {
        font-size: 24px;
        margin-bottom: 25px; 
        text-align: left;
    }

    /* Essa é a caixinha que agora vai alinhar os cards lado a lado */
    .movies-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; /* 👈 ESSENCIAL: Se tiver muitos filmes, eles quebram para a próxima linha em vez de esmagar */
        gap: 20px;       /* 👈 Cria um espaçamento perfeito e igual entre os cards */
    }

    select {
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #000;
        color: #fff;
    }
`;

export const Movier = styled.div`
    display: flex; 
`;
