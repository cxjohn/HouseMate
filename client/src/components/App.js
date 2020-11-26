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
import Friend from "./Friend"
import Header from "./Dashboard/Header"
import Footer from "./Dashboard/Footer"
import Summary from "./Dashboard/Summary"
import Activity from "./Dashboard/Activity"
import TransactionForm from "./Transaction/TransactionForm"
import SettlementForm from "./Settlement/SettlementForm"

const HOME = "HOME";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const SAVING = "SAVING";
const DASHBOARD = "DASHBOARD";
const ADD = "ADD";
const SETTLE = "SETTLE";
const FRIEND = "FRIEND";
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
        setState(prev => ({ 
          ...prev,
          user: data.user,
          history: data.history,
          summary: data.summary,
          settle: data.settle,
          friends_list: data.friends_list
        }))
        // update state at the front end like we did for scheduler?
        
      })
      .then(() => transition(DASHBOARD))
      .catch(error => console.log(error))
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
    } else if (event.target.classList.contains("fa-handshake-o")) {
      transition(SETTLE)
    } else if (event.target.classList.contains("fa-user-plus")) {
      transition(FRIEND)
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
    .then(({ data }) => {
      console.log("transaction ADDED: ", data)

      setState(prev => ({
        ...prev,
        // user: data.user,
        history: data.history,
        summary: data.summary,
        settle: data.settle
      }))
      
    })
    .then(() => transition(DASHBOARD))
    .catch(error => console.log(error))
  }

  const settle = (settleData) => {
    transition(SAVING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/activities',
      // send user data required to register a new user in the db
      data: { 
        activity: settleData,
        share: settleData
        }
      })
    .then(({ data }) => {
      console.log("settlement ADDED: ", data)

      setState(prev => ({ 
        ...prev,
        // user: data.user,
        history: data.history,
        summary: data.summary,
        settle: data.settle
      }))

    })
    .then(()=> transition(DASHBOARD))
    .catch(error => console.log(error))
  }

  const friend = (friendData) => {
    transition(SAVING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/friends',
      // send user data required to register a new user in the db
      data: { 
        friend: friendData
        }
      })
    .then(({ data }) => {
      console.log("friend ADDED: ", data)

      setState(prev => ({ 
        ...prev,
        friends_list: data.friends_list
      }))
    })
    .then(()=> transition(DASHBOARD))
    .catch(error => console.log(error))
  }

  const register = (userData) => {
    transition(SAVING)
    axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/users',
      // send user data required to register a new user in the db
      data: { user: userData }
    })
    .then(({ data }) => {
      console.log("USER ADDED: ", data)
      // store token
      localStorage.setItem("token", data.jwt)
      // do anything with user data?
      setState(prev => ({ 
        ...prev,
        user: data.user,
        history: data.history,
        summary: data.summary,
        settle: data.settle
      }))
    })
    .then(() => transition(DASHBOARD))
      // update state at the front end like we did for scheduler?
      // transition to user dashboard
    .catch(error => console.log(error))
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
      setState(prev => ({ 
        ...prev,
        user: data.user,
        history: data.history,
        summary: data.summary,
        settle: data.settle,
        friends_list: data.friends_list
      }))

      // recieve recent activity data from the server and update state
      // transition to user dashboard
      // update state at the front end like we did for scheduler?
    })
    .then(() => transition(DASHBOARD))
    .catch(error => console.log(error))
  }


  return (
    <Fragment>

      <header className="dashboard_header">
        {/* <h2>{state.data[0] && state.data[0].last_name}</h2> */}
        {mode === DASHBOARD && <Header />}
        {mode === ADD && <Header />}
        {mode === SETTLE && <Header />}
        {mode === FRIEND && <Header />}
        {/* <h2>{state.user && state.user.first_name}</h2> */}
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
          {mode === DASHBOARD && <Summary summary={state.summary}/>}
          {mode === DASHBOARD && <Activity user_id={state.user.id} history={state.history}/>}
          {
            mode === ADD && <TransactionForm 
              user={state.user} 
              onSplit={split}
              friends_list={state.friends_list}
              />
          }
          {mode === SETTLE && <SettlementForm user={state.user} settle={state.settle} onSettle={settle}/>}
          {mode === FRIEND && <Friend user={state.user} friend={state.friend} onFriend={friend}/>}
        </section>
        {/* {display()} */}
        {mode === DASHBOARD && <Footer onClick={event => display(event)}/>}
        {mode === ADD && <Footer onClick={event => display(event)}/>}
        {mode === SETTLE && <Footer onClick={event => display(event)}/>}
        {mode === FRIEND && <Footer onClick={event => display(event)}/>}
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

