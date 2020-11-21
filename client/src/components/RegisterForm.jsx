// Form for registration
import Button from './Button';

function RegisterForm (props) {

  const handleSubmit= (event) => {
    event.preventDefault();
    // if(state.password === state.confirmPassword) {
    //     sendDetailsToServer()    
    // } else {
    //     props.showError('Passwords do not match');
    // }
    userData = {
      firstName,
      lastName,
      email,
      password,
      password_confirmation
    }
    props.register(userData)
}


  return(
    // <div></div>
    // <h3>Register Form</h3>
    
    <form onSubmit={handleSubmit}>
      <input className='firstName' placeholder='First Name' />
      <input className='lastName' placeholder='Last Name' />
      <input className='email' type='email' placeholder='Email' />
      <input className='password' type='password' placeholder='Password' />
      <input className='password' type='password' placeholder='Confirm Password' />

  
      {/* <button type='submit'>Register</button> */}
      {/* on click we want to send data to the server using axios call*/}
      <Button register>Register</Button>
      <Button back onClick={(event) => props.displayForm(event)}>Back</Button>

    </form>
  )

};

export default RegisterForm;

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register} />
//       <select name="gender" ref={register}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }