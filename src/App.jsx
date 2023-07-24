import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Home } from "./pages/Home";
import {
  ComentarioProvider,
  ComentarioContext,
} from "./components/ComentariosContext";
function App() {
  const { nombre } = useContext(ComentarioContext);
  return <div className="App">{!nombre.length > 0 ? <Form /> : <Home />}</div>;
}

export default App;
