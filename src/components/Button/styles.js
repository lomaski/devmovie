import styled, { css } from "styled-components";

export const buttonStyles = css`
    border: 3px solid #000;
    background: transparent;
    color: #000000;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        background: #fff;
        color: #ff0000;
        border-color: #ff0000;
    }
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`

export const ButtonRed = styled.button`
  ${buttonStyles}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0 0 0 7px rgba(255, 0, 0, 0.3);

  &:hover {
    box-shadow: none;
  }
`