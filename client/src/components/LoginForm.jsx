import { useState } from 'react';
import Button from './Button';
import './RegisterForm.scss';

function LoginForm(props) {

  // console.log("login form")
  const [formState, setFormState] = useState({
    email: props.email || "",
    password: "",
  })

  function login() {

    const userData = {
      email: formState.email,
      password_digest: formState.password
    }
    // console.log("user!", userData);

    return props.onLogin(userData);
  }

  const handleSubmit= (event) => {
    event.preventDefault();
    // console.log("first name: ", formState.firstName);
  // check if password matches password confirm and show error if not
  // ensure fields are not empty
  // send this data to the server
  // show a loading bar/animation while waiting for server's response
  // recieve a JWT - log in user
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Button back onClick={(event) => props.display(event)}>Back</Button>
          <h1>Log In</h1>
        </div>
        <input
          className='email'
          type='email'
          placeholder='Email'
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          autoFocus
          required
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={formState.password}
          onChange={event => setFormState({ ...formState, password: event.target.value })}
          required
        />
        {/* <button type='submit'>Login</button> */}
        {/* on clicking login, we want to receive email and password */}
        {/* and the do something with it */}
        <Button login onClick={login}>Login</Button>
        {/* on clicking back, we should go to the previous visual state */}
        
      </form>
    </div>
  )
};

export default LoginForm;