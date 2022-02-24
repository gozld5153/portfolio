import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Footer = () => {
  const title = useRef();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < 10) {
      const fade = setTimeout(() => {
        title.current.children[idx].className = "fade";
        setIdx(idx + 1);
      }, 500);

      return () => clearTimeout(fade);
    }
  }, [idx]);

  return (
    <Container id="end">
      <Title ref={title}>
        {"Thank you!".split("").map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </Title>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  span {
    width: 3rem;
    display: inline-block;
    transform: translateY(-50px);
    opacity: 0;
    transition: all 0.5s linear;
  }
  .fade {
    transform: translateY(0px);
    opacity: 1;
  }
`;
