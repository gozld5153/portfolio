import React, { useState } from "react";
import styled from "styled-components";
import ProjectNbbang from "../img/nbbang.gif";
import ProjectKickick from "../img/kickick.gif";
import Observer from "./Observer.js";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  const [onNbbang, setOnNbbang] = useState(false);
  const [onKickick, setOnKickick] = useState(false);

  const handleNbbang = (isOn) => {
    if (onNbbang) return;
    if (isOn) setOnNbbang(true);
  };
  const handleKickick = (isOn) => {
    if (onKickick) return;
    if (isOn) setOnKickick(true);
  };

  return (
    <Container id="project">
      <Title>Project</Title>
      <ItemBox>
        <Nbbang>
          <ImgBox onNbbang={onNbbang}>
            <a href="https://nbbang.tk/" target="_blank" rel="noreferrer">
              <img src={ProjectNbbang} alt="" />
            </a>
          </ImgBox>
          <Explanation onNbbang={onNbbang}>
            <p>프로젝트: 엔빵(Nbbang)</p>
            <p>2주 4인 팀프로젝트</p>
            <p>협업 중 자신의 기여도를 알 수 있는 사이트</p>
            <p>담당업무: 메인페이지, 로그인페이지</p>
            <p>
              React를 기반으로 styled components를 사용했고 서버와의 통신은
              axios를 사용했습니다.
            </p>
            <p>
              배포링크: &nbsp;
              <a href="https://nbbang.tk/" target="_blank" rel="noreferrer">
                nbbang.tk
              </a>
            </p>
            <p>
              <a
                href="https://github.com/gozld5153/nbbang"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                깃헙링크
              </a>
            </p>
          </Explanation>
          <Observer callback={handleNbbang} margin="0px" />
        </Nbbang>
        <hr />
        <Kickkick>
          <ImgBox2 onKickick={onKickick}>
            <a href="https://kickick.net/" target="_blank" rel="noreferrer">
              <img src={ProjectKickick} alt="" />
            </a>
          </ImgBox2>
          <Explanation2 onKickick={onKickick}>
            <p>프로젝트: 킥킥(KicKick)</p>
            <p>4주 4인 팀프로젝트</p>
            <p>자신만의 비법(kick)을 공유하는 커뮤니티 사이트</p>
            <p>담당업무: 게시판 페이지</p>
            <p>
              React를 기반으로 styled components, storybook을 사용했고, state를
              전역에서 관리하기 위해 redux를 사용했습니다.
            </p>
            <p>
              배포링크: &nbsp;
              <a href="https://kickick.net/" target="_blank" rel="noreferrer">
                kickick.net
              </a>
            </p>
            <p>
              <a
                href="https://github.com/gozld5153/kickick"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                깃헙링크
              </a>
            </p>
          </Explanation2>
          <Observer callback={handleKickick} margin="0px" />
        </Kickkick>
      </ItemBox>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  /* height: 100vh; */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #fcf6f5;
  position: relative;
  scroll-snap-align: start;
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

const ItemBox = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 70%;
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1290px) {
    font-size: 1.5rem;
  }
`;
const Nbbang = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (min-width: 1290px) {
    flex-wrap: none;
    gap: 0;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  margin-left: ${({ onNbbang }) => (onNbbang ? "0" : "-10%")};
  opacity: ${({ onNbbang }) => (onNbbang ? "1" : "0")};
  transition: all 2s ease-in-out;
  @media only screen and (min-width: 1290px) {
    width: 45%;
  }
`;

const ImgBox2 = styled(ImgBox)`
  margin-left: ${({ onKickick }) => (onKickick ? "0" : "-10%")};
  opacity: ${({ onKickick }) => (onKickick ? "1" : "0")};
  transition: all 1s ease-in-out;
`;
const Explanation = styled.div`
  width: 100%;
  opacity: ${({ onNbbang }) => (onNbbang ? "1" : "0")};
  transition: all 1.5s linear;
  @media only screen and (min-width: 1290px) {
    width: 45%;
  }
  color: #222222;
  a {
    color: #7b9acc;
    :hover {
      font-weight: bold;
    }
  }
  svg {
    vertical-align: middle;
  }
`;

const Explanation2 = styled(Explanation)`
  opacity: ${({ onKickick }) => (onKickick ? "1" : "0")};
`;
const Kickkick = styled(Nbbang)``;
