import './Home.css';
import React from 'react';
import Rank from '../../components/Rank/Rank.js';
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
        if(event.key === "Enter") {
            this.setState({imageUrl: this.state.input}, this.faceDetect);
        }
    }

    onClick = () => {
        this.setState({imageUrl: this.state.input}, this.faceDetect);
    }

    faceDetect = async () => {
        const res = await fetch('http://localhost:3001/user/entries', {
            method: 'PUT',
            headers: {'Content-Type': 'applicaton/json'},
            body: JSON.stringify({
                id: this.props.user.id
            })
        });
        const data = await res.json();
    }

    render() {
        return(
            <div className="home">
                <Rank user={this.props.user}/>
                <div style={{height: "30px"}}></div>
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