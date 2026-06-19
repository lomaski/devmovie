import styled from "styled-components";

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;                  /* Garante que comece no canto esquerdo */
  width: 100%;              /* OBRIGATÓRIO: fixed precisa disso para ocupar toda a largura */
  display: flex;
  justify-content: space-between; 
  align-items: center;      /* Alinha verticalmente a logo com o menu */
  padding: 10px 20px;       /* Aumentado para melhor respiro visual */
  box-sizing: border-box;   /* Garante que o padding não quebre os 100% de largura */
  background-color: ${props => props.changeBackground ? '#000' : 'transparent'}; /* Fundo transparente inicialmente, escurece ao rolar */
  transition: background-color 1s ease; /* Transição suave para a mudança de fundo */

  img {
    width: auto;            /* Evita distorção usando a proporção original */
    height: 50px;           /* Controlar por altura fixa costuma ser mais seguro para logos */
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  font-weight: 600;

  a {
    color: inherit;
    text-decoration: none;
  }

  &::after {
    content: '';
    height: 3px;
    //width: ${props => props.isActive ? '100%' : '0'};                /* Inicia invisível (sem largura) */
    background-color: #00FF00;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease-in-out; /* Define a velocidade e suavidade da animação */
  }

  &:hover::after {
    width: 100%;             /* Expande para 100% ao passar o mouse */
  }
`;

