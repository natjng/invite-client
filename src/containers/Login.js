import React from 'react';
import LoginInput from '../components/LoginInput';
import User from '../components/User';

class Login extends React.Component {
    state = {
        loggedIn: false,
        email: '',
        name: '',
        events: [],
        hosted_events: []
    }

    getUser = () => {
        // configObj
// change to method: 'POST' to use email inputted
        fetch('http://localhost:3000/users/6')
            .then(r => r.json())
            .then(json => {
                console.log(json)
                const user = json.data.attributes
                this.setState({loggedIn: true, email: user.email, name: user.name, events: user.events, hosted_events: user.hosted_events})
                console.log(this.state);
            })
    }

    handleOnChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUser();
    }

    render() {
        // debugger
        return (
            <div className="login-container">
                {this.state.loggedIn ? 
                <User user={this.state} /> 
                : 
                <LoginInput handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default Login;