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
import Loading from "./Loading";
import Button from "./Button";
import Friend from "./Friend";
import Profile from "./Profile";
import Status from "./Status";
import Avatar from "./Avatar";
import Header from "./Dashboard/Header";
import Footer from "./Dashboard/Footer";
import Summary from "./Dashboard/Summary";
import Activity from "./Dashboard/Activity";
import TransactionForm from "./Transaction/TransactionForm";
import SettlementForm from "./Settlement/SettlementForm";
import GroupForm from "./Group/GroupForm";
import FriendDropdown from "./Transaction/FriendDropdown";
import GroupDropdown from "./Transaction/GroupDropdown";

const HOME = "HOME";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOADING = "LOADING";
const DASHBOARD = "DASHBOARD";
const ADD = "ADD";
const SETTLE = "SETTLE";
const FRIEND = "FRIEND";
const PROFILE = "PROFILE";
const GROUP = "GROUP";
const FRIENDSIES = "FRIENDSIES";
const GROUPSIES = "GROUPSIES";
const STATUS = "STATUS";
const SPLIT_SUCCESSFUL = "SPLIT_SUCCESSFUL";
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
          friends_list: data.friends_list,
          groups_list: data.groups_list
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
      setState(prev => ({...prev, visible: false}));
      // window.scrollTo(0,0)
      transition(HOME)
    } else if (event.target.classList.contains("fa-plus-square")) {
      setState(prev => ({...prev, visible: false}));
      transition(ADD)
    } else if (event.target.classList.contains("fa-handshake-o")) {
      setState(prev => ({...prev, visible: false}));
      transition(SETTLE)
    } else if (event.target.classList.contains("fa-user-plus")) {
      setState(prev => ({...prev, visible: false}));
      transition(FRIEND)
    } else if (event.target.classList.contains("fa-user-circle-o")) {
      setState(prev => ({...prev, visible: false}));
      transition(PROFILE)
    } else if (event.target.classList.contains("fa-home")) {
      setState(prev => ({...prev, visible: false}));
      transition(DASHBOARD)
    } else if (event.target.classList.contains("fa-group")) {
      setState(prev => ({...prev, visible: false}));
      transition(GROUP)
    } else if (event.target.classList.contains("fa-caret-up")) {
      setState(prev => ({...prev, visible: true}));
      // transition(GROUP)
    } 
      // else if (event.target.classList.contains("fa-camera")) {
      // setState(prev => ({...prev, popup: true}));
      // transition(GROUP)
      // }
  };

  const split = (splitData) => {
    transition(LOADING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/activities',
      // send user data required to register a new user in the db
      data: { 
        activity: splitData,
        share: splitData,
        group: splitData
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
        // popup: true
      }))
      
      // transition(STATUS)
    })
    .then(() => {
      transition(DASHBOARD)
    })
    .catch(error => console.log(error))
  }

  const settle = (settleData) => {
    transition(LOADING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/activities',
      // send user data required to register a new user in the db
      data: { 
        activity: settleData,
        share: settleData,
        group: settleData
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

  const notify = () => {
    transition(LOADING)

    axios({
      method: 'POST',
      url: '/api/mails'
    })
    .then(({ data }) => {

      console.log("email: ", data)

    })
    .then(()=> transition(DASHBOARD))
    .catch(error => console.log(error))

  }

  const friend = (friendData) => {
    transition(LOADING)
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
        friends_list: data.friends_list,
        message: data.message,
        popup: true
      }))
    })
    .then(()=> {
      transition(FRIEND);
      setState(prev => ({ ...prev, popup: false }));
    })
    .catch(error => console.log(error))
  }

  const register = (userData) => {
    transition(LOADING)

    if (userData.error) {
      setState(prev => ({ ...prev, popup: true, error: true, message: userData.error}));
      transition(REGISTER);
      setState(prev => ({ ...prev, popup: false, error: false }));

    } else {
      axios({
        method: 'POST',
        // url: 'http://localhost:3000/api/users',
        url: '/api/users',
        // send user data required to register a new user in the db
        data: { user: userData }
      })
      .then(({ data }) => {
        // console.log("USER ADDED: ", data)
        // store token
        localStorage.setItem("token", data.jwt)
        // do anything with user data?
        setState(prev => ({ 
          ...prev,
          user: data.user,
          history: data.history,
          summary: data.summary,
          settle: data.settle,
          message: data.message,
          popup: true
        }))
      })
      .then(() => {
        transition(DASHBOARD);
        setState(prev => ({ ...prev, popup: false }));
      })
        // update state at the front end like we did for scheduler?
        // transition to user dashboard
      .catch( ({data})  => {
        console.log(data);
  
        setState(prev => ({ 
          ...prev,
          message: data,
          popup: true
        }))
  
        transition(HOME);
        setState(prev => ({ ...prev, popup: false }));
      })
    }
  }

  const login = (userData) => {
    transition(LOADING);
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

  const logout = () => {
    localStorage.removeItem("token")
    transition(HOME);
    // transition(LOADING);
    // recieve recent activity data from the server and update state
    // transition to user dashboard
    // update state at the front end like we did for scheduler?
  }

  const group = (groupData) => {
    console.log(`group data:`, groupData);
    transition(LOADING)
    // Promise.all([
      axios({
      method: 'POST',
      // url: 'http://localhost:3000/api/users',
      url: '/api/groups',
      // send user data required to register a new user in the db
      data: { 
        group: groupData,
        membership: groupData
        }
      })
    .then(({ data }) => {
      console.log("group ADDED: ", data)

      setState(prev => ({
        ...prev,
        groups_list: data.groups_list,
        message: data.message,
        popup: true
      }))
      
    })
    .then(() => {
      transition(GROUP);
      setState(prev => ({ ...prev, popup: false }));
    })
    .catch(error => console.log(error))
  }

  const friendsies = () => {
    transition(FRIENDSIES)
  }

  const groupsies = () => {
    transition(ADD)
  }

  const update = (updateData) => {
    transition(LOADING)
    axios({
      method: 'PUT',
      // url: 'http://localhost:3000/api/users',
      url: `/api/users/${state.user.id}`,
      // send user data required to register a new user in the db
      data: { user: updateData }
    })
    .then(({ data }) => {
      console.log("USER UPDATED: ", data)
      // store token
      // localStorage.setItem("token", data.jwt)
      // do anything with user data?
      setState(prev => ({
        ...prev,
        user: data.user,
        message: data.message,
        popup: true
        // history: data.history,
        // summary: data.summary,
        // settle: data.settle
      }))
    })
    .then(() => {
      transition(PROFILE);
      setState(prev => ({ ...prev, popup: false }));
    })
      // update state at the front end like we did for scheduler?
      // transition to user dashboard
    .catch(error => console.log(error))
  }

  
  return (
    <Fragment>

      <header>
        {
          mode === DASHBOARD && <><Header 
            />
            <Status 
              message={state.message}
              popup={state.popup}
            />
          </>
        }
        {/* {mode === DASHBOARD && <Header />} */}
        {mode === ADD && <Header />}
        {mode === FRIENDSIES && <Header />}
        {mode === SETTLE && <Header />}
        {
          mode === FRIEND && <><Header 
          />
          <Status 
            message={state.message}
            popup={state.popup}
          />
          </>
        }
        {mode === PROFILE && <><Header 
          />
          <Status 
            message={state.message}
            popup={state.popup}
          />
          </>
        }
        {
          mode === GROUP && <><Header 
          />
          <Status 
            message={state.message}
            popup={state.popup}
          />
          </>
        }
        {/* <h2>{state.user && state.user.first_name}</h2> */}
        {/* {mode === REGISTER && ( images/housematewhite.png
        <div>
          <Button back onClick={(event)  => display(event)}></Button>
        )} */}
      </header>
      <main onClick={() => setState(prev => ({...prev, visible: false}))}>
        {!state.visible && window.scrollTo(0,0)}
        {/* { mode === HOME && <Loading /> } */}
        {
          mode === HOME && <><img 
              id="logo"
              src="https://i.imgur.com/5HK16TW.png"
              width={150}>
            </img>
            <Status
              message={state.message}
              popup={state.popup}
            />
            </>
        }
        {
        mode === REGISTER && <><RegisterForm
          display={display}
          onRegister={register}
        />
        <Status 
          message={state.message}
          popup={state.popup}
          error={state.error}
        />
        </>
        }
        {mode === LOGIN && <LoginForm display={display} onLogin={login} />}
        {mode === LOADING && <Loading user={state.user} message={"Loading"} />}
        {/* <section className="dashboard"> */}
        {mode === DASHBOARD && <Summary user={state.user} summary={state.summary}/>}
        {mode === DASHBOARD && <Activity user_id={state.user.id} history={state.history}/>}
        {/* {
          mode === ADD && <TransactionForm 
            user={state.user}
            onSplit={split}
            friends_list={state.friends_list}
            />
        } */}
        {
          mode === ADD && <GroupDropdown
            user={state.user}
            onSplit={split}
            friends_list={state.friends_list}
            groups_list={state.groups_list}

            // onClick={friendsies}
            />
        }
        {
          mode === FRIENDSIES && <FriendDropdown
            user={state.user}
            onSplit={split}
            groups_list={state.groups_list}
            // onClick={groupsies}
            />
        }
        {
          mode === SETTLE && <SettlementForm 
            user={state.user}
            settle={state.settle}
            onSettle={settle}
            onNotify={notify}
            />
        }
        {mode === FRIEND && <Friend user={state.user} friend={state.friend} onFriend={friend}/>}
        {
          mode === PROFILE && <><Profile 
            onLogout={logout}
            user={state.user}
            onUpdate={update}
            // onClick={event => display(event)}
            popup={state.popup}
            />
            <Avatar 
              onUpdate={update}
              user={state.user}
              popup={state.popup}
            />
            </>
        }
        {
          mode === GROUP && <GroupForm
            friends_list={state.friends_list}
            user={state.user}
            onGroup={group}
            />
        }
        { mode === STATUS && <Status /> }
        {/* </section> */}
        {/* {display()} */}
      </main>
      {/* <footer> */}
      {/* {mode === DASHBOARD && <Header message={"Saving"}/>} */}
      {mode === HOME && <div><AuthBar login onClick={(event) => display(event)}>Login</AuthBar>
          <AuthBar register onClick={(event) => display(event)}>
            Register
                </AuthBar></div>}
      {mode === DASHBOARD && <Footer home visible={state.visible} onClick={event => display(event)}/>}
      {mode === ADD && <Footer add visible={state.visible} onClick={event => display(event)}/>}
      {mode === FRIENDSIES && <Footer add visible={state.visible} onClick={event => display(event)}/>}
      {mode === SETTLE && <Footer settle visible={state.visible} onClick={event => display(event)}/>}
      {mode === FRIEND && <Footer friend visible={state.visible} onClick={event => display(event)}/>}
      {mode === PROFILE && <Footer profile visible={state.visible} onClick={event => display(event)}/>}
      {mode === GROUP && <Footer group visible={state.visible} onClick={event => display(event)}/>}

      {/* </footer> */}
    </Fragment>
  )

};

export default App;
