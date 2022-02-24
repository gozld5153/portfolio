import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Observer from "./Observer";
import { FaGithub, FaBloggerB } from "react-icons/fa";

const Footer = () => {
  const title = useRef();
  const [idx, setIdx] = useState(0);
  const [entry, setEntry] = useState(false);
  useEffect(() => {
    if (idx < 10 && entry === true) {
      const fade = setTimeout(() => {
        title.current.children[idx].className = "fade";
        setIdx(idx + 1);
      }, 300);

      return () => clearTimeout(fade);
    } else if (idx <= 10 && entry === false) {
      for (let i = 0; i < 10; i++) {
        title.current.children[i].className = null;
        setIdx(0);
      }
    }
  }, [idx, entry]);

  const obFunc = (intersecting) => {
    if (intersecting) setEntry(true);
    else setEntry(false);
  };

  return (
    <>
      <Container id="end">
        <Title ref={title}>
          {"Thank you!".split("").map((el, i) => (
            <span key={i}>{el}</span>
          ))}
        </Title>
        <Connect entry={entry}>
          <LinkBox>
            <ul>
              <li>
                <a
                  href="https://github.com/gozld5153"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> 깃헙: github.com/gozld5153
                </a>
              </li>
              <li>
                <a
                  href="https://yongsa.tistory.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBloggerB /> 블로그: yongsa.tistory.com
                </a>
              </li>
            </ul>
          </LinkBox>
        </Connect>
      </Container>
      <Observer callback={obFunc} />
    </>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
  span {
    width: 3rem;
    @media screen and (max-width: 980px) {
      width: 2rem;
    }

    @media screen and (max-width: 530px) {
      width: 1rem;
    }
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

const Connect = styled.div`
  position: absolute;
  bottom: ${({ entry }) => (entry ? "0" : "-100%")};
  width: 100%;
  height: 40vh;
  background-color: #222222;
  transition: all 2s ease;
`;

const LinkBox = styled.div`
  height: 100%;
  font-size: 2rem;
  @media screen and (max-width: 980px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin-bottom: 1rem;
  }
  a {
    color: #f7f7f7;
  }
  svg {
    vertical-align: middle;
  }
`;
