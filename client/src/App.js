import { useState, useEffect } from 'react'
import './App.css';
// import Message from './component/Message'
import AuthBar from './components/AuthBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

// hardcoded data
// const msg = "Hey Chris!";
// const anothermsg ="Hey Sean!";

function App() {

  let [loginForm, setLoginForm] = useState(null); 

  const displayForm = () => {
    console.log("clicked")
    setLoginForm("anything")
    // return (
        {/* <LoginForm/> */}
    // )
  };

  const display = () => {
    if (loginForm) {
      return <LoginForm />
    } else {
      return <>
              <AuthBar login onClick={() => displayForm()}>Login</AuthBar>
              <AuthBar register onClick={displayForm}>Register</AuthBar>
             </>
    }
    
  }


  return (
    <div>
    <header>
      <h1>HouseMate</h1>
    </header>
    <body>
    
    <main>
      {/* {loginForm && <LoginForm /> } */}
      {/* <AuthBar login onClick={() => displayForm()}>Login</AuthBar> */}
      {/* <AuthBar register onClick={displayForm}>Register</AuthBar> */}
      {display()}
    </main>
    </body>

    </div>
  )

};

export default App;

// let [count, setCount] = useState(0); // initialize count = 0
// let [msg, setMsg] = useState("Hey Chris!");
// {/* <Message text1={msg} sean={changeMessage}/> */}
// {/*  */}

