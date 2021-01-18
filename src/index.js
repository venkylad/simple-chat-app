import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SpeechProvider appId="7758d824-d899-4dd7-ba70-d4bea44789d4" language="en-US">
    <App />
  </SpeechProvider>,
  rootElement
);
