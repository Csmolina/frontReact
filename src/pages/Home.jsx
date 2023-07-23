import styled from "styled-components";
import { LoadData } from "../components/LoadData";
import { useContext } from "react";
import { Comentario } from "../components/Comentario";
import { CrearComentario } from "../components/CrearComentario";
import { ComentarioContext } from "../components/ComentariosContext";
import moment from "moment";
export function Home() {
  const {nombre,imagen} = useContext(ComentarioContext);
  return (
  
      <Container>
        <NavBar>
          {console.log(imagen)}
          <img src={imagen}></img> <h1>Te damos la bienvenida {nombre}</h1>
        </NavBar>
        <SubContainer>
          <CrearComentario  idcom={-1} />
          <LoadData/>
        </SubContainer>
      </Container>
  
  );
}
const Container = styled.div`
  background: rgb(187, 128, 62);
  background: linear-gradient(
    34deg,
    rgba(187, 128, 62, 1) 0%,
    rgba(39, 60, 159, 1) 100%
  );
  min-height: 100vh;
`;
const SubContainer = styled.div`
  margin: 0 10% 0 10%;
  padding: 10rem 0 10rem 0;
  height: 100%;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  color: white;
  background-color: #00000086;
  margin: 0;
  padding: 2rem;
  justify-content: center;
  font-weight: 600;
  img {
    height: 10vh;
    border-radius: 50%;
  }
`;
