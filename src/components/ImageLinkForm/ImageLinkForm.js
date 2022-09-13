import './ImageLinkForm.css';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';

const ImageLinkForm = (props) => {
    let classes = '';
    let content;
    if(props.error.status) {
        classes = 'inputError';
        content = <h4 style={{color: 'red'}}>{
            'Error '
            + props.error.status
            + ': '
            + props.error.msg
        }</h4>;
    }
    return(
        <div className="imageLinkForm">
            <h1>Enter an Image Url That Has a Face to Be Detected</h1>
            {content}
            <Form className="homeForm">
                <Input                    
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
                    id="imageUrlInput" 
                    className={classes}
                    placeHolder='Enter an image url' 
                    type="text"
                />
                <Button
                    onClick={props.onClick}
                    className="imageUrlButton"
                    text="Enter"
                />
            </Form>
        </div>
    );
}

export default ImageLinkForm;