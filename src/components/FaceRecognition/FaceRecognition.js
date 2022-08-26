import './FaceRecognition.css';

const FaceRecognition = (props) => {
    if(props.imageUrl === "") {
        return(
            <div className="faceRecognition"></div>
        );
    } else {
        return(
            <div className="faceRecognition">
                <img 
                src={props.imageUrl}
                alt="image" 
                width="500" 
                height="auto"/>
            </div>
        );
    }
}

export default FaceRecognition;