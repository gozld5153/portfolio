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
    overflow-y: scroll;
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
