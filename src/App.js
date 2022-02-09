import { useState, useEffect } from "react";
import styled from "styled-components";
import sakura from "./img/sakura.gif";

function App() {
  const [toggle, setToggle] = useState(false);
  const [introduce, setIntroduce] = useState("");
  const [repeat, setRepeat] = useState(false);

  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  //커서 깜빡임 효과
  useEffect(() => {
    const timeSet = setTimeout(function () {
      setToggle(!toggle);
    }, 500);
    return () => clearTimeout(timeSet);
  }, [toggle]);

  useEffect(() => {
    const testArr = [];
    const testStr = "안녕하세요 풋내기 프론트엔드 개발자 황민환입니다.";
    let strArr = testStr.split("");
    let typingFnc = (str) => {
      if (strArr.length <= 0) return;
      testArr.push(str.shift());
      setTimeout(() => typingFnc(str), 200);
      setIntroduce(testArr.join(""));
    };

    let start = setTimeout(() => typingFnc(strArr), 500);

    //20초 후에 지우기
    let delIntro = () => {
      if (testArr.length <= 0) {
        setTimeout(() => setRepeat(!repeat), 500);
        return;
      }
      testArr.pop();
      setTimeout(() => delIntro(testArr), 20);
      setIntroduce(testArr.join(""));
    };
    let finish = setTimeout(() => delIntro(), 20 * 1000);
    return () => {
      clearTimeout(start);
      clearTimeout(finish);
    };
  }, [repeat]);

  return (
    <Container>
      <ProgressBar value={scrollTop} max={scrollHeight - clientHeight} />
      <Landing>
        <TopContainer>
          <FlexBox>
            <div>{introduce}</div>
            <CursorBox>
              <Cursor active={toggle} />
            </CursorBox>
          </FlexBox>
        </TopContainer>
        <SakuraBg src={sakura} alt="" />
      </Landing>
    </Container>
  );
}

export default App;
const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Landing = styled.div`
  position: relative;
  height: 100vh;
`;
const TopContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: white;
  z-index: 400;
`;

const FlexBox = styled.div`
  display: flex;
  font-size: 52px;
  @media only screen and (max-width: 980px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 530px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

const CursorBox = styled.div`
  width: 1px;
  height: 52px;
  margin-left: 4px;
  @media only screen and (max-width: 980px) {
    height: 32px;
  }
  @media only screen and (max-width: 530px) {
    height: 28px;
  }
  @media only screen and (max-width: 425px) {
    height: 16px;
    margin-left: 2px;
  }
`;

const Cursor = styled.div`
  width: 4px;
  height: 100%;
  border: 2px solid white;
  display: ${({ active }) => (active ? "none" : "block")};
`;

const ProgressBar = styled.progress`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;
  background-color: green;
  ::-webkit-progress-bar {
    background-color: white;
  }
  z-index: 100;
`;

const SakuraBg = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 10;
`;
