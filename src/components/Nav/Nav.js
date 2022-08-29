import './Nav.css';
import Link from '../Link/Link.js';

const Nav = (props) => {
    return(
        <div className="nav">
            <Link 
                onClick={props.routeChangeHandler}
                newRoute="signIn"
                text="Sign Out"
            />
        </div>
    );
}

export default Nav;