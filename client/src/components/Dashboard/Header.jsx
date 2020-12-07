import './Header.scss';


function Header(props) {
 
    return (
     <section className='dashboard_header'>
        <img src="images/housematelogo.png" width={30} />
        <h3 id="header_text">HouseMate</h3>
     </section>
    )
};

export default Header;