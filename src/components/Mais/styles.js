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

