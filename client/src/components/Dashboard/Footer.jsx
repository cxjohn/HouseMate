import './Footer.scss';

function Footer(props) {
  return (
    <footer className="dashboard_footer">
      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className="fa fa-home"></i>
        </span>
        <span className="footer-link">
          <i className="fa fa-plus-square" onClick={props.onClick}></i>
        </span>
        <span className="footer-link">
          <i className="fa fa-handshake-o" onClick={props.onClick}></i> 
          {/* <span className='footer-text'></span> */}
        </span>
      </span>
      <span className="mobile-bottom-bar">
        <span className="footer-link">
          <i className="fa fa-user-circle-o" onClick={props.onClick}></i>
        </span>
        <span className="footer-link">
          <i className="fa fa-group" onClick={props.onClick}></i>
        </span>
        <span className="footer-link">
          <i className="fa fa-user-plus" onClick={props.onClick}></i> 
          {/* <span className='footer-text' 	fa fa-user-plus></span> */}
        </span>
      </span>
    </footer>

  )
}

export default Footer;