import React from 'react';
import { connect } from 'react-redux';
import EventInput from '../components/EventInput';
import Events from '../components/Events';
import { postEvent, updateEvent } from '../actions/eventActions';

class EventsContainer extends React.Component {
    render() {
        return (
            <div className="events-container">
                <EventInput postEvent={this.props.postEvent} currentUser={this.props.currentUser} />
                <Events updateEvent={this.props.updateEvent} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        currentUser: state.currentUser,
        events: state.events 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postEvent: (user) => dispatch(postEvent(user)),
        updateEvent: (user) => dispatch(updateEvent(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);