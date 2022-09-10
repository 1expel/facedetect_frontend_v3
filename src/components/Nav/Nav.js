import './Nav.css';
import Link from '../Link/Link.js';

const Nav = (props) => {
    if(props.route === "signIn" || props.route === "signUp") {
        let classes;
        if(props.route === "signIn") classes = ["active", "notActive"];
        else if(props.route === "signUp") classes = ["notActive", "active"]
        return(
            <div className="nav">
                <Link 
                    onClick={props.onRouteChange}
                    newRoute="signIn"
                    text="Sign In"
                    className={classes[0]}
                />
                <Link 
                    onClick={props.onRouteChange}
                    newRoute="signUp"
                    text="Sign Up"
                    className={classes[1]}
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
                    className="notActive"
                />
            </div>
        )
    }
}

export default Nav;