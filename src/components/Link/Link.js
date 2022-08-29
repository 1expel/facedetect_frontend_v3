import './Link.css';

const Link = (props) => {
    return(
        <h2
            onClick={() => props.onClick(props.newRoute)}
            className={"link " + props.className}
        >{props.text}</h2>
    );
}

export default Link;