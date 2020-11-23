// import { useState, useEffect } from 'react'
import './App.scss';
// import Message from './component/Message'
import AuthBar from './AuthBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import axios from 'axios';
import useApplicationData from "../hooks/useApplicationData";
import { display, displayForm } from "../helpers/selectors";
import useVisualMode from "../hooks/useVisualMode";
import Status from "./Status"

const SAVING = "SAVING";
// hardcoded data
// const msg = "Hey Chris!";
// const anothermsg ="Hey Sean!";

function App() {

  // let [form, setForm] = useState(null);
  // let [data, setData] = useState([])

  const {
    state, 
    setState
    // setDay,
    // bookInterview,
    // cancelInterview
  } = useApplicationData();

  const { mode, transition, history } = useVisualMode();

  function displayForm (event) {
    // console.log("clicked")
    // check if event.target contains Login text
    if (event.target.innerHTML === 'Login')
      setState({ ...state, form: "login" })
    else if (event.target.innerHTML === 'Register')
      setState({ ...state, form: "register" })
    // check if event.target contains Register text
    else if (event.target.innerHTML === 'Back') {
      setState({ ...state, form: "none" })
    }
  };


  function display () {
    if (state.form === 'login') {
      return <LoginForm 
        displayForm={displayForm}
        onLogin={login}
        />
    } else if (state.form === 'register') {
        return <RegisterForm 
          displayForm={displayForm}
          // register={register}
          onRegister={register}
          />
    } else if (state.form === "none") {
      return <>
              <AuthBar login onClick={(event) => displayForm(event)}>Login</AuthBar>
              <AuthBar register onClick={(event) => displayForm(event)}>Register</AuthBar>
             </>
    }
  };

  const register = (userData) => {
    transition(SAVING)
    axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/users',
      // send user data required to register a new user in the db
      data: userData
    }).then(({data}) => {
      console.log("USER ADDED: ", data)
      // store token
      localStorage.setItem("token", data.jwt)
      // do anything with user data?
      // transition to user dashboard

      // update state at the front end like we did for scheduler?
    }).catch(error => console.log(error))
  }

  const login = (userData) => {
    transition(SAVING)
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/login',
      //url: '/login',
      // send user data required to register a new user in the db
      data: userData
    }).then(({data}) => {
      console.log("USER Logged In: ", data)
      // store token
      localStorage.setItem("token", data.jwt)
      // do anything with user data?
      // transition to user dashboard

      // update state at the front end like we did for scheduler?
    }).catch(error => console.log(error))
  }


  return (
    <>
    <header>
      <h1>HouseMate</h1>
      <h2>{state.data[0] && state.data[0].last_name}</h2>
    </header>
    <body>
    
    <main>
      {/* {loginForm && <LoginForm /> } */}
      {/* <AuthBar login onClick={() => displayForm()}>Login</AuthBar> */}
      {/* <AuthBar register onClick={displayForm}>Register</AuthBar> */}
      {display()}
    </main>
    </body>
    {mode === SAVING && <Status message={"Saving"}/>}
    </>
  )
  
};

export default App;

// let [count, setCount] = useState(0); // initialize count = 0
// let [msg, setMsg] = useState("Hey Chris!");
// {/* <Message text1={msg} sean={changeMessage}/> */}
// {/*  */}

