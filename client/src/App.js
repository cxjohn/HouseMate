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

  let [form, setForm] = useState(null);

  // on clicking register button we want to display register form
  // on clicking login button we want to display login form
  const displayForm = (event) => {
    // console.log("clicked")
    // check if event.target contains Login text
    if (event.target.innerHTML === 'Login')
      setForm("login")
    else if (event.target.innerHTML === 'Register')
      setForm("register")
    // check if event.target contains Register text
    else if (event.target.innerHTML === 'Back') {
      setForm(null)
    }
  };

  const display = () => {
    if (form === 'login') {
      return <LoginForm displayForm={displayForm}/>
    } else if (form === 'register') {
      return <RegisterForm displayForm={displayForm}/>
    } else {
      return <>
              <AuthBar login onClick={(event) => displayForm(event)}>Login</AuthBar>
              <AuthBar register onClick={(event) => displayForm(event)}>Register</AuthBar>
             </>
    }
    
  }


  return (
    <>
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

    </>
  )

};

export default App;

// let [count, setCount] = useState(0); // initialize count = 0
// let [msg, setMsg] = useState("Hey Chris!");
// {/* <Message text1={msg} sean={changeMessage}/> */}
// {/*  */}

