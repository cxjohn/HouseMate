import { useState } from 'react';
import Button from './Button';
import './Profile.scss'

function Profile(props) {

  const [formState, setFormState] = useState({
    email: props.email || "",
    password: "",
  })

  function login() {

    const userData = {
      email: formState.email,
      password_digest: formState.password
    }
    return props.onLogin(userData);
  }

  const handleSubmit= (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <img className='profile_pic' src="images/logo192.png"></img>

      <form onSubmit={handleSubmit}>
      <h1>Profile</h1><br/>

      <span className="input"></span>
      <input
        className='firstName'
        placeholder='First Name'
        value={formState.firstName}
        onChange={event => setFormState({...formState, firstName: event.target.value })}
        required
        autoFocus
        autoComplete="off"
      />
      <span className="input"></span>
      <input 
        className='lastName'
        placeholder='Last Name'
        value={formState.lastName}
        onChange={event => setFormState({...formState, lastName: event.target.value })}
        required
        autoComplete="off"
      />
      <span className="input"></span>
        <input
          className='email'
          type='email'
          placeholder='Email'
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          autoFocus
          required
        />
        {/* on clicking login, we want to receive email and password */}
        {/* and the do something with it */}
        {/* <Button update onClick={update}>Update</Button>
        <Button logout onClick={logout}>Logout</Button> */}
        {/* on clicking back, we should go to the previous visual state */}
        <Button back onClick={(event) => props.displayForm(event)}>Back</Button>
      </form>
    </div>
  )
};

export default Profile;