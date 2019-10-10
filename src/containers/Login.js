import React from 'react';
import LoginInput from '../components/LoginInput';

class Login extends React.Component {
    state = {
        email: ''
    }

    handleOnChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // configObj
        // fetch()
    }

    render() {
        return (
            <div className="login-container">
                <LoginInput handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Login;