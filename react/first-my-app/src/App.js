import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <h1>안녕하세요 React 입니다.</h1>
  //     <h1>이 태그는 병렬.</h1>
  //   </div>
  // );
  return React.createElement("div",{className:'App'},"안녕하세요 리엑트입니다.")
}

export default App;
