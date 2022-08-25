import './Header.css';
import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';

const Header = () => {
    return(
        <div className="header">
            <Logo/>
            <Nav/>
        </div>
    );
}

export default Header;