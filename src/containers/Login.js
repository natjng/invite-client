import React from 'react';
import LoginInput from '../components/LoginInput';
import User from '../components/User';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component {
    state = {
        user: {
            email: ''
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
                const user = {email: data.email, name: data.name, events: data.events, hosted_events: data.hosted_events}
                this.props.loginUser(user);
            })
    }

    handleOnChange = (e) => {
        this.setState({
            user: {
                email: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUser();
        
        this.setState({
            user: {
                email: ''
            }
        })
        // redirect to home page
        console.log(this.state);
    }

    render() {
        // debugger
        return (
            <div className="login-container">
                {this.props.user ? 
                <User user={this.props.user} /> 
                : 
                <LoginInput handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatch: 
//     }
// }

export default connect(null, { loginUser })(Login);