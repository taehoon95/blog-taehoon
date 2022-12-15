# 간단한 리액트 연습


# 개발 참고

## 리액트에서 레이아웃 만드는 3가지 방법
1. html에 class 넣을 땐 className
	- JSX는 일종의 자바스크립트라서 자바스크립트에서 사용하는 예약어인 class라는 키워드를  막 사용하면 안된다.
2. 변수를 html에 꽂아넣을 때는 {중괄호} (데이터바인딩)
3. html에 style 속성 넣고싶으면 
```js
<div style={{color: 'blue'}}>파란색</div>
```

## *동적인 UI 만드는 step
1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

## *컴포넌트 만드는법
1. function 만들고
2. return() 안에 html담기
3. <함수명></함수명> 쓰기
4. 참고 
	- <></> 
	- <함수명></함수명> , <Modal/> 가능

## *부모 -> 자식 state 전송하는 법
1. <자식컴포넌트 작명={state이름}>
2. props 파라미터 등록 후 props.작명 사용
3. props 전송은 부모 -> 자식만 가능
4. 컴포넌트 많아지면 props 쓰는게 귀찮아짐
5. props로 일반 문자도 전송가능

## 동작원리 및 팁

### 어떤걸 컴포넌트로 만들면 좋은가
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주변경되는 것들

### 컴포넌트의 단점
1. state 가져다 쓸 때 문제생김


### input 태그
- input에 뭔가 입력시 코드실행하고 싶으면 onChange / onInput

### 왜 <span> 눌러도 모달창 뜸?
- 클릭이벤트는 상위 html로 퍼짐(이벤트 버블링)
	- 이벤트버블링 막고싶으면: e.stopPropagation(); 

### State변경함수는 늦게처리됨 
- 비동기 처리되기 때문에 console.log보다 나중에 실행됨(리액트 만든사람이 이렇게 정함)

### State 변경함수 특징
1. 기존 State ==  신규 State 인 경우 변경 안해준다.

###  array/object 특징
1. array/object 담은 변수엔 화살표만 저장됨

## 리액트 
1. 리액트는 array안에 html 담아놔도 잘보여준다.
