import React from 'react';
import { connect } from 'react-redux';
import { postEvent, updateEvent } from '../actions/eventActions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class EventInput extends React.Component {
    state = {
        event: {
            name: '', 
            date: '',
            start_time: '',
            end_time: '',
            location: '',
            description: '',
            details: '',
        },
        submitted: false
    };

    handleChange = (e) => {
        this.setState({
            event: {
                ...this.state.event,
                [e.target.name]: e.target.value
            },
            submitted: this.state.submitted
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const event = {
            ...this.state.event, 
            host_id: this.props.currentUser.id
        }
        this.props.postEvent(event);
        this.setState({
            event: {
                name: '', 
                date: '',
                start_time: '',
                end_time: '',
                location: '',
                description: '',
                details: '',
            },
            submitted: true
        })
    }

    render() {

        if (this.state.submitted) {
            return <Redirect to="/events/hosting" />
        }

        return (
            <Container className="event-form ">
                <Col style={{ width: '30rem' }}>
                    <h2>Create an Event</h2>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                onChange={this.handleChange}
                                value={this.state.event.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="date" 
                                onChange={this.handleChange}
                                value={this.state.event.date}
                            />
                        </Form.Group>
                        <Form.Group controlId="start_time">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control 
                                type="time"
                                name="start_time" 
                                onChange={this.handleChange}
                                value={this.state.event.start_time}
                            />
                        </Form.Group>
                        <Form.Group controlId="end_time">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control 
                                type="time"
                                name="end_time" 
                                onChange={this.handleChange}
                                value={this.state.event.end_time}
                            />
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="location" 
                                onChange={this.handleChange}
                                value={this.state.event.location}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows="3"
                                name="description" 
                                onChange={this.handleChange}
                                value={this.state.event.description}
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
    return { 
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postEvent: (user) => dispatch(postEvent(user)),
        updateEvent: (user) => dispatch(updateEvent(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInput);