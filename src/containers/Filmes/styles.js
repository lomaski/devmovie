// src/components/Mais/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  button {
    background-color: #d4af37; /* A cor dourada padrão do seu app */
    color: #111;
    border: none;
    border-radius: 24px;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #fff;
      transform: scale(1.05);
    }

    &:disabled {
      background-color: #555;
      color: #999;
      cursor: not-allowed;
      transform: none;
    }
  }
`;


export const Data = styled.div`
    margin-top: 100px; /* Para não ficar escondido atrás do header fixo */
    
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
        gap: 20px;
        margin-left: 20px;       /* 👈 Cria um espaçamento perfeito e igual entre os cards */
    }

    select {
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #000;
        color: #fff;
        margin-left: 20px;
    }
`;

export const Movier = styled.div`
    display: flex; 
`;
