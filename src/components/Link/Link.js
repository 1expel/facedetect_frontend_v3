import './Link.css';

const Link = (props) => {
    if(props.type === 'span') {
        return(
            <span
                onClick={() => props.onClick(props.newRoute)}
                className={"span " + props.className}
            >
                {props.text}
            </span>
        );
    }
    else {
        return(
            <h2
                onClick={() => props.onClick(props.newRoute)}
                className={"link " + props.className}
            >{props.text}</h2>
        );
    }
}

export default Link;