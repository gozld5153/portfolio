import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";

export default function Skill() {
  const skillBox = useRef();
  const [intersecting, setIntersecting] = useState(false);

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
      <CircleContainer ref={skillBox}>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return (
              <CircleBox category={idx} intersecting={intersecting} key={idx}>
                <svg>
                  <circle cx="80" cy="80" r="50" />
                </svg>
              </CircleBox>
            );
          })}
      </CircleContainer>
      <SecondCircle>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return (
              <BackCircle key={idx}>
                <svg>
                  <circle cx="80" cy="80" r="50" />
                </svg>
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
const CircleContainer = styled.div`
  display: flex;
`;

const SecondCircle = styled(CircleContainer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const BackCircle = styled.div`
  transform: rotate(-90deg);
  width: 170px;
  height: 170px;
  circle {
    fill: none;
    stroke: white;
    stroke-width: 10;
    filter: drop-shadow(0 0 5px red);
  }
  z-index: 10;
`;
const CircleBox = styled.div`
  transform: rotate(-90deg);
  width: 170px;
  height: 170px;
  z-index: 100;
  circle {
    fill: none;
    stroke-width: 10;
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    stroke-linecap: round;

    ${({ category }) =>
      category === 0 &&
      css`
        stroke: red;
        filter: drop-shadow(0 0 5px red);
        animation: ${({ intersecting }) =>
          intersecting ? "circle-html 1s ease-in-out forwards" : null};
        @keyframes circle-html {
          to {
            stroke-dashoffset: 120;
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
            stroke-dashoffset: 150;
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
  }
`;
