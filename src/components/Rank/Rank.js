import './Rank.css';

const Rank = (props) => {
    return(
        <div className="rank">
            <h1>{props.user.name + ", Your Current Entry Count Is..."}</h1>
            <h1>{props.user.entries}</h1>
        </div>
    )
}

export default Rank;