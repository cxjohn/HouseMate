import { useState } from 'react';
import Button from './Button';
import './LoginForm.scss';



function LoginForm(props) {

  const [formState, setFormState] = useState({
    email: props.email || "",
    password: "",
    error: props.error
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

    <section className='whole_thing_login'>
      <div className='back'>
        <Button back onClick={(event) => props.display(event)}>Back</Button>
        <h1>Log In</h1>
      </div>
      <form onSubmit={handleSubmit}>
        { formState.error && <p className="form_error">E-mail or password is invalid</p>}

        <span className="input"></span>
        <input 
          className='email'
          type='email'
          placeholder='Email'
          value={formState.email}
          onChange={event => setFormState({ ...formState, email: event.target.value })}
          autoFocus
          required
        ></input>

        <span className="input"></span>
        <input 
          className='password' 
          type='password' 
          placeholder='Password'
          value={formState.password}
          onChange={event => setFormState({ ...formState, password: event.target.value })}
          required
        />

        <Button login onClick={login}>Login</Button>

      </form>
    </section> 
  )
};

export default LoginForm;