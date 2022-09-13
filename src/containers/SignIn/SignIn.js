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
            password: "",
            error: {
                status: false,
                msg: ''
            }
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
                this.setState({error: {
                    status: res.status,
                    msg: user
                }});
                return;
            }
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        } 
        catch(err) {
            this.setState({error: {
                status: 500,
                msg: 'Something went wrong'
            }});
        }
    }

    render() {
        let classes = '';
        let content;
        if(this.state.error.status) {
            classes = 'inputError';
            content = <h4 style={{color: 'red'}}>{
                'Error '
                + this.state.error.status
                + ': '
                + this.state.error.msg
            }</h4>;
        }
        return(
            <Form>
                <h1 style={{fontSize: '2.5em', color: 'white'}}>Sign In</h1>
                {content}
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signInEmail'
                    className={classes}
                    placeHolder='Email'
                    name='email'
                />
                <Input 
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signInPassword'
                    className={classes}
                    placeHolder='Password'
                    type='password'
                    name='password'
                />
                <Button
                    onClick={this.onClick}
                    text="Sign In"
                />
                <h6 style={{color: 'white'}}>Don't have an account? Sign Up</h6>
            </Form>
        );
    }

}

export default SignIn;