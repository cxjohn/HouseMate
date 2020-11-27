import './Footer.scss';
import classnames from 'classnames';

function Footer(props) {

  // const footerClass = classnames(
  //   { 
  //     'add_selected': props.add, 
  //     // 'home_selected': props.home,
  //     'friend_selected': props.friend,
  //     'settle_selected': props.settle,
  //     'profile_selected': props.profile,
  //     // 'group_selected': props.group
 
  //   }
  // )
  let bottomFooter = classnames("")

  const click = (event) => {
    bottomFooter = classnames("visible")
    return props.onClick(event)
  }

          // className={`fa fa-arrow-circle-o-right form_icon ${buttonClass}`}

  
  return (
    <footer className="dashboard_footer">
      <div id='upper_footer'>
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
      <div id='bottom_footer' className={bottomFooter}>
      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className={`fa fa-user-circle-o ${props.profile ? "profile_selected" : ""}`}
            onClick={props.onClick}>
          </i>
        </span>
        <span className="footer-link">
          <i className={`fa fa-group`} 
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