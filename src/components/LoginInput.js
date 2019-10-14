import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginInput extends React.Component {
    state = {
        user: {
            email: ''
        }
    };

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

    handleChange = (e) => {
        this.setState({
            user: {
                email: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUser();
        // this.props.loginUser(this.state.user.email);
        this.setState({
            user: {
                email: ''
            }
        })
        // redirect to home page
    }

    render() {
        return (
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
                            onChange={this.handleChange}
                            value={this.state.user.email}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default LoginInput;