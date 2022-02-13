# Getting Started with Create React App

## 새프로젝트 생성하기

1. node.js 설치하기 (최신버전 설치 권장 / 17버전 다운로드 X)

2. VS Code에서 새 프로젝트 생성하기

```
npx create-react app blog(프로젝트명)
```

- npx : 라이브러리 설치 명령어
- npm 툴 이용이 가능해짐
- type 오류 발생: <br> nvm로 node.js 설치했을 경우 나타남  
  (nvm에 없는 버전을 홈페이지에서 다운받아 설치했을 경우 나타나는 오류)  
   nvm list 확인해보기 (node.js 버전)<br>
  node.js 재설치 진행하면 해결됨

## React Project 기본

- node_module: 라이브러리 모은 폴더
- public 폴더: static 파일 보관함
- App.js: 메인페이지에 들어갈 HTML 짜는 파일
- src: 소스 코드 보관함
- package.json: 설치한 라이브러리 목록(패키지이름, 버전)
- npm start: 프로젝트 미리보기
- class 사용할 때는 className으로 사용하기  
  Eg. <div className=""></div>
- warning 제거 방법

```js
/* eslint-disable */
```

## React 데이터 바인딩

- React의 가장 큰 장점은 데이터 바인딩이 쉬움
- 데이터 바인딩(데이터를 HTML에 꽂아 넣음)
- 중괄호를 사용  
  Eg. { 변수명, 함수 }
- src, id, href 등에도 사용 가능

```js
// 기존의 자바스크립트의 경우
document.getElementByID().innerHTML = ""

// React
// 데이터 바인딩 - 클래스이름
<div className={변수명}></div>

// 데이터 바인딩 - 사진
import 파일명 from './주소'

<img src={파일명} />

// 데이터 바인딩 - 스타일 속성
<div style="스타일(오브젝트 자료형으로 만든 스타일)"></div>

let posts = { color: 'blue', fontSize: '30px' };
<div style={posts}></div>
```

## State (데이터 관리)

- 변수 대신 쓰는 데이터 저장공간
- useState()를 이용하여 만들어야함
- 문자, 숫자, array, object 다 저장 가능
- let [state, state 변경 함수]
- 자주 바뀌는 중요한 데이터는 state로 생성

> state에 데이터를 저장해 놓는 이유

- 웹이 App처럼 동작하게 만들게 하기 위해
- state는 변경되면 HTML이 자동으로 재렌더링되기 때문에

- 상단에 useState를 가져오기

```js
import React, { useState } from "react";
```

### State 변경하기

그냥 state는 변경이 되지 않기 때문에, state 변경 함수를 변경해야함

- 변경하는 방법

1. 기존 state 카피본 생성
2. 카피본에 수정사항 반영
3. 변경함수()에 집어넣기
   \*\* state는 직접 건드릴 수 없기 때문에 deep copy를 해서 변경해야함

- 예시

```js
// 하드코딩 방식
function 함수명() {
  state변경함수(["내용1", "내용2", "내용3"]);
}
// deep copy
function 함수명() {
  var 새로운 배열 = [...title];
  새로운 배열[index] = "변경할 내용";
  state변경함수(새로운 배열);
}
```

## state 가져와서 사용하기

함수 안에서 적용되지 않은 변수는 꽂아쓸 수 없음  
따라서 부모 컴포넌트가 가진 state를 쓸 수 있게 전송해줘야 자식 컴포넌트는 부모 컴포넌트가 가진 state를 사용가능함

### 사용 방법

1. 자식 컴포넌트에 작성하기  
   <자식 컴포넌트 ?? = { 사용할 state명 }>
2. 자식 컴포넌트에서 props 파라미터 입력 후 사용  
   props <- 부모에서 전달 받은 props는 여기 다 들어있음

```js
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

## Component

component를 사용하는 이유 : 관리가 쉬워지기 때문에

### Component 만드는 법

1. 함수 만들고 이름 짓기
2. 축약을 원하는 HTML을 작성
3. 원하는 곳에서 <함수명 />으로 사용하기

### 유의사항

- 이름은 대괄호
- return() 안에 있는건 태그 하나로 묶어야 함
- return() 내부를 묶을 때 의미없는 <div> 쓰기 싫으면 <></>로 묶어도 됨
- Component로 만들면 좋은 것들
  - 반복출형하는 HTML 덩어리들
  - 자주 변경되는 HTML UI들
  - 다른 페이지를 만들 때도 컴포넌트로 만듦
- 단점
  - state 쓸 때 복잡해짐
    (상위 component에서 만든 state 사용하려면 props 문법을 이용해야함)

```js
<Modal />;

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
    </div>
  );
}
```

## 클릭 이벤트

- onClick = { 클릭될 때 실행할 함수}
- 사용 가능한 함수: function(){} or () => {}

- 예전 문법

```js
addEventListner("click", {});
```

## 조건문 (삼항연산자)

{ } 중괄호 안에 if문 사용 불가능, 삼항연산자 if문을 사용해야함

### 문법

```js
// if문
if(조건식){ 실행할 코드 } else { 실행할 코드 }

// 삼항연산자
조건식 ? 참일 때의 코드 : 거짓일 때의 코드
```

## React에서 클릭시 등장하는 UI 만드는 법

1. UI가 보임/ 안보임 정보를 state로 저장해둠
2. 그리고 if문을 이용해 state가 true일 때 UI를 보여줌

```js
let [modal, modalShow] = useState(false);

<button
  onClick={() => {
    modalShow((modal = true));
  }}
>
  버튼
</button>;

{
  modal === true ? <Modal /> : null;
}
```

- 버튼을 클릭했을 때 UI가 등장하고/ 사라지게 하는 방법  
  변경함수에 <b>!</b> 붙여서 상태가 계속 반대로 변하게 만들기  
  Eg. true -> false -> true로 변경

```js
<button
  onClick={() => {
    modalShow((modal = !modal));
  }}
>
  버튼
</button>
```

## 반복시키는 함수 map()

- {} 안에는 for을 사용할 수 없어서, array에 붙일 수 있는 함수인 map 함수를 사용함
- array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 사용함

map 함수 쓰는 법
{반복할데이터.map(()=>{return<HTML>})}

각각 다른 데이터 넣기
파라미터 사용하기

```js
{
  title.map((i) => {
    return (
      <div className="list">
        <h3>
          {i}
          <span
            onClick={() => {
              likePlusChange(likePlus + 1);
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
  });
}
```

- 일반적인 반복문 (for 반복문)
  보통 함수 안에서 사용 함  
  array에 HTML 추가하는 방식 그리고 array 를 return 으로 뱉어냄

```js
function 반복UI() {
  let 어레이 = [];
  for (let i = 0; i < 3; i++) {
    어레이.push(<div>HTML 추가</div>);
  }
  return 어레이;
}

{
  반복UI();
}
```

UI 만드는 법

1. UI와 관련된 중요 정보들을 state로 저장해놓고
2. state에 따라서 UI가 수정되게 만들기
