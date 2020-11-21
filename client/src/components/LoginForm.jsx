import { useState } from 'react';

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
    <form>
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
    <button type='submit'>Login</button>
    </form>
</div>
  )
};

export default LoginForm;