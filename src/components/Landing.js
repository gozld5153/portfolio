import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";

export default function Landing() {
  const [toggle, setToggle] = useState(false);
  const [introduce, setIntroduce] = useState("");
  const [repeat, setRepeat] = useState(false);
  const [value, setValue] = useState("");

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

    let start = setTimeout(() => typingFnc(strArr), 1500);

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
      clearTimeout(finish);
      clearTimeout(start);
    };
  }, [repeat]);

  //번역
  const handleTranslation = (e) => {
    setValue(e.target.value);
  };

  const fetchingTranslation = (e) => {
    let url = `/v2/translation/translate?src_lang=kr&target_lang=en&query=${value}`;
    if (e.code === "Enter" || e.type === "click")
      fetch(url, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setValue(res.translated_text[0][0]))
        .catch((err) => console.log(err.response));
  };

  return (
    <>
      <ProgressBar value={scrollTop} max={scrollHeight - clientHeight} />
      <Container>
        <TopContainer>
          <FlexBox>
            <div>{introduce}</div>
            <CursorBox>
              <Cursor active={toggle} />
            </CursorBox>
          </FlexBox>
        </TopContainer>
        {/* 배경화면 벚꽃 흩날리기! */}
        {/* <SakuraBg src={sakura} alt="" /> */}
        <VarBox>
          <input
            type="text"
            placeholder="변수명 번역기"
            onChange={handleTranslation}
            onKeyPress={fetchingTranslation}
            value={value}
          />
          <div onClick={fetchingTranslation}>
            <FaSistrix />
          </div>
        </VarBox>
      </Container>
    </>
  );
}

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

const Container = styled.div`
  position: relative;
  height: 100vh;
  /* 랜딩박스 경계선 */
  border: 2px solid green;
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
  font-family: "East Sea Dokdo", cursive;

  /* 배경이 없을땐 주석처리! */
  /* color: white;*/
  z-index: 400;
`;

const VarBox = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;

  input {
    height: 2.5rem;
    padding-left: 0.5rem;
    font-weight: 500;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid gray;
    :focus {
      outline: none;
      border-bottom: 3px solid black;
    }
    @media only screen and (max-width: 530px) {
      font-size: 1.5rem;
      width: 12rem;
    }
  }
  div {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    font-size: 1.5rem;
  }
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
  border: 2px solid black;
  display: ${({ active }) => (active ? "none" : "block")};
`;

// const SakuraBg = styled.img`
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   z-index: 10;
// `;
