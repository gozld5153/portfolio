import React, { useState } from "react";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";

export default function Translate() {
  const [value, setValue] = useState("");
  //번역
  const handleTranslation = (e) => {
    setValue(e.target.value);
  };

  const fetchingTranslation = (e) => {
    let url = `https://dapi.kakao.com/v2/translation/translate?src_lang=kr&target_lang=en&query=${value}`;
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
  );
}

const VarBox = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  float: right;
  z-index: 500;
  opacity: 0.5;

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
