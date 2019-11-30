import React from 'react';
import EventPreview from './EventPreview';
import { useParams } from 'react-router-dom';

function Events(props) {
    // let { eventType } = useParams();
    // let eventTypeCap;
    // let eventFilter = props.events;
    // if (eventType) {
    //     eventTypeCap = eventType.charAt(0).toUpperCase() + eventType.slice(1)
    //     switch (eventType) {
    //         case 'attending':
    //             eventFilter = props.attending
    //             break;
    //         case 'hosting':
    //             eventFilter = props.hosting
    //             break;
    //         default:
    //             eventFilter = props.events
    //     }
    // }
    
    const showEvents = props.events.map(e => <EventPreview key={e.id} event={e} />)

    return (
        <div className="events-container">
            {/* <h2>{eventTypeCap}</h2> */}
            {showEvents}
        </div>
    )
}

export default Events;
