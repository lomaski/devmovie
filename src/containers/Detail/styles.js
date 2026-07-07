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
  position: relative; /* ADICIONADO: Necessário para que o ::before e ::after fiquem presos dentro do Background */

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* AJUSTADO: Mudado de 80% para 100% para cobrir todo o container caso queira o efeito completo */
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
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin: -100px auto 0 auto; /* AJUSTADO: Centraliza o container na tela horizontalmente */
  position: relative; /* ADICIONADO: Garante que o z-index funcione corretamente */
  z-index: 2; /* AJUSTADO: Aumentado para 2 para garantir que fique acima das máscaras do Background */
`;

export const Coven = styled.div`
  width: 500px;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
  animation: ${fadeIn} 0.5s linear;
  margin-bottom: 50px;

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

  h2 {
    font-size: 50px;
    font-weight: 700;

  }

  p {
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;
