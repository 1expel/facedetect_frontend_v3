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

    onUrlChange = (event) => {
        this.setState({input: event.target.value});
    }

    onEnterKeyPress = (event) => {
        if(event.key === "Enter") this.setState({imageUrl: this.state.input});
    }

    onEnterClick = () => {
        this.setState({imageUrl: this.state.input});
    }

    render() {
        return(
            <div className="home">
                <ImageLinkForm 
                    onUrlChange={this.onUrlChange} 
                    onEnterKeyPress={this.onEnterKeyPress}
                    onEnterClick={this.onEnterClick}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }

}

export default Home;