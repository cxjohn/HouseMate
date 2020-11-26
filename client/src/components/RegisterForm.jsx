// Form for registration
import { useState } from 'react';
import Button from './Button';
import './RegisterForm.scss';


function RegisterForm (props) {
  // const [firstName, setFirstName] = useState(props.name || "")
  const [formState, setFormState] = useState({
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    email: props.email || "",
    password: "",
    passwordConfirmation: "",
  })


  const handleSubmit= (event) => {
    event.preventDefault();
    // console.log("first name: ", formState.firstName);
  // check if password matches password confirm and show error if not
  // ensure fields are not empty
  // send this data to the server
  // show a loading bar/animation while waiting for server's response
  // recieve a JWT - log in user
}

function register () {

  if (formState.password !== formState.passwordConfirmation) {
  // show errors on the page 
    console.log("ERROR!")
  } else {
    const userData = {
      first_name: formState.firstName,
      last_name: formState.lastName,
      email: formState.email,
      // password_digest: formState.password
      password: formState.password,
      password_confirmation: formState.passwordConfirmation
    }
    // console.log("user!" , userData);
    
    return props.onRegister(userData)
  }
}



  return(
    // <div></div>
    // <h3>Register Form</h3>
    
    <form onSubmit={handleSubmit}>
      <div>
        <Button back onClick={(event) => props.displayForm(event)}>Back</Button>
        <h1>Sign up</h1>
      </div>
      <span className="input"></span>
      <input
        className='firstName' 
        placeholder='First Name'
        value={formState.firstName}
        onChange={event => setFormState({...formState, firstName: event.target.value })}
        required
        autoFocus
        autoComplete="off"
        // pattern="^\w+\s\w+$"
      />
      <span className="input"></span>
      <input 
        className='lastName' 
        placeholder='Last Name'
        value={formState.lastName}
        onChange={event => setFormState({...formState, lastName: event.target.value })}
        required
        autoComplete="off"
        // pattern="^\w+\s\w+$"
      />
      <span className="input"></span>
      <input 
        className='email'
        type='email'
        placeholder='Email'
        value={formState.email}
        onChange={event => setFormState({...formState, email: event.target.value })}
        required
      />
      <span id="passwordMeter"></span>
      <input 
        className='password' 
        type='password' 
        placeholder='Password'
        id='password'
        value={formState.password}
        onChange={event => setFormState({...formState, password: event.target.value })}
        required
      />
      <span id="passwordMeter"></span>
      <input
        className='password'
        type='password' 
        placeholder='Confirm Password'
        value={formState.passwordConfirmation}
        onChange={event => setFormState({...formState, passwordConfirmation: event.target.value })}
        required
        title="Password min 8 characters. At least one UPPERCASE and one lowercase letter" required pattern="(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
      />
  
      {/* <button type='submit'>Register</button> */}
      {/* on click we want to send data to the server using axios call*/}
      {/* type="submit" value="Sign Up"  */}
      {/* title="Submit form" class="icon-arrow-right" */}
      <Button register onClick={register}>
      
      </Button>

</form>
  )
  
};

{/* <Button back onClick={(event) => props.displayForm(event)}>Back</Button> */}
export default RegisterForm;

