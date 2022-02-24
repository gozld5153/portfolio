import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Container>
      <ul>
        {["START", "SKILL", "PROJECT", "END"].map((menu) => (
          <li key={menu}>
            <a href={`#${menu.toLowerCase()}`}>{menu}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 8%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 500;
  @media screen and (max-width: 1290px) {
    display: none;
  }
`;
