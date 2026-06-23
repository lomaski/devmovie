// src/components/Modal/styles.js
import styled from "styled-components";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 100vw;
  z-index: 999; /* Standardized high z-index */
  position: fixed; /* Changed from absolute to cover screen on scroll */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 60%; /* Slightly wider for better video scaling */
  max-width: 800px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Changed from fixed to coordinate with absolute close button */
  padding: 40px 20px 20px 20px; /* Adjusted padding to clear space for the X button */
  border-radius: 8px; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent; /* Clean design */
  color: #fff;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #ff0000;
  }
`;
