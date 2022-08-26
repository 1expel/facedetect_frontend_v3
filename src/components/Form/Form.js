import './Form.css';

const Form = (props) => {
    return(
        <div className={"form " + props.className}>
            {props.children}
        </div>
    );
}

export default Form;