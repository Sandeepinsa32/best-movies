import React from "react";
import ReactDOM from "react-dom";
// import NeoG from "./NeoGrammer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppTany/>
  </React.StrictMode>,
  rootElement
);
