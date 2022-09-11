import './Input.css';

const Input = (props) => {
    return(
        <input
            style={props.style}
            onChange={(event) => props.onChange(event, props.name)}
            onKeyPress={props.onKeyPress}
            className={"input " + props.className}
            placeholder={props.placeHolder}
            type={props.type}
        />
    );
}

export default Input;