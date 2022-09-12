import './Input.css';

const Input = (props) => {
    return(
        <input
            onChange={(event) => props.onChange(event, props.name)}
            onKeyPress={props.onKeyPress}
            id={props.id}
            className={"input " + props.className}
            placeholder={props.placeHolder}
            type={props.type}
        />
    );
}

export default Input;