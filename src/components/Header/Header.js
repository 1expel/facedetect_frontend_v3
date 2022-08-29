import './Header.css';
import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';

const Header = (props) => {
    return(
        <div className="header">
            <Logo/>
            <Nav routeChangeHandler={props.routeChangeHandler}/>
        </div>
    );
}

export default Header;