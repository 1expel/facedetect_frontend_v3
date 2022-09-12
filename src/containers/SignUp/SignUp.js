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
        if(name === "name") {
            this.setState({name: event.target.value});
        }
        else if(name === "email") {
            this.setState({email: event.target.value});
        }
        else if(name === "password") {
            this.setState({password: event.target.value});
        }
    }

    onKeyPress = (event) => {
        if(event.key === "Enter") {
            this.signUp();
        }
    }

    onClick = () => {
        this.signUp();
    }

    signUp = async () => {
        try {
            const res = await fetch('http://localhost:3001/user/signUp', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
            });
            const user = await res.json();
            if(res.status !== 201) {
                throw new Error(user);
            }
            this.props.loadUser(user);
            this.props.onRouteChange("home");
        } 
        catch(err) {
            alert(err);
        }

    }

    render() {
        return(
            <Form>
                <h1 style={{fontSize: '2.5em', color: 'white'}}>Sign Up</h1>
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpName'
                    placeHolder='Name'
                    name="name"
                />
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpEmail'
                    placeHolder='Email'
                    name="email"
                />
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpPassword'
                    placeHolder='Password'
                    type="password"
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