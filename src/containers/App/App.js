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

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    loadUser = (user) => {
        this.setState({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                entries: user.entries,
                date: user.date
            }
        }, function() {
            console.log(this.state.user);
        });
    }

    render() {
        let content;
        if(this.state.route === "signIn") {
            content = <SignIn 
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
            />;
        } else if(this.state.route === "signUp") {
            content = <SignUp 
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
            />;
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
