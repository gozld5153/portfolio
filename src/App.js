import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skill, Landing, Translate, Nav, Project, Footer } from "./components";

// import sakura from "./img/sakura.gif";

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const handleMouseWheel = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    setScrollTop(scrollTop);
    setScrollHeight(scrollHeight);
    setClientHeight(clientHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMouseWheel, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleMouseWheel, {
        passive: false,
      });
    };
  }, []);

  return (
    <Container>
      <Nav />
      <Translate />
      <Landing
        scrollHeight={scrollHeight}
        scrollTop={scrollTop}
        clientHeight={clientHeight}
      />
      <Skill />
      <Project />
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: 100%;
`;
