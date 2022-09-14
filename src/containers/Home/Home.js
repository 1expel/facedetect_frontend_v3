import './Home.css';
import {Component} from 'react';
import Rank from '../../components/Rank/Rank.js';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition.js';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
            box: {},
            error: {
                status: false,
                msg: ''
            }
        }
    }

    onChange = (event) => {
        this.setState({input: event.target.value});
    }

    onKeyPress = (event) => {
        if(event.key === "Enter") {
            this.faceDetect();
        }
    }

    onClick = () => {
        this.faceDetect();
    }

    faceDetect = async () => {
        try {
            const res = await fetch('http://localhost:3001/clarifai/faceDetection', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    imageUrl: this.state.input
                })
            });
            const box = await res.json();
            // error
            if(res.status !== 200) {
                this.setState({error: {
                    status: res.status,
                    msg: box
                }});
                return;
            }
            // remove previous error
            else if(res.status === 200 && this.state.error.status !== false) {
                this.setState({error: {
                    status: false,
                    msg: ''
                }});
            }
            this.updateUserEntries(box);
        }
        catch (err) {
            this.setState({error: {
                status: 500,
                msg: 'Something went wrong'
            }});
        }
    }

    updateUserEntries = async (box) => {
        try {
            const res = await fetch('http://localhost:3001/user/entries', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id
                })
            });
            const entries = await res.json();
            // error
            if(res.status !== 200) {
                this.setState({error: {
                    status: res.status,
                    msg: entries
                }});
                return;
            }
            // remove previous error (probably redudant from faceDetect error removal code)
            else if(res.status === 200 && this.state.error.status !== false) {
                this.setState({error: {
                    status: false,
                    msg: ''
                }});
            }
            this.props.loadUser(entries);
            /* NOTE
                imageUrl and box are set at the same time so when onLoad of image, both have a value
                setting imageUrl state in onClick or onKeyPress loads image before box state is set
                batching state together notably helps performance too
            */
            this.setState({
                imageUrl: this.state.input,
                box: box
            });
        }
        catch (err) {
            this.setState({error: {
                status: 500,
                msg: 'Something went wrong'
            }});
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
                    error={this.state.error}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                    box={this.state.box}
                />
            </div>
        );
    }

}

export default Home;