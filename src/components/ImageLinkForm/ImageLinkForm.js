import './ImageLinkForm.css';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';

const ImageLinkForm = (props) => {
    return(
        <div className="imageLinkForm">
            <h1>Enter an Image Url That Has a Face to Be Detected</h1>
            <Form>
                <Input                    
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
                />
                <Button
                    onClick={props.onClick}
                    text="Enter"
                />
            </Form>
        </div>
    );
}

export default ImageLinkForm;