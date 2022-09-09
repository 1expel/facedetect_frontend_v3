import './FaceRecognition.css';
import React from 'react';

/*
                    style={
                        {
                            top: props.dimensions.top, 
                            right: props.dimesions.right,
                            bottom: props.dimensions.bottom,
                            left: props.dimesions.left
                        }
                    }
*/

class FaceRecognition extends React.Component {

    constructor() {
        super();
        this.state = {
            height: 0,
            width: 0,
            dimensions: {}
        }
    }

    onLoad = () => {
        
        const image = document.getElementById('inputImage');
        const height = image.clientHeight;
        const width = image.clientWidth;
        console.log(width, this.state.box.top_row);
        const dimensions = {
            top: height * this.props.box.top_row,
            right: width * this.props.box.right_col,
            bottom: height * this.props.box.bottom_row,
            left: width * this.props.box.left_col
        }
        this.setState({dimensions: dimensions})
    }

    render() {
        if(this.props.imageUrl === "") {
            return(
                <div className="faceRecognition"></div>
            );
        } else {
            return(
                <div className="faceRecognition">
                    <div 
                        className="box"
    
                    >
                    </div>
                    <img 
                        onLoad={this.onLoad}
                        id="inputImage"
                        src={this.props.imageUrl}
                        alt="" 
                        width="500" 
                        height="auto"
                    />
                </div>
            );
        }
    }


}

export default FaceRecognition;