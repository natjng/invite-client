import React from 'react';
import EventPreview from './EventPreview';
import { connect } from 'react-redux';

// import {
//     Link,
//     Switch,
//     useRouteMatch,
//     useParams
//   } from 'react-router-dom';

class Events extends React.Component {
    render() {
        // let { path, url } = useRouteMatch();

        // add custom attr for event.guests_ids that is an array, use includes
        const usersEvents = this.props.events.all.filter(event => {
            if (event.attributes.guests.length) {
                const eventGuests = event.attributes.guests
                return eventGuests.filter(guest => guest.id === parseInt(this.props.currentUser.id, 10))
            } 
        })
        const events = usersEvents.map(e => <EventPreview key={e.id} event={e} updateEvent={this.props.updateEvent} />)

        const usersHostedEvents = this.props.events.all.filter(event => event.attributes.host.id === parseInt(this.props.currentUser.id, 10))
        const hostedEvents = usersHostedEvents.map(e => <EventPreview key={e.id} event={e} updateEvent={this.props.updateEvent} />)

        const allEvents = this.props.events.all.map(e => <EventPreview key={e.id} event={e} updateEvent={this.props.updateEvent} />)

        return (
            <div>
                <h2>Attending</h2>
                {events}
                <h2>Hosting</h2>
                {hostedEvents}
                <h2>All Events</h2>
                {allEvents}
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

export default connect(mapStateToProps)(Events);

/* <div>
    <Link to={`${url}/events`} >
        Events
    </Link> | 
    <Link to={`${url}/hosted-events`} >
        Events I'm Hosting
    </Link>
</div> */

/* <Switch>
    <Route exact path={path}>
        <h3>My Events</h3>
        <Events />
    </Route>
    <Route path={`${path}/:`}>
        <h3>My Events</h3>
    </Route>
</Switch> */