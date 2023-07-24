import { useState } from "react";
import styled from "styled-components";
import { ComentarioContext } from "./ComentariosContext";
import { useContext } from "react";
export function Form() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState(false);
  const { GuardarUsuario } = useContext(ComentarioContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre == "" || imagen == "") {
      setError(true);
    } else {
      setError(false);
      GuardarUsuario(nombre, imagen);
    }
  };
  return (
    <Container>
      <SubContainer>
        <Title>Chat prueba Aval Buró </Title>
        <Forms onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Ingresar nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Ingresar url de imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          {error && (
            <Error>
              {" "}
              <hr />
              Todos los campos son obligatorios.
            </Error>
          )}
          <Btn>Ingresar al chat</Btn>
        </Forms>
      </SubContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(187, 128, 62);
  background: linear-gradient(
    34deg,
    rgba(187, 128, 62, 1) 0%,
    rgba(39, 60, 159, 1) 100%
  );
  height: 100vh;
  width: 100%;
`;
const Title = styled.h1`
  color: white;
  font-weight: 700;
`;
const SubContainer = styled.div`
  background-color: #567bd944;
  padding: 10rem 5rem 10rem 5rem;
  border-radius: 10px;
  border: none !important;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(84, 84, 84, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(84, 84, 84, 1);
  box-shadow: 0px 0px 5px 0px rgba(84, 84, 84, 1);
`;
const Input = styled.input`
  height: 3vh;
  width: 30vh;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #ffffff64;
`;
const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Btn = styled.button`
color: #ffffff;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 15px;
  border: 0.1rem;
  background-color: #493561;
  &:hover {
    background-color: #3a2c4b;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  transform: scale(1);
  transition: all 0.3s ease;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
const Error = styled.p`
  margin: 0;
  color: #f34e4e;
  font-weight: 900;
`;
