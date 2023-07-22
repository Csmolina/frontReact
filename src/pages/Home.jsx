import styled from "styled-components";
export function Home({ user }) {
  return (
    <Container>
      <h1>Bienvenid@</h1>
      <h2>{user}</h2>
    </Container>
  );
}
const Container = styled.div``;
