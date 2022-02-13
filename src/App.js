//* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  // let title = "오늘의 개발공부";
  // useState('남자코트 추천')

  let [title, titleChange] = useState([
    "오늘의 공부",
    "맛집 탐방",
    "여의도 구경하고 호캉스",
  ]);
  let [likePlus, likePlusChange] = useState([0, 0, 0]);
  function blogChange() {
    var newArray = [...title]; // 값 공유 X, deep copy
    newArray[0] = "리액트 공부하기";
    titleChange(newArray);
  }

  let [modal, modalShow] = useState(false);

  let [clickTitle, clickTitleChange] = useState(0);

  let [inputData, inputDataChange] = useState(""); // 저장공간

  return (
    <div className="App">
      <div className="nav-black">
        <div>개발 Blog</div>
      </div>
      <button onClick={blogChange}>버튼 </button>
      {title.map((i, a) => {
        return (
          <div className="list" key={a}>
            <h3
              onClick={() => {
                clickTitleChange(a);
              }}
            >
              {i}
              <span
                onClick={() => {
                  likePlusChange(a + 1);
                }}
              >
                👍
              </span>
              {likePlus}
            </h3>
            <p>2월 13일 발행</p>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          modalShow((modal = !modal));
        }}
      >
        열고닫기
      </button>

      {modal === true ? <Modal title={title} clickTitle={clickTitle} /> : null}

      {inputData}
      <input
        onChange={(e) => {
          inputDataChange(e.target.value);
        }}
      />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.clickTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
