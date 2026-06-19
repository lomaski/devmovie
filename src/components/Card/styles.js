import styled from "styled-components"; // Removido o 'css' se não estiver usando

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Garante que o container preencha o slide */

  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h3 {
    color: #fff;
    margin-top: 10px;
    font-size: 16px; /* Evita que títulos muito grandes quebrem o layout */
    text-align: center;
    width: 100%;
    overflow: hidden; /* Opcional: esconde o texto que sobrar */
  }

  
`;
