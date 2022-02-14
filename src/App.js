import styled from "styled-components";
import Skill from "./components/Skill";
import Landing from "./components/Landing";
import Translate from "./components/Translate";
// import sakura from "./img/sakura.gif";

export default function App() {
  return (
    <Container>
      <Translate />
      <Landing />
      <Skill />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: 100%;
`;
