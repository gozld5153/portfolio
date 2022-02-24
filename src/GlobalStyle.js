import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    scroll-snap-type: y mandatory;
    @media screen and (max-width: 768px){
      scroll-snap-type: none;
    } 
  }

  button {
    border: none;
    background-color: white;
  }

  li {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
  }

`;

export default GlobalStyle;
