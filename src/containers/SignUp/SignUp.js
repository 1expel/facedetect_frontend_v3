import './SignUp.css';
import {Component} from 'react';
import Form from '../../components/Form/Form.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            error: {
                status: false,
                msg: ''
            }
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
            const res = await fetch('https://facedetect-backend-v3.herokuapp.com/user/signUp', {
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
                this.setState({error: {
                    status: res.status,
                    msg: user
                }});
                return;
            }
            this.props.loadUser(user);
            this.props.onRouteChange("home");
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
        if(this.state.error.status !== false) {
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
                <h1 style={{fontSize: '2.5em', color: 'white'}}>Sign Up</h1>
                {content}
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpName'
                    className={classes}
                    placeHolder='Name'
                    name="name"
                />
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpEmail'
                    className={classes}
                    placeHolder='Email'
                    name="email"
                />
                <Input
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    id='signUpPassword'
                    className={classes}
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