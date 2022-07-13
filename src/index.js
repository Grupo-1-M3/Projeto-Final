import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream
import "swiper/css/bundle";
import Providers from "./contexts/index";
=======
import GlobalStyled from "./styles/global"
>>>>>>> Stashed changes


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< Updated upstream
  <Providers>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Providers>
)
=======
  <BrowserRouter>
    <GlobalStyled />
    <App />
  </BrowserRouter>
);
>>>>>>> Stashed changes

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
