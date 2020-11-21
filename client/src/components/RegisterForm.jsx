// Form for registration
import Button from './Button';

function RegisterForm (props) {

//   const handleSubmitClick = (e) => {
//     e.preventDefault();
//     if(state.password === state.confirmPassword) {
//         sendDetailsToServer()    
//     } else {
//         props.showError('Passwords do not match');
//     }
// }


  return(
    // <div></div>
    // <h3>Register Form</h3>
    
    <form onSubmit={(event) => event.target.preventDefault}>
      <input className='firstName' placeholder='First Name' />
      <input className='lastName' placeholder='Last Name' />
      <input className='email' type='email' placeholder='Email' />
      <input className='password' type='password' placeholder='Password' />
      <input className='password' type='password' placeholder='Confirm Password' />

      {/* <button type='submit'>Register</button> */}
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