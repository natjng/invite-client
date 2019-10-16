import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';
import { rsvpEvent, removeRsvpEvent } from '../actions/eventActions';
// import Event from './Event';

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
        // const eventUserObj = {
        //     event_id: eventId,
        //     user_id: this.props.currentUser.id
        // }
        this.props.removeRsvpEvent(eventUserObj);
        console.log(eventUserObj);
        
        console.log('cancel rsvp');
    }

    render() {       
        const eventUser = this.props.event.attributes.event_users.find(event_user => (event_user.event_id === parseInt(this.props.event.id, 10) && event_user.user_id === parseInt(this.props.currentUser.id, 10)))
        console.log(eventUser);

        // need to change to this.props.events
        const rsvpButton = this.props.currentUser.events.find(event => event.id === parseInt(this.props.event.id, 10)) ? <><Button variant="light" size="sm" >Going</Button><Button variant="light" size="sm" onClick={() => this.handleCancelRsvp(eventUser)} >Cancel</Button></> : <Button variant="primary" size="sm" onClick={() => this.handleRsvp(this.props.event.id)} >RSVP</Button>

        return (
            <Card style={{ width: '30rem' }}>
                <Card.Header as="h5">{this.props.event.attributes.name}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>{this.props.event.attributes.name}</Card.Title> */}
                    {/* <Card.Subtitle>{this.props.event.attributes.date ? `Date: ${this.props.event.attributes.date}` : ''}</Card.Subtitle> */}

                    <Card.Text>{this.props.event.attributes.date ? `${this.props.event.attributes.date}, start_time` : ''}</Card.Text>
                    <Card.Text>date, start_time <br/> location <br/> <Card.Link href="#">Details</Card.Link> </Card.Text>

                    {/* ^^^ use react rouer Link tag for 'Details' link */}

                    {/* {this.props.event.attributes.guests.filter(guest => guest.id === this.props.currentUser.id) ? "RSVP'd" : <Button onClick={this.handleClick} >RSVP</Button>} */}

                    {/* need to change to this.props.events */}
                    {this.props.currentUser.hosted_events.find(e => e.id === parseInt(this.props.event.id, 10)) ? <h5><Badge variant="light">Event Host</Badge></h5> : rsvpButton }
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