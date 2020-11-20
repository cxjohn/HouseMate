import { useState, useEffect } from 'react'
import './App.css';
import Message from './component/Message'

// hardcoded data
// const msg = "Hey Chris!";
// const anothermsg ="Hey Sean!";

function App() {
  let [msg, setMsg] = useState("Hey Chris!");
  let [count, setCount] = useState(0); // initialize count = 0

  useEffect(() => {
    setCount(prev => prev + 1)
    console.log("running effect")
  }, [msg]); // has dependency on state of msg
  
  function changeMessage() {
    if (count % 2 !== 0) {
      setMsg("Hey Sean!") 
      // setCount(prev => prev + 1
    } else { 
      setMsg("Hey Chris!") 
      // setCount(prev => prev + 1)
    }

  };

  return (
    <div>
    <h1>HouseMate</h1>
    <Message text1={msg} sean={changeMessage}/>
    </div>
)
};

export default App;
