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

    inputChangeHandler = (event) => {
        this.setState({input: event.target.value});
    }

    enterKeyPressHandler = (event) => {
        if(event.key === "Enter") this.setState({imageUrl: this.state.input});
    }

    buttonClickHandler = () => {
        this.setState({imageUrl: this.state.input});
    }

    render() {
        return(
            <div className="home">
                <ImageLinkForm 
                    inputChangeHandler={this.inputChangeHandler} 
                    enterKeyPressHandler={this.enterKeyPressHandler}
                    buttonClickHandler={this.buttonClickHandler}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }

}

export default Home;