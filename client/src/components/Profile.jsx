import { useState } from 'react';
import Button from './Button';
import './Profile.scss'

function Profile(props) {

  const [formState, setFormState] = useState({
    first_name: props.user.first_name || "",
    last_name: props.user.last_name || "",
    email: props.user.email || ""
  })

  function login() {

    const userData = {
      email: formState.email,
      password_digest: formState.password
    }
    return props.onLogin(userData);
  }

  function logout() {

    return props.onLogout();
  }

  function update() {
    console.log("update button clicked!")

    const updateData = {
      user_id: props.user.id,
      first_name: formState.first_name,
      last_name: formState.last_name,
      email: formState.email      
    }

    return props.onUpdate(updateData);
  }

  function updateButton() {
    if (props.user.first_name !== formState.first_name) {
      return <Button update onClick={update}>Update</Button>
    } else if (props.user.last_name !== formState.last_name) {
      return <Button update onClick={update}>Update</Button>
    } else if (props.user.email !== formState.email) {
      return <Button update onClick={update}>Update</Button>
    }
    

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const camera = () => {
    console.log("camera clicked!")
  }
  // const form_first_name = () => {
  //   console.log("first name clicked!")
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <span className="input"></span>
  //       <input
  //         className='firstName'
  //         // placeholder='First Name'
  //         value={formState.first_name}
  //         onChange={event => setFormState({...formState, first_name: event.target.value })}
  //         required
  //         autoFocus
  //         autoComplete="off"
  //       />
  //     </form>
  //   )
    
  // }


  return (
    <div className="user_profile">
      <h1>Profile</h1><br/>
      <img className='profile_pic' src="images/logo192.png" width={100} ></img>
  
      <Button camera className='camera' onClick={camera}></Button>
      <form onSubmit={handleSubmit}>

      <span className="input"></span>
      <input
        className='firstName'
        // placeholder='First Name'
        value={formState.first_name}
        onChange={event => setFormState({...formState, first_name: event.target.value })}
        required
        autoFocus
        autoComplete="off"
      />
      <span className="input"></span>
      <input 
        className='lastName'
        // placeholder='Last Name'
        value={formState.last_name}
        onChange={event => setFormState({...formState, last_name: event.target.value })}
        required
        autoComplete="off"
      />
      <span className="input"></span>
        <input
          className='email'
          type='email'
          // placeholder='Email'
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          required
        />
        
      {/* { (props.user.first_name !== formState.first_name) &&
      <Button update onClick={update}>Update</Button>}
     {(props.user.last_name !== formState.last_name) &&
      <Button update onClick={update}>Update</Button>}
     {(props.user.email !== formState.email) &&
      <Button update onClick={update}>Update</Button>}  */}
      { updateButton() }
        {/* on clicking login, we want to receive email and password */}
        {/* and the do something with it */}
        {/* <Button update onClick={update}>Update</Button>
        <Button logout onClick={logout}>Logout</Button> */}
        {/* on clicking back, we should go to the previous visual state */}
        {/* <Button back onClick={(event) => props.displayForm(event)}>Back</Button> */}
      </form> 
        <Button logout onClick={logout}>Logout</Button>


    </div>
  )
};

export default Profile;