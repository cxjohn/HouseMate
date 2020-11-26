import './Button.scss';
import classnames from 'classnames';

{/* <i class="fa fa-angle-left"></i> */}
{/* <i class="fa fa-arrow-circle-o-right"></i> */}

function Button(props) {
  const buttonClass = classnames(
    'button',
    { 
      'button_login': props.login, 
      'button_register': props.register,
      'button_back': props.back,
      'button_split': props.split,
      'button_settle': props.settle,
      'button_notify': props.notify
    }
  )
      
  const icon = () => {
    if (props.register || props.login) {
      return (
        <i 
          className="fa fa-arrow-circle-o-right form_icon"
          onClick={props.onClick} 
          >
        </i>
        )
    } else if (props.back) {
      return (
        <i 
          className="fa fa-angle-left form_icon"
          onClick={props.onClick}
        >
        </i>
        )
    } else if (props.split) {
      return <button className={buttonClass} onClick={props.onClick}>{props.children}</button>
    } else if (props.settle) {
      return <button className={buttonClass} onClick={props.onClick}>{props.children}</button>
    } else if (props.notify) {
      return <button className={buttonClass} onClick={props.onClick}>{props.children}</button>
    }   
  }

    return icon()
      // if(props.register) 
      
};

export default Button;