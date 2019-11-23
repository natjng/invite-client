import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Events from '../components/Events';

function EventsContainer({events}) {
    let { path, url } = useRouteMatch();

    return (
        <div className="events-container">
            <ButtonGroup className="mt-2">
                <Link to={`${url}/attending`}><Button className="events-button" variant="outline-primary">Attending</Button></Link>
                <Link to={`${url}/hosting`}><Button className="events-button" variant="outline-primary">Hosting</Button></Link>
            </ButtonGroup>

            <Switch>
                <Route exact path={path}>
                    <h2>All Events</h2>
                    <Events events={events}/>
                </Route>  
                <Route exact path={`${path}/:eventType`}>
                    <Events events={events}/>
                </Route>
            </Switch> 
        </div>
    )
}

export default EventsContainer;
