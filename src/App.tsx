import { useState } from 'react';
import './App.css';
// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/*<Message/>*/}
        <div><ListGroup/></div>
       <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          </div>
        </>
  )
}

export default App
