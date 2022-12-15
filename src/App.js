/* eslint-disable */


import { useState } from 'react';
import './App.css';

function App() {

  let [title,setTitle] = useState(["남자 코트", "여자 코트", "반팔티"]);
  let [text, setText] = useState(["text1", "text2", "text3"]);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function changeTitle(){
      let copy = [...title];
      copy[0] = '하하'; 
      setTitle(copy);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog-Taehoon</h4>
      </div>      
      <button onClick={changeTitle}>글수정</button>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순 정렬</button>
      {
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setIdx(i);
                setModal(!modal)
              }}>{ title[i] }
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}>👍</span> { like[i] }
                <button onClick={(e) => {
                  e.stopPropagation();
                  let copy = title.filter((v,idx)=>{
                    return i != idx
                  })
                  setTitle(copy);
                }}>삭제</button>
              </h4>
              
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button onClick={()=>{
        let res = [...title];
        res.unshift(입력값);
        setTitle(res);
      }}>버튼</button>

      {
        modal ? <Modal color={'skyblue'} title={title} changeTitle={changeTitle} idx={idx}/> : null
      }
    </div>
  );
}

// 다양한 색상의 모달창이 필요하다.
function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  )
}
export default App;
