import React from 'react';
import LoginInput from '../components/LoginInput';

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <LoginInput />
            </div>
        )
    }
}

export default Login;