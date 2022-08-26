import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return(
        <div className="imageLinkForm">
            <h1>Enter an Image Url That Has a Face to Be Detected</h1>
            <div className="form1">
                <input 
                    onChange={props.inputChangeHandler}
                    onKeyPress={props.enterKeyPressHandler}
                    type="text"
                />
                <button
                    onClick={props.buttonClickHandler}
                >Enter</button>
            </div>

        </div>
    );
}

export default ImageLinkForm;