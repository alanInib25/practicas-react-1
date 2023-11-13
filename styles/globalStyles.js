import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none; outline: none;
    box-sizing: border-box;
    text-decoration: none;

    //responsive;
    @media screen and (max-width: 770px){
      html{
        font-size: 60%;
      }
    }
  
    @media screen and (max-width: 450px){
      html{
        font-size: 50%;
      }
    }
  }

  html{
    font-size: 62.5%;
  }
`;
