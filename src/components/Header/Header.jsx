import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
        <div className='logo'> 
        <img src={logo} alt="" />
        </div>
         <div className='menus'>
        <a href="/home">Home</a>
         <a href="/contact">Contact</a>
         <a href="/product">Product</a>
         <a href="/login">Login</a>
         </div>
        </nav>
    );
};

export default Header;