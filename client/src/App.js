import { useState, useEffect } from 'react'
import './App.scss';
// import Message from './component/Message'
import AuthBar from './components/AuthBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';

// hardcoded data
// const msg = "Hey Chris!";
// const anothermsg ="Hey Sean!";

function App() {

  let [form, setForm] = useState(null);
  let [data, setData] = useState([])

  useEffect(() => {

    axios({
      method: 'GET',
      url: '/api/users',
    }).then(({data}) => {
      console.log('data: ', data[0])
      setData(data)
    }).catch(error => console.log(error))

  }, [])

  const register = (userData) => {
    axios({
      method: 'POST',
      url: '/api/users',
      // send user data required to register a new user in the db
      data: userData
    }).then(() => {
      // update state at the front end like we did for scheduler?
      // console.log('data: ', data[0])
      // setData(data)
    }).catch(error => console.log(error))
  }

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
      return <LoginForm displayForm={displayForm} />
    } else if (form === 'register') {
        return <RegisterForm displayForm={displayForm} register={register}/>
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
      <h2>{data[0] && data[0].last_name}</h2>
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

