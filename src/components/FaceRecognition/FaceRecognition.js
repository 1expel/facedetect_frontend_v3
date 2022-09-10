import './FaceRecognition.css';
import React from 'react';

class FaceRecognition extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            dimensions: {}
        }
    }

    // box will have a value when image loads since props.imageUrl is passed at the same time as props.box
    onLoad = () => {
        const image = document.getElementById('inputImage');
        const height = image.clientHeight;
        const width = image.clientWidth;
        const dimensions = {
            top: height * this.props.box.top_row,
            right: width - (width * this.props.box.right_col),
            bottom: height - (height * this.props.box.bottom_row),
            left: width * this.props.box.left_col
        }
        this.setState({
            height: image.clientHeight,
            width: image.clientWidth,
            dimensions: dimensions
        });
    }

    render() {
        if(this.props.imageUrl === "") {
            return(
                <div className="faceRecognition"></div>
            );
        } else {
            return(
                // same height and width of img tag dimensions (height:auto & width:500px)
                <div style={{height: this.state.height, width: this.state.width}} className="faceRecognition">
                    <div className="imageContainer">
                        <div style={{
                                top: this.state.dimensions.top,
                                right: this.state.dimensions.right,
                                bottom: this.state.dimensions.bottom,
                                left: this.state.dimensions.left
                            }}
                            className="box"
                        >
                        </div>
                        <img 
                            onLoad={this.onLoad}
                            id="inputImage"
                            src={this.props.imageUrl}
                            alt="" 
                            height="auto"
                            width="500px"
                        />
                    </div>
                </div>

            );
        }
    }

}

export default FaceRecognition;