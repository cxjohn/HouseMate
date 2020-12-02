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
    error: ""
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
    // console.log("ERROR!")
    // const userData = { error: "Passwords do not match!" }
    setFormState({...formState, error: "Passwords do not match!" })
    return
  } else if (!formState.email || !formState.firstName || !formState.lastName || !formState.password) {
  
    // const userData = { error: "Please input all required particulars!" }
    setFormState({...formState, error: "Please input all required particulars!" })
    return
  } else {

    const number = Math.floor(Math.random()*5)
    let image = "images/avatars/rabbit.png"

    if (number === 0) {
      image = "images/avatars/dog.png"
    } else if (number === 1) {
      image = "images/avatars/fox.png"
    } else if (number === 2) {
      image = "images/avatars/rabbit.png"
    } else if (number === 3) {
      image = "images/avatars/panda.png"
    } else if (number === 4) {
      image = "images/avatars/cat.png"
    }

    const userData = {
      first_name: formState.firstName,
      last_name: formState.lastName,
      email: formState.email,
      // password_digest: formState.password
      password: formState.password,
      password_confirmation: formState.passwordConfirmation,
      profile_pic: image
    }

    setFormState({...formState, error: "" })

    return props.onRegister(userData)
    //console.log("user!" , userData);
  }

  // return props.onRegister(userData)

}



  return(
    // <div></div>
    // <h3>Register Form</h3>
    <section className='whole_thing'>
      <div className='back'>
        <Button back onClick={(event) => props.display(event)}>Back</Button>
        <h1>Sign Up</h1>
      </div>
    <form onSubmit={handleSubmit}>
      { formState.error && <p className="form_error">{formState.error}</p>  }

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
      <span className="input"></span>
      <input 
        className='password' 
        type='password' 
        placeholder='Password'
        // id='password'
        value={formState.password}
        onChange={event => setFormState({...formState, password: event.target.value })}
        required
      />
      <span className="input"></span>
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
      <Button register onClick={register}></Button>

      </form>
      </section>  
  )
  
};

{/* <Button back onClick={(event) => props.displayForm(event)}>Back</Button> */}
export default RegisterForm;

