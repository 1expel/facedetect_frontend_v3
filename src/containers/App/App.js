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
            route: "signIn"
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        let content;
        if(this.state.route === "signIn") {
            content = <SignIn onRouteChange={this.onRouteChange}/>;
        } else if(this.state.route === "signUp") {
            content = <SignUp onRouteChange={this.onRouteChange}/>;
        } else if(this.state.route === "home") {
            content = <Home/>;
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
