import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
   
}
body, input, button {
  font-family: 'Inter', sans-serif;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
:root {
  --color-primary: #f2e8c4;
  --color-primary-dark: #616668;
  --color-light-green: #98d9b6;
  --color-medium-green: #3ec9a7;
  --color-dark-green: #2b879e;

  --radius-inputs-buttons: 0.3rem;
  --box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
  --container-size: 1200px;
}
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px var(--Grey-2) inset !important;
  }
`