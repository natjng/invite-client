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

    handleChange = (e) => {
        this.setState({
            user: {
                email: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getUser(this.state.user);
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