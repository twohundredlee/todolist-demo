import React,{useState} from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './component/App';

// function User(props) {
//   const {userName} = props;
//   return (
//     <div>
//       <div>你好,{userName}</div>
//     </div>
//   )
// }

// const element = <div>
//   <User userName="小明"/>
//   <Button text="退出登錄"/>
//   <Button text="求助"/>
// </div>;

// function Counter(props) {
//   const {count} = props
//   return (
//     <div>
//       Current count is:{count}
//     </div>
//   )
// }

// let count = 0;

// function App() {
//   const [count,setCount] = useState(0);
//   function add() {
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <Counter count={count}/>
//       <button onClick={add}>Add</button>
//     </div>
//   )
// }

const rootDOM = document.querySelector("#root")

createRoot(rootDOM).render(<App />)








// import App from './App';


