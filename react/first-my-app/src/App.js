import './App.scss';
import React from 'react';
import TitleName from './components/TitleName/TitleName';
// Counter
import {Listtitle,Listtitle2,Listtitle3} from './components/Counter/Listtitle/Listtitle';
import CounterList from './components/Counter/Counter_List/CounterList';
// TodoList
import TodoTemplate from './components/ToDoList/TodoTemplate';
import TodoHead from './components/ToDoList/TodoHead';
import TodoList from './components/ToDoList/TodoList'; 
import TodoCreate from './components/ToDoList/TodoCreate';
import { TodoProvider } from './components/ToDoList/TodoContext';
import { createGlobalStyle } from 'styled-components';
import { MdBlock } from 'react-icons/md';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <div className="App">
      <TitleName name = "No.1" />
      <Listtitle name = "이게 Props 니?" color = "#ff0"/>
      <CounterList />
      <Listtitle2 />
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
      <Listtitle3 />
    </div>
      
  );
}

export default App;
