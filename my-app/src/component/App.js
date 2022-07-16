import React, { useState } from 'react';
import AddTask from './AddTask'
import TodoList from './TodoList'

function App() {
  const [list, setList] = useState([]);
  function Add(value) {
    const newArray = [...list, value];
    setList(newArray);
  }
  return (
    <div>
      <h1>My To Do List</h1>
      <AddTask Add={Add}/>
      <TodoList list={list}/>
    </div>
  );
}

export default App;



// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
          // <h1>My To Do List</h1>
//           <input type="text" id="event" name="event"/>
//           <Button text="Add"/>
//           <ul id="list"></ul>
//         </header>
//       </div>
//     );
//   }

//   export default App;