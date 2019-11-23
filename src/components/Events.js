import React from 'react';
import EventPreview from './EventPreview';
import { useParams } from 'react-router-dom';

function Events(props) {

    let { eventType } = useParams();
    let eventTypeCap;
    if (eventType) {
        eventTypeCap = eventType.charAt(0).toUpperCase() + eventType.slice(1)
    }
    
    const showEvents = props.events.map(e => <EventPreview key={e.id} event={e} />)

    return (
        <div className="events-container">
            <h2>{eventTypeCap}</h2>
            {showEvents}
        </div>
    )
}

export default Events;
