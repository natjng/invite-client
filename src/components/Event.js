import React from 'react';
import { connect } from 'react-redux';
import { rsvpEvent, removeRsvpEvent } from '../actions/eventActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
var moment = require('moment');

class Event extends React.Component {
    // event = this.props.events.find(e => e.id === this.props.match.params.id)
    // bad practice to use global variables

    // state = {
    //     event: 
    // }

    findEvent = () => {        
        let event = this.props.events.find(e => e.id === this.props.match.params.id)
        console.log(event);
        return event;
    }

    handleClick = () => {
        console.log('rsvp clicked');
        // this.props.rsvpEvent(this.props.event.id);
    }

    render() {
        let event = this.findEvent()
        return (
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                <Card.Title>{event.attributes.name}</Card.Title>
                {event.attributes.date ? <><strong>Date: </strong>{event.attributes.date}<br/></> : ''}
                {event.attributes.location ? <><strong>Location: </strong>{event.attributes.location}<br/></> : ''}
                {event.attributes.description ? <><br/><strong>Description: </strong>{event.attributes.description}<br/></> : ''}
                </Card.Body>
                <Button variant="primary" >RSVP</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);
// export default Event;