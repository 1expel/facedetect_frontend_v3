import './Button.css';

const Button = (props) => {
    return(
        <button
            onClick={props.onClick}
            className={"button " + props.className}
        >{props.text}</button>
    );
}

export default Button;