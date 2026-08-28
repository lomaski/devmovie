import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin-top: 50px;
    width: 100%;
    box-sizing: border-box; /* Garante que o padding não quebre a largura total */
`;

export const Data = styled.div`
    h3 {
        font-size: 24px;
        margin-bottom: 25px; 
        text-align: left;
    }

    .movies-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        gap: 20px;       
        
        /* Centraliza os cards em telas muito pequenas (opcional, melhora o visual no celular) */
        @media (max-width: 480px) {
            justify-content: center;
        }
    }
`;

export const Movier = styled.div`
    display: flex; 
    /* Define uma largura base para o card, permitindo que ele cresça ou diminua se necessário */
    flex: 1 1 200px; 
    /* Define o tamanho máximo para o card não esticar infinitamente em telas gigantes */
    max-width: 250px; 

    @media (max-width: 480px) {
        max-width: 100%; /* No celular, o card pode ocupar a largura total se necessário */
    }
`;
