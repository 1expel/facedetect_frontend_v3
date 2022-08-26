import './Input.css';

const Input = (props) => {
    return(
        <input
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            className={"input " + props.className}
            placeholder={props.placeHolder}
            type={props.type}
        />
    );
}

export default Input;