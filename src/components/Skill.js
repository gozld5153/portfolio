import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Observer from "./Observer";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa";
export default function Skill() {
  const skillBox = useRef();
  const [intersecting, setIntersecting] = useState(false);
  const skillArray = [
    ["HTML", <ImHtmlFive color="#DD4B25" />, "#DD4B25"],
    ["CSS", <ImCss3 color="#264ADD" />, "#264ADD"],
    ["JavaScript", <SiJavascript color="#EFD81D" />, "#EFD81D"],
    ["React", <SiReact color="#01D1F7" />, "#01D1F7"],
    ["TypeScript", <SiTypescript color="#2E74C0" />, "#2E74C0"],
    ["의사소통", <FaRegHandshake color="hotpink" />, "hotpink"],
  ];
  const obFunc = (intersecting) => {
    if (intersecting) setIntersecting(true);
  };

  return (
    <SkillBox id="skill">
      <Title>Skills</Title>
      <CircleContainer ref={skillBox}>
        {skillArray.map((name, idx) => {
          return (
            <CircleBox category={idx} intersecting={intersecting} key={idx}>
              <svg>
                <circle cx="80" cy="80" r="60" />
              </svg>
              <span key={name[0]} style={{ color: `${name[2]}` }}>
                {name[0]}
              </span>
            </CircleBox>
          );
        })}

        <SecondCircle>
          {skillArray.map((skill, idx) => {
            return (
              <BackCircle key={idx} skill={skill[0]}>
                <Safari skill={skill[0]}>
                  <svg>
                    <circle cx="80" cy="80" r="60" />
                  </svg>
                </Safari>
                <SkillName key={skill[0]}>{skill[1]}</SkillName>
              </BackCircle>
            );
          })}
        </SecondCircle>
      </CircleContainer>

      <Observer element={skillBox} callback={obFunc} marginStr="120px" />
    </SkillBox>
  );
}

const SkillBox = styled.div`
  padding-top: 3rem;
  padding-bottom: 5rem;
  background-color: #fcf6f5;
  position: relative;
  scroll-snap-align: start;
  svg {
    width: 160px;
    height: 160px;
  }
`;

const Title = styled.div`
  width: 30vh;
  font-size: 3rem;
  font-weight: bold;
  color: #7b9acc;
  border-bottom: 4px solid #7b9acc;
  margin: 1rem auto 4rem auto;
  text-align: center;
`;

const CircleContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem 12rem;

  @media screen and (max-width: 1454px) {
    width: 60%;
    gap: 6rem 8rem;
  }
  @media screen and (max-width: 1242px) {
    width: 60%;
    gap: 2rem 4rem;
  }
  @media screen and (max-width: 1028px) {
    width: 70%;
    gap: 2rem 4rem;
  }

  @media screen and (max-width: 968px) {
    width: 80%;
    gap: 2rem 4rem;
  }
  @media screen and (max-width: 774px) {
    width: 90%;
    gap: 2rem;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    gap: 1rem;
  }
`;

const SecondCircle = styled(CircleContainer)`
  width: 100%;
  position: absolute;
`;

const SkillName = styled.div`
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%) rotate(90deg);
  svg {
    width: 60px;
    height: 60px;
  }
`;

const BackCircle = styled.div`
  transform: rotate(-90deg);
  width: 160px;
  height: 160px;
  z-index: 10;
`;

const Safari = styled.div`
  fill: none;
  stroke: white;
  stroke-width: 10;
  ${({ skill }) =>
    skill === "HTML" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px #dd4b25);
      filter: drop-shadow(0 0 2px #dd4b25);
    `}
  ${({ skill }) =>
    skill === "CSS" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px #264add);
      filter: drop-shadow(0 0 2px #264add);
    `}
      ${({ skill }) =>
    skill === "JavaScript" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px #efd81d);
      filter: drop-shadow(0 0 2px #efd81d);
    `}
      ${({ skill }) =>
    skill === "React" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px #01d1f7);
      filter: drop-shadow(0 0 2px #01d1f7);
    `}
      ${({ skill }) =>
    skill === "TypeScript" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px #2e74c0);
      filter: drop-shadow(0 0 2px #2e74c0);
    `}
      ${({ skill }) =>
    skill === "의사소통" &&
    css`
      -webkit-filter: drop-shadow(0 0 2px hotpink);
      filter: drop-shadow(0 0 2px hotpink);
    `}
`;
const CircleBox = styled.div`
  position: relative;
  transform: rotate(-90deg);
  width: 160px;
  height: 160px;
  z-index: 100;
  span {
    position: absolute;
    left: -50%;
    top: 50%;
    display: inline-block;
    transform: translate(0%, -50%) rotate(90deg);
    text-align: center;
    width: 160px;
    font-size: 1.2rem;
    padding-top: 1rem;
  }
  circle {
    fill: none;
    stroke-width: 10;
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    stroke-linecap: round;

    ${({ category }) =>
      category === 0 &&
      css`
        stroke: #dd4b25;
        -webkit-filter: drop-shadow(0 0 2px #dd4b25);
        filter: drop-shadow(0 0 2px #dd4b25);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-html 3.5s ease-in-out forwards" : null};
        @keyframes circle-html {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}

    ${({ category }) =>
      category === 1 &&
      css`
        stroke: #264add;
        filter: drop-shadow(0 0 2px #264add);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-css 3.5s ease-in-out forwards" : null};
        @keyframes circle-css {
          to {
            stroke-dashoffset: 120;
          }
        }
      `}

      ${({ category }) =>
      category === 2 &&
      css`
        stroke: #efd81d;
        filter: drop-shadow(0 0 2px #efd81d);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-js 3.5s ease-in-out forwards" : null};
        @keyframes circle-js {
          to {
            stroke-dashoffset: 130;
          }
        }
      `}

      ${({ category }) =>
      category === 3 &&
      css`
        stroke: #01d1f7;
        filter: drop-shadow(0 0 2px #01d1f7);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-react 3.5s ease-in-out forwards" : null};
        @keyframes circle-react {
          to {
            stroke-dashoffset: 190;
          }
        }
      `}

      ${({ category }) =>
      category === 4 &&
      css`
        stroke: #2e74c0;
        filter: drop-shadow(0 0 2px #2e74c0);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-ts 3.5s ease-in-out forwards" : null};
        @keyframes circle-ts {
          to {
            stroke-dashoffset: 340;
          }
        }
      `}

      ${({ category }) =>
      category === 5 &&
      css`
        stroke: hotpink;
        filter: drop-shadow(0 0 2px hotpink);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-community 3.5s ease-in-out forwards" : null};
        @keyframes circle-community {
          to {
            stroke-dashoffset: 40;
          }
        }
      `}
  }
`;
