import './SignUp.css';
import React from 'react';
import Form from '../../components/Form/Form.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    onChange = (event, name) => {
        if(name === "name") this.setState({name: event.target.value});
        else if(name === "email") this.setState({email: event.target.value});
        else if(name === "password") this.setState({password: event.target.value});
    }

    onKeyPress = (event) => {
        if(event.key === "Enter") this.props.onRouteChange("home");
    }

    onClick = () => {
        this.props.onRouteChange("home");
    }

    render() {
        return(
            <Form>
                <h1>Sign Up</h1>
                <h6>Name</h6>
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    name="name"
                />
                <h6>Email</h6>
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    name="email"
                />
                <h6>Password</h6>
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    name="password"
                />
                <Button
                    onClick={this.onClick}
                    text="Sign Up"
                />
            </Form>
        );
    }
    
}

export default SignUp;