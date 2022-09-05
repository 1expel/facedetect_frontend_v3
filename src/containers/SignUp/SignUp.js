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
            console.log(res.status);
            const user = await res.json();
            console.log(user);
            this.props.loadUser(user);
            this.props.onRouteChange("home");
        } catch(err) {
            console.log(err);
        }

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