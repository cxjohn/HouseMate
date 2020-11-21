import { useState } from 'react';
import Button from './Button';

function LoginForm (props) {

  console.log("login form")
//   const [state , setState] = useState({
//     email : "",
//     password : ""
// })
// const handleChange = (e) => {
//     const {id , value} = e.target   
//     setState(prevState => ({
//         ...prevState,
//         [id] : value
//     }))
//   }
  return(
  <div>
    <form onSubmit={(event) => event.target.preventDefault}>
      <input type="email" 
      className="form-control" 
      id="email" 
      placeholder="Enter email" 
      // value={state.email}
      // onChange={handleChange}
      />
      <input type="password" 
       className="form-control" 
       id="password" 
       placeholder="Password"
      // value={state.password}
      // onChange={handleChange} 
      />
      {/* <button type='submit'>Login</button> */}
      {/* on clicking login, we want to receive email and password */}
      {/* and the do something with it */}
      <Button login>Login</Button>
      {/* on clicking back, we should go to the previous visual state */}
      <Button back onClick={(event) => props.displayForm(event)}>Back</Button>
    </form>
</div>
  )
};

export default LoginForm;