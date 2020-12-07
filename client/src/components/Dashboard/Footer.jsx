import { useState } from 'react';
import './Footer.scss';
import classnames from 'classnames';

function Footer(props) {

  const bottomFooter = classnames(
    { 
      'visible': props.visible,
      'hidden': !props.visible
    }
  )

  const click = (event) => {
    return props.onClick(event)
  }
  
  return (
    <footer id="dashboard_footer" className={bottomFooter}>
      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className={`fa fa-home ${props.home ? "home_selected" : ""}`} 
            onClick={props.onClick}>
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
        </span>
        { !props.visible && 
          <span className="footer-link">
            <i className={`fa fa-caret-up`}
              onClick={click}>
            </i> 
          </span>
        }
      </span>

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
        </span>
      </span>
    </footer>

  )
}

export default Footer;