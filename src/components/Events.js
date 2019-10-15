import React from 'react';
import Event from './Event';
import {
    Link,
    Switch,
    useRouteMatch,
    useParams
  } from 'react-router-dom';

class Events extends React.Component {
    render() {
        // let { path, url } = useRouteMatch();
        const events = this.props.currentUser.events.map(e => <Event key={e.id} event={e} updateEvent={this.props.updateEvent} />)

        const hostedEvents = this.props.currentUser.hosted_events.map(e => <Event key={e.id} event={e} updateEvent={this.props.updateEvent} />)

        return (
            <div>
                <h2>Events</h2>
                {events}
                <h2>Hosted Events</h2>
                {hostedEvents}
            </div>
        )
    }
}

export default Events;

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