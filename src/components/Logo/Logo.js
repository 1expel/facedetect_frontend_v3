import './Logo.css';
import brain from './brain.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return(
        <Tilt className="logo">
            <img src={brain} alt="brain logo" width="75" height="75"></img>
        </Tilt>
    );
}

export default Logo;