// import React, {useState} from 'react';
import {useState} from 'react';
import './App.css';

const heavyWork = () => {
  console.log('무거운 작업');
  return ['조지현', '김주은'];
}
 /* return문 안에서는 하나의 div만 있어야함. */
function App() {
  const [timer, setTimer] = useState(0);
  const [names, setNames] = useState(() => {return heavyWork()})
  const [input, setInput] = useState('');

  const onClickFn = () => {
    let newTime;
    if(timer >= 12){
      newTime = 1;
    }else{
      newTime = timer + 1;
    }
    setTimer(newTime);
  }
  console.log('렌더링!!');

  const inputChange = (e) => {
    setInput(e.target.value);
  }
  console.log(input);

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state', prevState);
      return [input, ...prevState]
    });
    setInput('')
  } //데이터 업로드

  // ---------------2----------
  // const [username, setUsername] = useState('');
  // const [userpass, setPass] = useState('');
  // const onSubmit= (e) => {
  //   e.preventDefault();
  //   console.log(username, userpass)
  //   setUsername('');
  //   setPass('');
  // }
  // console.log('렌더링')

  // ---------------1-----------------
  // const [text, setText] = useState('kim');

  // const updateText = () => {
  //   setText('jueun');
  //   console.log(text);
  // };

  // const onsubmit = () => {
  //   alert('submit 입니다.')
  // }

  // const onKeyUp = (event) => {
  //   console.log(event)
  //   if (event.keyCode===13){
  //     onsubmit();
  //   }
  // }
  return (
    <div className="App"> 
      <span>현재 시각: {timer}시</span>
      <button onClick={onClickFn}>Update</button>
      <br />
      <hr />
      <input type='text' value={input} onChange={inputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx)=> {
        return <p key={idx}>{name}</p>
      })}
        {/*-----1------- 
        <input onKeyUp={onKeyUp}/>
        <button onClick={onsubmit}>submit</button>
        <br />
        <br />
        <span>{text}</span>
        <button onClick={updateText}>update</button> */}

        {/* -------2--------
        <form onSubmit={onSubmit}>
          <input placeholder='Username' value = {username} onChange= {(e) => setUsername(e.target.value)}/>
          <input placeholder='Password' value = {userpass} onChange= {(e) => setPass(e.target.value)}/>
          <button type ='submit'>submit</button>
        </form> */}
    </div>
  );
}

export default App;
