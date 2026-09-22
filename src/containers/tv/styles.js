import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* 👇 Garante tamanho mínimo no mobile */
  @media (max-width: 768px) {
    height: 50vh;
  }

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;

export const Foxy = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%; /* 👇 Adicionado para evitar quebras */
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  width: 100%;
  margin: -100px auto 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  box-sizing: border-box;

  /* 👇 EMPILHA O PÔSTER E AS INFORMAÇÕES NO MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -50px; /* Sobe um pouco menos no celular */
    gap: 20px;
  }
`;

export const Coven = styled.div`
  width: 500px;
  max-width: 100%; /* 👇 Impede que o pôster estoure a tela */
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
  animation: ${fadeIn} 0.5s linear;
  margin-bottom: 50px;

  /* 👇 Reduz o tamanho do pôster no celular */
  @media (max-width: 768px) {
    width: 280px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border-radius: 30px;
  }
`;

export const Info = styled.div`
  color: white;
  padding: 20px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  /* 👇 Texto ocupa largura total e centraliza no mobile */
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 28px; /* Título menor para celular */
    }
  }

  p {
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
`;

export const ContainerMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  
  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 50px;

    @media (max-width: 768px) {
      margin: 10px 0; /* Remove margens gigantes no mobile */
    }
  }

  h4 {
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  iframe {
    border: none;
    height: 500px;
    width: 100%;

    /* 👇 Torna o vídeo do YouTube responsivo (não corta nas laterais) */
    @media (max-width: 768px) {
      height: 250px; /* Altura proporcional para telas pequenas */
    }
  }
`;
