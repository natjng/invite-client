import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class Event extends React.Component {

    handleClick = () => {
        console.log('rsvp clicked');
        // this.props.rsvpEvent(this.props.event.id);
    }

    render() {
        return (
            <Card style={{ width: '30rem' }}>
                Event Show
                {/* <Card.Body>
                <Card.Title>{this.props.event.name}</Card.Title>
                {this.props.event.date ? `Date: ${this.props.event.date}` : ''}
                </Card.Body> */}
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