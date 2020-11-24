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
import Button from "./Button"
import Header from "./Dashboard/Header"
import Footer from "./Dashboard/Footer"
import Summary from "./Dashboard/Summary"
import Activity from "./Dashboard/Activity"
import TransactionForm from "./Transaction/TransactionForm"

const HOME = "HOME";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const SAVING = "SAVING";
const DASHBOARD = "DASHBOARD";
const ADD = "ADD";
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
    const token = localStorage.getItem("token");
    if (token) {
      axios({
        method: 'GET',
        // url: 'http://localhost:3000/api/users',
        url: 'http://localhost:3000/api/auto_login',
        // send user data required to register a new user in the db
        headers: { Authorization: `Bearer ${token}` }
      }).then(({ data }) => {
        console.log("USER FOUND: ", data)
        // store token
        // localStorage.setItem("token", data.jwt)
        // do anything with user data?
        // transition to user dashboard
        setState({ ...state, user: data })
        // update state at the front end like we did for scheduler?
        transition(DASHBOARD);
      }).catch(error => console.log(error))
    } else {
      transition(HOME);
    }
  }, [])

  function display(event) {
    // console.log("clicked")
    // check if event.target contains Login text
    if (event.target.innerHTML === 'Login') {
      // setState({ ...state, form: "login" })
      transition(LOGIN)
    } else if (event.target.innerHTML === 'Register') {
      // setState({ ...state, form: "register" })
      transition(REGISTER)
      // check if event.target contains Register text
    } else if (event.target.classList.contains("fa-angle-left")) {
      // setState({ ...state, form: "none" })
      transition(HOME)
    } else if (event.target.classList.contains("fa-plus-square")) {
      transition(ADD)
    }
  };

  const split = (splitData) => {
    transition(SAVING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/activities',
      // send user data required to register a new user in the db
      data: { 
        activity: splitData,
        share: splitData
        }
      })
    //   axios({
    //     method: 'POST',
    //     // url: 'http://localhost:3000/api/users',
    //     url: '/api/shares',
    //     // send user data required to register a new user in the db
    //     data: { share: splitData }
    //     })
    // ])
    .then((all) => {
      console.log("transaction ADDED: ", all)
      transition(DASHBOARD)
    }).catch(error => console.log(error))
  }

  const register = (userData) => {
    transition(SAVING)
    axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/users',
      // send user data required to register a new user in the db
      data: { user: userData }
    }).then(({ data }) => {
      console.log("USER ADDED: ", data)
      // store token
      localStorage.setItem("token", data.jwt)
      // do anything with user data?
      // transition to user dashboard
      setState({ ...state, user: data.user })
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
    }).then(({ data }) => {
      console.log("USER Logged In: ", data)
      // store token
      localStorage.setItem("token", data.jwt)
      // do anything with user data?
      setState({ ...state, user: data.user })

      // transition to user dashboard
      transition(DASHBOARD);

      // update state at the front end like we did for scheduler?
    }).catch(error => console.log(error))
  }


  return (
    <Fragment>

      <header className="header">
        {/* <h2>{state.data[0] && state.data[0].last_name}</h2> */}
        {mode === DASHBOARD && <Header />}
        {mode === ADD && <Header />}
        <h2>{state.user && state.user.first_name}</h2>
        {/* {mode === REGISTER && (
        <div>
          <Button back onClick={(event) => display(event)}></Button>
        </div>
        )} */}
      </header>
      <main>
        {mode === HOME && <><h1>HouseMate</h1><AuthBar login onClick={(event) => display(event)}>Login</AuthBar>
          <AuthBar register onClick={(event) => display(event)}>
            Register
                </AuthBar></>}
        {mode === REGISTER && <RegisterForm
          display={display}
          // register={register}
          onRegister={register}
        />}
        {mode === LOGIN && <LoginForm display={display} onLogin={login} />}
        {mode === SAVING && <Status message={"Saving"} />}
        <section className="dashboard">
          {mode === DASHBOARD && <Summary />}
          {mode === DASHBOARD && <Activity />}
          {mode === ADD && <TransactionForm user={state.user} onSplit={split}/>}
        </section>
        {/* {display()} */}
        {mode === DASHBOARD && <Footer onClick={event => display(event)}/>}
        {mode === ADD && <Footer onClick={event => display(event)}/>}
      </main>
      {/* {mode === DASHBOARD && <Header message={"Saving"}/>} */}

    </Fragment>
  )

};

export default App;

// let [count, setCount] = useState(0); // initialize count = 0
// let [msg, setMsg] = useState("Hey Chris!");
// {/* <Message text1={msg} sean={changeMessage}/> */}
// {/*  */}

