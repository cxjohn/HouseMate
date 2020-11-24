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
      'button-_split': props.split
    }
  )
    
  const icon = () => {
    if (props.register || props.login) {
      return (
  
        <i 
          class="fa fa-arrow-circle-o-right form_icon"
          onClick={props.onClick} 
          >
        </i>

        )
    } else if (props.back) {
      return (
        <i 
          class="fa fa-angle-left form_icon"
          onClick={props.onClick}
        >
        </i>
        )
    } else if (props.split) {
      return <button className={buttonClass} onClick={props.onClick}>{props.children}</button>
    }
  }

    return (

      icon()
    )
      // if(props.register) 
      
};

export default Button;