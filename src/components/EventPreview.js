import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';
import { rsvpEvent, removeRsvpEvent } from '../actions/eventActions';

class EventPreview extends React.Component {

    handleRsvp = (eventId) => {
        const eventUserObj = {
            event_id: eventId,
            user_id: this.props.currentUser.id
        }
        this.props.rsvpEvent(eventUserObj);
        console.log('rsvp clicked');
    }

    handleCancelRsvp = (eventUserObj) => {
        this.props.removeRsvpEvent(eventUserObj);        
        console.log('cancel rsvp');
    }

    userEventStatus = () => {
        const eventUser = this.props.event.attributes.event_users.find(event_user => (event_user.event_id === parseInt(this.props.event.id, 10) && event_user.user_id === parseInt(this.props.currentUser.id, 10)))

        if (this.props.event.attributes.host.id === parseInt(this.props.currentUser.id, 10)) {
            return <h5><Badge variant="light">Event Host</Badge></h5>
        }
        else if (this.props.event.attributes.guests.find(guest => guest.id === parseInt(this.props.currentUser.id, 10))) {
            return (
                <>
                    <h5><Badge variant="light">Going</Badge></h5>
                    <Button variant="light" size="sm" onClick={() => this.handleCancelRsvp(eventUser)} >Cancel</Button>
                </>)
        } else {
            return <Button variant="primary" size="sm" onClick={() => this.handleRsvp(this.props.event.id)} >RSVP</Button>
        }
    }

    render() {
        return (
            <Card className="event-card" style={{ width: '30rem' }}>
                <Card.Header as="h5">{this.props.event.attributes.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.props.event.attributes.date ? <>{(new Date(this.props.event.attributes.date).toDateString())}<br/></> : ''}
                        {this.props.event.attributes.location ? <>{this.props.event.attributes.location}<br/></> : ''}
                    </Card.Text>
                    {this.userEventStatus()}
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rsvpEvent: (eventId) => dispatch(rsvpEvent(eventId)), 
        removeRsvpEvent: (eventUsersId) => dispatch(removeRsvpEvent(eventUsersId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPreview);