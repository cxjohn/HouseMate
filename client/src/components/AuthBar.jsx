// login and registration buttons basically
import './AuthBar.scss';
import classnames from 'classnames';

function AuthBar(props) {

  const authClass = classnames(
    // "auth_bar",
    { 'auth_bar_login': props.login, 'auth_bar_register': props.register }
    );
    // const buttonClass = classnames("button", { 'button--confirm': props.confirm, 'button--danger': props.danger })

    // return <button disabled={props.disabled} onClick={props.onClick} className={buttonClass}>{props.children}</button>;

  console.log(props)
  return (
  <footer className="auth_bar" onClick={props.onClick}>
    {/* <span className={`auth_bar_${props.name.toLowerCase()}`}>{props.name}</span> */}
    <span className={authClass}>{props.children}</span>
  </footer>
  )
};

export default AuthBar;


{/* <Switch className={`mySwitch-${color}` ... /> */}

// .mySwitch {
//   &-black {
//     background-color: black;
//   }

//   &-yellow {
//     background-color: yellow;
//   }
// }