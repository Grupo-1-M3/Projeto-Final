<<<<<<< HEAD
import styled, { createGlobalStyle } from "styled-components";
=======
import { createGlobalStyle } from "styled-components";
>>>>>>> b14f8f11057e4251b939b67c59d06c78e1747912

export const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    
  }
  body, input, button {
    font-family: 'Inter', sans-serif;
    background: var(--background-home);
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  :root {
    --white: #FAFAFA;
    --color-primary: #f2e8c4;
    --color-primary-dark: #616668;
    --color-light-green: #98d9b6;
    --color-medium-green: #3ec9a7;
    --color-dark-green: #2b879e;
    --background-company: #F5F5F5;
    --background-home: #181818;
    --background-header-home: rgba(33, 33, 33, 0.98);
    --color-button-home: #282528;
    --color-button-home-hover: #4CBB17;
    --background-footer: #000;
    --color-box-shadow: rgba(0, 0, 0, 0.25);

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

    
  .swiper {
    width: 100%;
    height: 100%;
  }rfshdahe;::-webkit-meter-even-less-good-value;L,.GR';
  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`