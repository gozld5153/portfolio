import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Observer from "./Observer";
import { FaGithub, FaBloggerB } from "react-icons/fa";
import ItsMe from "../img/itsME.jpeg";

const Footer = () => {
  const title = useRef();
  const [idx, setIdx] = useState(0);
  const [entry, setEntry] = useState(false);
  useEffect(() => {
    if (idx < 10 && entry === true) {
      const fade = setTimeout(() => {
        title.current.children[idx].className = "fade";
        setIdx(idx + 1);
      }, 200);

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
        <Myaspiration>
          <Wrapper>
            <ImgBox>
              <img src={ItsMe} alt="" />
            </ImgBox>
            <Pbox>
              <div>
                <p>
                  배우는 것을 두려워하지 않고 남에게 묻는 것을 부끄러워 하지
                  않습니다.
                </p>
                <p>현재는 TypeScript를 공부하고 있습니다.</p>
                <p>
                  쾌적한 사용자 환경을 제공하는 웹을 개발하는 사람이 되고
                  싶습니다!
                </p>
              </div>
            </Pbox>
          </Wrapper>
        </Myaspiration>
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
      <Observer callback={obFunc} marginStr="200px" />
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
const Myaspiration = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b9acc;
  color: #efefef;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  @media only screen and (max-width: 1659px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 953px) {
    width: 100%;
  }
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  flex-shrink: 0;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Pbox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 1659px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 953px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;
const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #222222;
  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 1.2rem;
  }
  span {
    width: 3rem;
    @media screen and (max-width: 980px) {
      width: 1.5rem;
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
  height: 40%;
  background-color: #7b9acc;
  transition: all 1.5s ease;
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
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1, 1.1);
    }
  }
  a {
    color: #f7f7f7;
  }
  svg {
    vertical-align: middle;
  }
`;
