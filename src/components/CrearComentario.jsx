import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { ComentarioContext } from "./ComentariosContext";
import moment from "moment";
export function CrearComentario({ idcom, hide }) {
  moment.defaultFormatUtc;
  const { CargarComentarios, nombre, imagen } = useContext(ComentarioContext);
  const [formData, setFormData] = useState({
    id: idcom,
    comentario: "",
    name: nombre,
    puntaje: 0,
    subcomentario: [],
    url: imagen,
    fechahora: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.fechahora = moment().format();
    if (formData.id === -1) {
      axios
        .post(
          "https://back-production-be60.up.railway.app/comentario",
          formData
        )
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
          CargarComentarios();
          // Aquí puedes manejar la respuesta del servidor como desees
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
          // Aquí puedes manejar el error como desees
        });
    } else {
      axios
        .put(
          "https://back-production-be60.up.railway.app/subcomentario?id=" +
            formData.id,
          formData
        )
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
          hide();
          CargarComentarios();
          // Aquí puedes manejar la respuesta del servidor como desees
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
          // Aquí puedes manejar el error como desees
        });
    }
    // Realizar la solicitud POST utilizando Axios
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="comentario"
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          placeholder="Ingresa un comentario"
          required
        ></Input>
        <Btn type="submit">Agregar</Btn>
      </Form>
    </Container>
  );
}
const Container = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 2rem;
`;
const Input = styled.input`
  width: 100%;
  font-size: 1.3rem;
  padding: 1rem;
  height: 6rem;
  border-radius: 10px;
  border: none;
  background-color: #ffffffcf;
`;
const Btn = styled.button`
  font-size: 1.3rem;
  border-radius: 20px;
  border: none;
  padding: 1rem 2rem 1rem 2rem;
  background-color: #1a1a1a;
  color: white;
  &:hover {
    transition: all 0.3s ease;
    background-color: #2a2b2a;
  }
  transition: all 0.3s ease;
`;
