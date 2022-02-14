import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";

export default function Skill() {
  const skillBox = useRef();
  const [intersecting, setIntersecting] = useState(false);
  const skillArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "의사소통",
  ];

  const handleSkill = useCallback((entry) => {
    if (entry[0].isIntersecting) {
      setIntersecting(true);
    } else {
      setIntersecting(false);
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    let observer;
    let skill = skillBox.current;
    if (skill) {
      observer = new IntersectionObserver(handleSkill, options);
      observer.observe(skill);
    }
    return () => observer.disconnect(skill);
  }, [handleSkill]);
  return (
    <SkillBox>
      <Title>Skill</Title>
      <CircleContainer ref={skillBox}>
        {Array(6)
          .fill(0)
          .map((_, idx) => {
            return (
              <CircleBox category={idx} intersecting={intersecting} key={idx}>
                <svg>
                  <circle cx="80" cy="80" r="60" />
                </svg>
              </CircleBox>
            );
          })}
      </CircleContainer>
      <SecondCircle>
        {skillArray.map((skill, idx) => {
          return (
            <BackCircle key={idx} skill={skill}>
              <svg>
                <circle cx="80" cy="80" r="60" />
              </svg>
              <SkillName key={skill}>{skill}</SkillName>
            </BackCircle>
          );
        })}
      </SecondCircle>
    </SkillBox>
  );
}

const SkillBox = styled.div`
  position: relative;
`;

const Title = styled.div`
  width: 30vh;
  font-size: 3rem;
  font-weight: bold;
  border-bottom: 4px solid black;
  margin: 1rem auto;
  text-align: center;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SecondCircle = styled(CircleContainer)`
  transform: translateY(-100%);
`;

const SkillName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  font-weight: 500;
`;

const BackCircle = styled.div`
  transform: rotate(-90deg);
  width: 160px;
  height: 160px;
  circle {
    fill: none;
    stroke: white;
    stroke-width: 10;
    ${({ skill }) =>
      skill === "HTML" &&
      css`
        filter: drop-shadow(0 0 5px red);
      `}
    ${({ skill }) =>
      skill === "CSS" &&
      css`
        filter: drop-shadow(0 0 5px blue);
      `}
      ${({ skill }) =>
      skill === "JavaScript" &&
      css`
        filter: drop-shadow(0 0 5px #f1d00a);
      `}
      ${({ skill }) =>
      skill === "React" &&
      css`
        filter: drop-shadow(0 0 5px black);
      `}
      ${({ skill }) =>
      skill === "TypeScript" &&
      css`
        filter: drop-shadow(0 0 5px #2666cf);
      `}
      ${({ skill }) =>
      skill === "의사소통" &&
      css`
        filter: drop-shadow(0 0 5px hotpink);
      `}
  }
  z-index: 10;
`;
const CircleBox = styled.div`
  transform: rotate(-90deg);
  width: 160px;
  height: 160px;
  z-index: 100;
  circle {
    fill: none;
    stroke-width: 10;
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    stroke-linecap: round;

    ${({ category }) =>
      category === 0 &&
      css`
        -webkit-stroke: red;
        stroke: red;
        -webkit-filter: drop-shadow(0 0 5px red);
        filter: drop-shadow(0 0 5px red);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-html 1s ease-in-out forwards" : null};
        @keyframes circle-html {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}

    ${({ category }) =>
      category === 1 &&
      css`
        stroke: blue;
        filter: drop-shadow(0 0 5px blue);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-css 1s ease-in-out forwards" : null};
        @keyframes circle-css {
          to {
            stroke-dashoffset: 120;
          }
        }
      `}

      ${({ category }) =>
      category === 2 &&
      css`
        stroke: #f1d00a;
        filter: drop-shadow(0 0 5px #f1d00a);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-js 1s ease-in-out forwards" : null};
        @keyframes circle-js {
          to {
            stroke-dashoffset: 130;
          }
        }
      `}

      ${({ category }) =>
      category === 3 &&
      css`
        stroke: black;
        filter: drop-shadow(0 0 5px black);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-react 1s ease-in-out forwards" : null};
        @keyframes circle-react {
          to {
            stroke-dashoffset: 190;
          }
        }
      `}

      ${({ category }) =>
      category === 4 &&
      css`
        stroke: #2666cf;
        filter: drop-shadow(0 0 5px #2666cf);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-ts 1s ease-in-out forwards" : null};
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
        filter: drop-shadow(0 0 5px hotpink);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-html 1s ease-in-out forwards" : null};
        @keyframes circle-html {
          to {
            stroke-dashoffset: 40;
          }
        }
      `}
  }
`;
