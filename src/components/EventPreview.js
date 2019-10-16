import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';
// import Event from './Event';

class EventPreview extends React.Component {

    // this.props. event, updateEvent, rsvpEvent

    handleClick = () => {
        // rsvpEvent(this.props.event.id);
        console.log('rsvp clicked');
        
    }

    render() {       

        const rsvpButton = this.props.currentUser.events.find(event => event.id === parseInt(this.props.event.id, 10)) ? <Button variant="light" size="sm" >Going</Button> : <Button variant="primary" size="sm" onClick={this.handleClick} >RSVP</Button>

        return (
            <Card style={{ width: '30rem' }}>
                <Card.Header as="h5">{this.props.event.attributes.name}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>{this.props.event.attributes.name}</Card.Title> */}
                    {/* <Card.Subtitle>{this.props.event.attributes.date ? `Date: ${this.props.event.attributes.date}` : ''}</Card.Subtitle> */}

                    <Card.Text>{this.props.event.attributes.date ? `${this.props.event.attributes.date}, start_time` : ''}</Card.Text>
                    <Card.Text>date, start_time <br/> location <br/> <Card.Link href="#">Details</Card.Link> </Card.Text>

                    {/* {this.props.event.attributes.guests.filter(guest => guest.id === this.props.currentUser.id) ? "RSVP'd" : <Button onClick={this.handleClick} >RSVP</Button>} */}
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

export default connect(mapStateToProps)(EventPreview);