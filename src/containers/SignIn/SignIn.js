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
                <h1 style={{fontSize: '2.5em'}}>Sign In</h1>
                <Input
                    style={{marginTop: '30px'}}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    className=''
                    placeHolder='Email'
                    name='email'
                />
                <Input 
                    style={{marginTop: '30px'}}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    className=''
                    placeHolder='Password'
                    type='password'
                    name='password'
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