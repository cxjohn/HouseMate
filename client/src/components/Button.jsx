import './Button.scss';
import classnames from 'classnames';


function Button(props) {
  const buttonClass = classnames(
    'button',
    { 'button_login': props.login, 'button_register': props.register }
 )
    
    return (
      <button
      className={buttonClass}
      onClick={props.onClick}
      >
        {props.children}
      </button>
    )
};

export default Button;