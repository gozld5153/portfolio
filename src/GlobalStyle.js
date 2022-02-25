import { createGlobalStyle } from "styled-components";
import Blackhansan2 from "./font/BlackHanSans-Regular.woff2";
import Blackhansan from "./font/BlackHanSans-Regular.woff";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Black Han Sans';
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Black Han Sans';
    src: url(${Blackhansan2}) format('woff2'),
        url(${Blackhansan}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}



  /* html {
    scroll-snap-type: y mandatory;
    @media screen and (max-width: 1290px){
      scroll-snap-type: none;
    } 
  } */

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
  hr {
    margin: 3rem 0;
    height: 5px;
    background-color: #7B9ACC;
  }
`;

export default GlobalStyle;
