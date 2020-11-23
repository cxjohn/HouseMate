import { Fragment, useEffect } from 'react';
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
import Header from "./Dashboard/Header"

const HOME = "HOME";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const SAVING = "SAVING";
const DASHBOARD = "DASHBOARD";
// hardcoded data

function App() {

  // let [form, setForm] = useState(null);
  // let [data, setData] = useState([])
  
  const {
    state, 
    setState
  } = useApplicationData();
  
  
  const { mode, transition, history } = useVisualMode(
    // localStorage.getItem("token") ? DASHBOARD : HOME
    );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      transition(DASHBOARD);
    } else {
      transition(HOME);
    }
  },[])
  
  function displayForm (event) {
    // console.log("clicked")
    // check if event.target contains Login text
    if (event.target.innerHTML === 'Login') {
      // setState({ ...state, form: "login" })
      transition(LOGIN)
    } else if (event.target.innerHTML === 'Register') {
      // setState({ ...state, form: "register" })
      transition(REGISTER)
      // check if event.target contains Register text
    } else if (event.target.innerHTML === 'Back') {
      // setState({ ...state, form: "none" })
      transition(HOME)
    }
  };
  
  
  function display () {
    
    // transition(HOME);
    // if (state.form === 'login') {
    // if (mode === LOGIN) {
    //     return <LoginForm 
    //     displayForm={displayForm}
    //     onLogin={login}
    //     />
    // } else if (mode === REGISTER) {
    //     return <RegisterForm 
    //       displayForm={displayForm}
    //       // register={register}
    //       onRegister={register}
    //       />
    // } else if (mode === HOME) {
    //   return <>
    //           <AuthBar login onClick={(event) => displayForm(event)}>Login</AuthBar>
    //           <AuthBar register onClick={(event) => displayForm(event)}>Register</AuthBar>
    //          </>
    // } else if (mode === SAVING) {
    //   return <Status message={"Saving"}/>
    // } else if (mode === DASHBOARD) {
    //   return <Header />
    // }  

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
    transition(SAVING);
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
      transition(DASHBOARD);

      // update state at the front end like we did for scheduler?
    }).catch(error => console.log(error))
  }


  return (
    <Fragment>

    <header>
      <h1>HouseMate</h1>
      <h2>{state.data[0] && state.data[0].last_name}</h2>
    </header>
    <body>
    <main>
      {mode === HOME && <><AuthBar login onClick={(event) => displayForm(event)}>Login</AuthBar>
                <AuthBar register onClick={(event) => displayForm(event)}>
                  Register
                </AuthBar></>}
      {mode === REGISTER && <RegisterForm 
          displayForm={displayForm}
          // register={register}
          onRegister={register}
          />}
      {mode === LOGIN && <LoginForm displayForm={displayForm} onLogin={login}/>}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DASHBOARD && <Header />}

      {/* {display()} */}
    </main>
    </body>
    {/* {mode === DASHBOARD && <Header message={"Saving"}/>} */}

    </Fragment>
  )
  
};

export default App;

// let [count, setCount] = useState(0); // initialize count = 0
// let [msg, setMsg] = useState("Hey Chris!");
// {/* <Message text1={msg} sean={changeMessage}/> */}
// {/*  */}

