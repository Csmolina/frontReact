import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const ComentarioContext = createContext();

const ComentarioProvider = ({ children }) => {
  const [comentarios, setComentarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  const GuardarUsuario = (n, i) => useEffect(setNombre(n), setImagen(i));

  const CargarComentarios = async () => {
    try {
      const response = await axios.get(
        "https://back-production-be60.up.railway.app/comentarios"
      );
      const data = response.data;
      // Aquí puedes procesar los datos si es necesario antes de almacenarlos en el estado
      setComentarios(Object.values(data).reverse());
    } catch (error) {
      console.error("Error al cargar los comentarios:", error);
    }
  };

  return (
    <ComentarioContext.Provider
      value={{ comentarios, CargarComentarios, nombre, GuardarUsuario, imagen }}
    >
      {children}
    </ComentarioContext.Provider>
  );
};

export { ComentarioContext, ComentarioProvider };
