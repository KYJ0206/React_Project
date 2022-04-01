import './App.scss';
import React from 'react';
import TitleName from './components/TitleName/TitleName';
// Counter
import {Listtitle,Listtitle2,Listtitle3} from './components/Counter/Listtitle/Listtitle';
import CounterList from './components/Counter/Counter_List/CounterList';
// TodoList
import Home from "./pages/Home"
import { MdCalculate } from 'react-icons/md';
//Calculator
import Calculator from './components/Calculator/Calculator';



function App() {
  return (
    <div className="App">
      <TitleName name = "No.1" />
      <Listtitle name = "[이게 Props 니?]" color = "#ff0"/>
      <CounterList />
      <Listtitle2 />
      <Home />
      <Listtitle3 />
      <Calculator />
    </div>
  );
}

export default App;
