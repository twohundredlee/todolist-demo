/**
 * 應用程式的入口
 */

import React, { useState } from 'react';
import AddTask from './AddTask'
import TodoList from './TodoList'

function App() {
  const [list, setList] = useState([]);
  function handleAdd(value) {
    const newArray = [...list, value];
    setList(newArray);
  }
  return (
    <div>
      <h1>My To Do List</h1>
      <AddTask onAdd={handleAdd}/>
      <TodoList list={list}/>
    </div>
  );
}

export default App;

