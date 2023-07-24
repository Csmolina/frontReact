import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ComentarioProvider } from "./components/ComentariosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComentarioProvider>
      <App />
    </ComentarioProvider>
  </React.StrictMode>
);
