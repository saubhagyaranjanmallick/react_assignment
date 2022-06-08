import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Appbar from "./Appbar";
// import Appbar1 from "./Appbar1";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>
      <Appbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



