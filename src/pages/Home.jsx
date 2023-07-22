import styled from "styled-components";
export function Home({ user,imagen }) {
  return (
    <Container>
      <h1>Bienvenid@</h1>
      <h2>{user}</h2>
      <img src={imagen}  ></img>
    </Container>
  );
}
const Container = styled.div``;
