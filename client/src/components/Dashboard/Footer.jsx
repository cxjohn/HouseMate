import './Footer.scss';

function Footer(props) {
  return (
    <footer class="mobile-bottom-bar">
      <a class="footer-link">
        <i class="fa fa-home"></i>
      </a>
      <a class="footer-link">
        <i class="fa fa-plus-square" onClick={props.onClick}></i>
      </a>
      <a class="footer-link">
        <i class="fa fa-sign-out"></i> 
        {/* <span class='footer-text'></span> */}
      </a>
    </footer>

  )
}

export default Footer;