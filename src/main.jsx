import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  {/* 👈 Aquí debe ir el único BrowserRouter */}
    <App />
  </BrowserRouter>
);
