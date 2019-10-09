import React, { Component } from 'react';

class LoginInput extends Component {
    render() {
        return (
            <div className="login-form" >
                <form>
                    <input type="text" name="email" placeholder="Email" /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginInput;