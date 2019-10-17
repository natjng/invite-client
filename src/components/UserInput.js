import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/userActions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserInput extends React.Component {
    state = {
        user: {
            id: this.props.currentUser.id,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
        }
    };

    handleChange = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateUser(this.state.user);
        this.setState({
            user: {
                ...this.state.user,
                name: this.state.user.name,
                email: this.state.user.email,
            }
        })
        // redirect to profile page
    }

    render() {
        return (
            <Container className="user-form">
                <Col style={{ width: '30rem' }}>
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
                </Col>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);