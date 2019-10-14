import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserInput extends React.Component {
    state = {
        user: {
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
        }
    };

    handleChange = (e) => {
        this.setState({
            user: {
                // email: e.target.value
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateUser(this.state.user);
        this.setState({
            user: {
                name: '',
                email: '',
            }
        })
        // redirect to home page
    }

    render() {
        console.log(this.state.user);
        
        return (
            <Container className="p-3">
                <h2>Edit Profile</h2>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange}
                            value={this.state.user.name}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
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

export default UserInput;