import React from 'react';
// import LoginInput from '../components/LoginInput';
// import User from '../components/User';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    }

    render() {
        // debugger
        return (
            <div className="login-container">
                <Container className="p-3">
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId="email">
                            {/* <input type="email" name="email" placeholder="Email" /><br/>
                            <input type="submit" /> */}

                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                name="email" 
                                onChange={this.handleOnChange}
                                value={this.state.user.email}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return { currentUser: state.currentUser }
// }

export default connect(null, { loginUser })(withRouter(Login));