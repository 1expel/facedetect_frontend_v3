import './SignIn.css';
import React from 'react';
import Form from '../../components/Form/Form.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    emailChangeHandler() {

    }

    passwordChangeHandler() {

    }

    emailKeyPressHandler() {

    }

    passwordKeyPressHandler() {

    }

    buttonClickHandler() {

    }

    render() {
        return(
            <Form>
                <h1>Sign In</h1>
                <h6>Email</h6>
                <Input
                    onChange={this.emailChangeHandler}
                    onKeyPress={this.emailKeyPressHandler}
                />
                <h6>Password</h6>
                <Input 
                    onChange={this.passwordChangeHandler}
                    onKeyPress={this.passwordKeyPressHandler}
                />
                <Button
                    onClick={this.buttonClickHandler}
                />
                <h6>Don't have an account? Sign Up</h6>
            </Form>
        );
    }

}

export default SignIn;