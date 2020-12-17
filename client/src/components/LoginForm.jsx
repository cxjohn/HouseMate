import { useState } from 'react';
import Button from './Button';
// import './LoginForm.scss';
import './LoginForm.scss';


function LoginForm(props) {

  // console.log("login form")
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

    <section className='whole_thing'>
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
    />
    <span className="input"></span>
    <input 
      className='password' 
      type='password' 
      placeholder='Password'
      // id='password'
      value={formState.password}
      onChange={event => setFormState({ ...formState, password: event.target.value })}
      required
    />

    {/* <button type='submit'>Register</button> */}
    {/* on click we want to send data to the server using axios call*/}
    {/* type="submit" value="Sign Up"  */}
    {/* title="Submit form" class="icon-arrow-right" */}
    <Button login onClick={login}>Login</Button>

    </form>
    </section> 

    
    /*
    <section className='login_div'>
        <div className='login_header'>
          <Button back onClick={(event) => props.display(event)}>Back</Button>
          <h1 className="form_title">Log In</h1>
        </div>

      <form onSubmit={handleSubmit}>

        { formState.error && <p className="form_error">E-mail or password is invalid</p> }
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
        <span className="input"></span>
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={formState.password}
          onChange={event => setFormState({ ...formState, password: event.target.value })}
          required
        />*/
        //{/* <button type='submit'>Login</button> */}
        //{/* on clicking login, we want to receive email and password */}
        //{/* and the do something with it */}
        // <Button login onClick={login}>Login</Button>
        //{/* on clicking back, we should go to the previous visual state */}
        /*
      </form>
    </section>
    */
  )
};

export default LoginForm;