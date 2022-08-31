import './Home.css';
import React from 'react';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition.js';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: ""
        }
    }

    onChange = (event) => {
        this.setState({input: event.target.value});
    }

    onKeyPress = (event) => {
        if(event.key === "Enter") this.setState({imageUrl: this.state.input}, this.faceDetect);
    }

    onClick = () => {
        this.setState({imageUrl: this.state.input}, this.faceDetect);
    }

    faceDetect = () => {
        
    }

    render() {
        return(
            <div className="home">
                <ImageLinkForm 
                    onChange={this.onChange} 
                    onKeyPress={this.onKeyPress}
                    onClick={this.onClick}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }

}

export default Home;