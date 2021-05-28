import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    /* margin:100px */
  }
  html{
    width:100%;
    height:100%;
  }
  body {
    /* font-family: "Helvetica", "Arial", sans-serif; */
    width:100%;
    height:100%;
  }
  button {
    text-decoration: none;
    outline: none;
    cursor:pointer;
    /* display:inline-block; */
    border-style: none;
    
  }

  
`

export default GlobalStyle;