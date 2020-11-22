// Form for registration
import { useState } from 'react';
import Button from './Button';


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
      password_digest: formState.password
      //password_confirmation: formState.passwordConfirmation
    }
    console.log("user!" , userData);
    
    return props.onRegister(userData)
  }
}



  return(
    // <div></div>
    // <h3>Register Form</h3>
    
    <form onSubmit={handleSubmit}>
      <input 
        className='firstName' 
        placeholder='First Name' 
        value={formState.firstName}
        onChange={event => setFormState({...formState, firstName: event.target.value })}
        required
      />
      <input 
        className='lastName' 
        placeholder='Last Name'
        value={formState.lastName}
        onChange={event => setFormState({...formState, lastName: event.target.value })}
        required
      />
      <input 
        className='email'
        type='email'
        placeholder='Email'
        value={formState.email}
        onChange={event => setFormState({...formState, email: event.target.value })}
        required
      />
      <input 
        className='password' 
        type='password' 
        placeholder='Password'
        value={formState.password}
        onChange={event => setFormState({...formState, password: event.target.value })}
        required
      />
      <input 
        className='password' 
        type='password' 
        placeholder='Confirm Password'
        value={formState.passwordConfirmation}
        onChange={event => setFormState({...formState, passwordConfirmation: event.target.value })}
        required
      />
  
      {/* <button type='submit'>Register</button> */}
      {/* on click we want to send data to the server using axios call*/}
      <Button register onClick={register}>Register</Button>
      <Button back onClick={(event) => props.displayForm(event)}>Back</Button>

    </form>
  )

};

export default RegisterForm;

