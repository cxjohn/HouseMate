// import useApplicationData from "../hooks/useApplicationData";

// const { state, setState } = useApplicationData();

// // on clicking register button we want to display register form
// // on clicking login button we want to display login form
// export function displayForm (event) {
//     // console.log("clicked")
//     // check if event.target contains Login text
//     if (event.target.innerHTML === 'Login')
//       setState({ ...state, form: "login" })
//     else if (event.target.innerHTML === 'Register')
//       setState({ ...state, form: "register" })
//     // check if event.target contains Register text
//     else if (event.target.innerHTML === 'Back') {
//       setState({ ...state, form: "none" })
//     }
    
//   };
//   export function display () {
//     if (form === 'login') {
//       return <LoginForm displayForm={displayForm} />
//     } else if (form === 'register') {
//         return <RegisterForm displayForm={displayForm} register={register}/>
//     } else {
//       return <>
//               <AuthBar login onClick={(event) => displayForm(event)}>Login</AuthBar>
//               <AuthBar register onClick={(event) => displayForm(event)}>Register</AuthBar>
//              </>
//     }
    
//   }

// export default { display, displayForm };
  