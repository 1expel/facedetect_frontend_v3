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

    onChange = (event, name) => {
        if(name === "email") {
            this.setState({email: event.target.value});
        } 
        else if(name === "password") {
            this.setState({password: event.target.value});
        }
    }

    onKeyPress = (event) => {
        if(event.key === "Enter") {
            this.signIn();
        }
    }

    onClick = () => {
        this.signIn();
    }

    signIn = async () => {
        try {
            const res = await fetch('http://localhost:3001/user/signIn', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });
            const user = await res.json();
            if(res.status !== 200) {
                throw new Error(user);
            }
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        } 
        catch(err) {
            alert(err);
        }
    }

    render() {
        return(
            <Form>
                <h1>Sign In</h1>
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
                    type="password"
                    name="password"
                />
                <Button
                    onClick={this.onClick}
                    text="Sign In"
                />
                <h6>Don't have an account? Sign Up</h6>
            </Form>
        );
    }

}

export default SignIn;