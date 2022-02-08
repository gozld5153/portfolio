import { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  const [toggle, setToggle] = useState(false);
  const [introduce, setIntroduce] = useState("");
  const [repeat, setRepeat] = useState(false);

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

    typingFnc(strArr);

    //10초 후에 지우기
    let delIntro = (arr) => {
      console.log("hi");
      if (testArr.length <= 0) {
        setTimeout(() => setRepeat(!repeat), 500);
        return;
      }
      testArr.pop();
      setTimeout(() => delIntro(testArr), 20);
      setIntroduce(testArr.join(""));
    };
    setTimeout(() => delIntro(testArr), 20 * 1000);
  }, [repeat]);

  return (
    <Container>
      <FlexBox>
        <div>{introduce}</div>
        <CursorBox>
          <Cursor active={toggle} />
        </CursorBox>
      </FlexBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  padding: 2rem;
  line-height: 24px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const CursorBox = styled.div`
  width: 1px;
  height: 24px;
  margin-left: 1px;
`;

const Cursor = styled.div`
  width: 2px;
  height: 100%;
  border: 1px solid black;
  display: ${({ active }) => (active ? "none" : "inline-block")};
`;
