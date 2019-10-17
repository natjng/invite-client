import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
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
    }

    render() {
        return (
            <Container className="user-form">
                <Col style={{ width: '30rem' }}>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="email">
                        <h3><Form.Label>Login or <br/>Create an Account</Form.Label></h3>
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
                </Col>
            </Container>
        )
    }
}

export default LoginInput;