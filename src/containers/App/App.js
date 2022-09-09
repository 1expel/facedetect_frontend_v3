import React from 'react';
import './App.css';
import Particles from '../../components/Particles/Particles.js';
import Header from '../../components/Header/Header.js';
import SignIn from '../SignIn/SignIn.js';
import SignUp from '../SignUp/SignUp.js';
import Home from '../Home/Home.js';
import Footer from '../../components/Footer/Footer.js';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            route: 'signIn',
            user: {}
        }
    }

    // updates page route
    onRouteChange = (route) => {
        this.setState({route: route});
    }

    // loads user on sign in or sign up and updates individual user properties
    loadUser = (obj) => {
        this.setState(Object.assign(this.state.user, obj));
    }

    render() {
        let content;
        if(this.state.route === "signIn") {
            content = <SignIn 
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
            />;
        } 
        else if(this.state.route === "signUp") {
            content = <SignUp 
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
            />;
        } 
        else if(this.state.route === "home") {
            content = <Home
                user={this.state.user}
                loadUser={this.loadUser}
            />;
        }
        return(
            <div className="app">
                <Particles/>
                <Header 
                    route={this.state.route} 
                    onRouteChange={this.onRouteChange}
                />
                {content}
                <Footer/>
            </div>
        );
    }

}

export default App;
