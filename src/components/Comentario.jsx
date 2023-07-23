import moment from "moment/moment";
import styled from "styled-components";
import { useState, useContext } from "react";
import { CrearComentario } from "./CrearComentario";
import { ComentarioContext } from "./ComentariosContext";

import axios from "axios";
export function Comentario({
  id,
  name,
  coment,
  url,
  points,
  time,
  anwsers,
}) {
  const {CargarComentarios} = useContext(ComentarioContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [puntaje,setPuntaje]=useState(0);
  const handleSubirPunto= ()=>{
    setPuntaje(puntaje+1);
    axios.put('http://127.0.0.1:8080/comentario?id='+id+"&punt="+puntaje)
    .then((response) => {
      console.log('Respuesta del servidor:', response.data);
      CargarComentarios();
      // Aquí puedes manejar la respuesta del servidor como desees
    })
    .catch((error) => {
      console.error('Error al realizar la solicitud:', error);
      // Aquí puedes manejar el error como desees
    });
  }
  const handleBajarPunto= ()=>{
    setPuntaje(puntaje-1);
    axios.put('http://127.0.0.1:8080/comentario?id='+id+"&punt="+puntaje)
    .then((response) => {
      console.log('Respuesta del servidor:', response.data);
      CargarComentarios();
      // Aquí puedes manejar la respuesta del servidor como desees
    })
    .catch((error) => {
      console.error('Error al realizar la solicitud:', error);
      // Aquí puedes manejar el error como desees
    });

  }
  const handleMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
  return (
    <GrandContainer>
      {" "}
      <Container>
        <Image>
          <img src={url} alt="" />
        </Image>
        <SubContainer>
          <Name>{name}</Name>
          <Text>{coment}</Text>
          <Containerend>
            <Btnadd onClick={handleSubirPunto}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </Btnadd>
            <Btnremove onClick={handleBajarPunto}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
              </svg>
            </Btnremove>
            <Points>{points} points</Points>
            <Replybtn onClick={handleMostrarFormulario}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-reply"
                viewBox="0 0 16 16"
              >
                <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
              </svg>{" "}
              Reply
            </Replybtn>
            <Answers> {anwsers} Respuestas</Answers>
          </Containerend>
        </SubContainer>
        <Hora>{moment(time).fromNow()}</Hora>
      </Container>
     
    
        {mostrarFormulario && (
          <CrearComentario  idcom={id} hide={handleMostrarFormulario}/>
        )}
    
    </GrandContainer>
  );
}

const GrandContainer = styled.div`

display: flex;
flex-direction: column;
gap: 2rem;
`;
const Container = styled.div`
&::before{
  transform: scaleY(-10vh);
transition: all 0.4s ease;
}
&::after{
  transform: scaleY(0);
  transition: all 0.4s ease;
}
  display: grid;
  color: white;
  grid-template-columns: auto 70% auto;
  align-items: center;

  background-color: #0a0a0a47;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0 0 0;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 10vh;
    border-radius: 50%;
  }
`;
const Name = styled.h2``;
const Replybtn = styled.button`
  padding: 0 0.5rem 0 0.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
  }
  transform: scale(1);
  transition: all ease 0.3s;
`;
const Answers = styled.p`
  margin: 0;
  padding: 0;
`;
const Text = styled.p`
  padding-left: 1rem;
`;
const Points = styled.p`
  margin: 0;
  padding: 0;
`;
const Btnadd = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
  }
  transform: scale(1);
  transition: all ease 0.3s;
`;
const Btnremove = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
  }
  transform: scale(1);
  transition: all ease 0.3s;
`;

const Hora = styled.p``;
const SubContainer = styled.div``;
const Containerend = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;
