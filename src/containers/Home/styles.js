import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.image});
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* ← Adicione esta linha */

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1; /* Adicione z-index para garantir */
    }
`;

export const Info = styled.div`
    color: #fff;
    z-index: 2; /* Mantém o texto acima do overlay */
    position: relative; /* Garante que o z-index funcione */
    text-align: center; /* Opcional: centraliza o texto */
    width: 50%; /* Opcional: limita a largura */
    padding: 30px; /* Opcional: espaçamento interno */

    h1 {
        font-size: 5rem;
        font-weight: 700;
        margin: 0; 
        text-align: left; /* Centraliza o título */
    }

    p {
        font-size: 20px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
        line-height: 1.5; /* Melhora legibilidade */
        text-align: left; 
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: space-around;
    justify-content: center;
    height: 100%;
    max-width: 1500px;
`;

export const Porter = styled.div`
    z-index: 2; /* Mantém a imagem acima do overlay */
    img{
        width: 400px;
        border-radius: 30px;
        margin-top: 100px;
    }
    
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin: 30px;
`;