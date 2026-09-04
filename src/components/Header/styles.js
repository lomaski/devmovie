import styled from "styled-components";

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;                  
  width: 100%;              
  display: flex;
  justify-content: space-between; 
  align-items: center;      
  padding: 10px 20px;       
  box-sizing: border-box;
  background-color: ${props => props.$changeBackground ? '#000' : 'transparent'}; 
  transition: background-color 0.5s ease; /* Reduzi para 0.5s para responder mais rápido ao scroll */

  img {
    width: auto;            
    height: 50px;           
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin: 0;
  padding: 0;
  /* Removida a lógica de cor daqui, pois agora ela pertence individualmente ao componente Li */
`;

export const Li = styled.li`
  position: relative;
  cursor: pointer;
  /* Se o link estiver ativo e o fundo continuar transparente, você pode mudar a cor se quiser, 
     ou manter fixo em #fff para destacar com a barra verde */
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
    /* Descomentado e corrigido para $isActive: se estiver ativo, fica 100% visível por padrão */
    width: ${props => props.$isActive ? '100%' : '0'};                
    background-color: #00FF00;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease-in-out; 
  }

  &:hover::after {
    width: 100%;             
  }
`;
