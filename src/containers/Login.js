import React from 'react';
import LoginInput from '../components/LoginInput';
import User from '../components/User';

class Login extends React.Component {
    state = {
        loggedIn: false,
        user: {
            email: '',
            name: '',
            events: [],
            hosted_events: []
        }
    }

    getUser = () => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user)
        }
        fetch('http://localhost:3000/users', configObj)
            .then(r => r.json())
            .then(json => {
                const data = json.data.attributes
                this.setState({
                    loggedIn: true, 
                    user: {
                        email: data.email, name: data.name, events: data.events, hosted_events: data.hosted_events
                    }
                })
                console.log(this.state);
            })
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                email: e.target.value
            }
        })
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
                <User user={this.state.user} /> 
                : 
                <LoginInput handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default Login;