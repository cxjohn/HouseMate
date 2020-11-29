import { useState } from 'react';
import './Footer.scss';
import classnames from 'classnames';

function Footer(props) {

  // const [state, setState] = useState({
  //   visible: props.visible || false
  // })

  const bottomFooter = classnames(
    "dashboard_footer",
    { 
      'visible': props.visible,
      'hidden': !props.visible
    }
  )

  const click = (event) => {
    console.log("visible:", props.visible)
    // setState(prev => ({...prev, visible: true}));
    return props.onClick(event)
  }

          // className={`fa fa-arrow-circle-o-right form_icon ${buttonClass}`}

  
  return (
    // <footer className="dashboard_footer">
    <footer className={bottomFooter}>
      <div class='upper_footer'>
      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className={`fa fa-home ${props.home ? "home_selected" : ""}`} 
            // onClick={props.onClick}>
            onClick={click}>
          </i>
        </span>
        <span className="footer-link">
          <i className={`fa fa-plus-square ${props.add ? "add_selected" : ""}`}
            onClick={props.onClick}>
          </i>
        </span>
        <span className="footer-link">
          <i className={`fa fa-handshake-o ${props.settle ? "settle_selected" : ""}`}
            onClick={props.onClick}>
          </i> 
          {/* <span className='footer-text'></span> */}
        </span>
      </span>
      </div>
      {/* <div id="bottom_footer" className={bottomFooter}>  // this sort of worked */}
      <div id="bottom_footer">

      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className={`fa fa-user-circle-o ${props.profile ? "profile_selected" : ""}`}
            onClick={props.onClick}>
          </i>
        </span>
        <span className="footer-link">
          <i className={`fa fa-group ${props.group ? "group_selected" : ""}`} 
            onClick={props.onClick}>
          </i>
        </span>
        <span className="footer-link">
          <i className={`fa fa-user-plus ${props.friend ? "friend_selected" : ""}`} 
            onClick={props.onClick}>
            </i> 
          {/* <span className='footer-text' 	fa fa-user-plus></span> */}
        </span>
      </span>
      </div>
    </footer>

  )
}

export default Footer;