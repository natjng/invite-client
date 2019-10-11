import React from 'react';
import {
    Link,
    Switch,
    useRouteMatch,
    useParams
  } from 'react-router-dom';

class Events extends React.Component {
    render() {
        // let { path, url } = useRouteMatch();
        return (
            <div>
                <h2>Events</h2>
                
                
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