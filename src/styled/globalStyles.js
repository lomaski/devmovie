import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

  body{
    background-color: #000!important;
    color: rgb(255, 255, 255)!important;
  }
`;

export default GlobalStyle;
