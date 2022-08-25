import React from 'react';
import './App.css';
import Header from '../components/Header/Header.js';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Header/>
                {/* <ImageLinkForm/>
                <FaceRecognition/> */}
            </div>
        )
    }

}

export default App;
