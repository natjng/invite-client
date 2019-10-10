import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginInput extends Component {
    render() {
        return (
            <Container className="p-3">
                <Form onSubmit={this.props.handleSubmit} >
                    <Form.Group controlId="email">
                        {/* <input type="email" name="email" placeholder="Email" /><br/>
                        <input type="submit" /> */}

                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.props.handleOnChange} />
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