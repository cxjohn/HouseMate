import './Footer.scss';

function Footer(props) {
  return (
    <footer class="mobile-bottom-bar">
      <a href="#" class="footer-link">
        <i class="fa fa-cog"></i> 
        {/* <span class='footer-text'></span> */}
      </a>
      <a href="#" class="footer-link">
        <i class="fa fa-home"></i>
      </a>
      <a href="#" class="footer-link">
        <i class="fa fa-sign-out"></i> 
        {/* <span class='footer-text'></span> */}
      </a>
    </footer>

  )
}

export default Footer;