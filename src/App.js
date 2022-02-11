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
    // var newArray = 글 제목에 있던 0번째 데이터를 여자코트로 변경
    // var newArray = title; // 값 공유,
    var newArray = [...title]; // 값 공유 X, deep copy
    newArray[0] = "리액트 공부하기";
    titleChange(newArray);

    // 하드코딩 방법
    // titleChange(["리액트 공부하기", "맛집 탐방", "여의도 구경하고 호캉스"]);
  }

  let [modal, modalShow] = useState(false);

  var array = [1, 2, 3];

  var newarray = array.map(function (a) {
    return a * 2;
  });

  console.log(newarray);

  return (
    <div className="App">
      <div className="nav-black">
        <div>개발 Blog</div>
      </div>
      <button onClick={blogChange}>버튼 </button>
      {title.map((i, a) => {
        return (
          <div className="list">
            <h3>
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
        버튼
      </button>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
