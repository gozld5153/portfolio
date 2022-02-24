import React from "react";
import styled from "styled-components";
const Project = () => {
  return <Container id="project">Project</Container>;
};

export default Project;

const Container = styled.div`
  height: 100vh;
  border: 2px solid blue;
  scroll-snap-align: start;
`;
