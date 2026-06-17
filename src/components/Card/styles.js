import styled from "styled-components"; // Removido o 'css' se não estiver usando

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Garante que o container preencha o slide */

  img {
    border-radius: 8px;
    width: 100%; /* Mudado de 300px para 100% */
    height: auto; /* Mantém a proporção correta da imagem sem achatar */
    object-fit: cover;
  }

  h3 {
    color: #fff;
    margin-top: 10px;
    font-size: 16px; /* Evita que títulos muito grandes quebrem o layout */
    text-align: center;
    width: 100%;
    white-space: nowrap; /* Opcional: mantém o título em uma linha só */
    overflow: hidden; /* Opcional: esconde o texto que sobrar */
    text-overflow: ellipsis; /* Opcional: adiciona "..." no fim de títulos longos */
  }

  h2 {
    color: #fff;
    font-size: 32px;
    margin: 50px 0 20px 0;
  }

  .swipe-wrapper {
    display: flex;
  }
`;
