import './Header.css';
import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';

const Header = (props) => {
    return(
        <div className="header">
            <Logo/>
            <Nav 
                route={props.route} 
                onRouteChange={props.onRouteChange}
            />
        </div>
    );
}

export default Header;