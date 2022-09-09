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

    onLoad = () => {
        
    }

    faceDetect = async () => {
        try {
            const res = await fetch('http://localhost:3001/clarifai/faceDetection', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    imageUrl: this.state.imageUrl
                })
            });
            if(res.status !== 200) {
                throw new Error();
            }
            const box = await res.json();
            const res2 = await fetch('http://localhost:3001/user/entries', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id
                })
            });
            if(res2.status !== 200) {
                throw new Error();
            }
            const entries = await res2.json();
            this.props.loadUser(entries);
        }
        catch (err) {
            console.log("an error has occured");
        }
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
                    onLoad={this.onLoad}
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }

}

export default Home;