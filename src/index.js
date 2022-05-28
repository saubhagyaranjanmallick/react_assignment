import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import {createRoot} from 'react-dom/client';
import Appbar from "./Appbar";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


// const container = document.getElementById('App');

// root.render(<App tab ='home'/>);

ReactDOM.render(
  <React.StrictMode>
    {/* <GoogleReCaptchaProvider
      reCaptchaKey="[6Lc0zxggAAAAAGKfqNOJOeHpRTa7DXeksnk6HO03]"
      language="[optional_language]"> */}
    <BrowserRouter>
      <Appbar />
      <App />
    </BrowserRouter>
    {/* </GoogleReCaptchaProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);



