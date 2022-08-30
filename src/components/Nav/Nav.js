import './Nav.css';
import Link from '../Link/Link.js';

const Nav = (props) => {
    if(props.route === "signIn") {
        return(
            <div className="nav">
                <Link 
                    onClick={props.onRouteChange}
                    newRoute="signUp"
                    text="Sign Up"
                />
            </div>
        );
    } else if(props.route === "signUp") {
        return(
            <div className="nav">
                <Link 
                    onClick={props.onRouteChange}
                    newRoute="signIn"
                    text="Sign In"
                />
            </div>
        );
    } else if(props.route === "home") {
        return(
            <div className="nav">
                <Link 
                    onClick={props.onRouteChange}
                    newRoute="signIn"
                    text="Sign Out"
                />
            </div>
        );
    }
}

export default Nav;