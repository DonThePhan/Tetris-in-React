import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlayAreaProvider } from "./store/playAreaContext";

ReactDOM.render(
  <React.StrictMode>
    <PlayAreaProvider>
      <App />
    </PlayAreaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
